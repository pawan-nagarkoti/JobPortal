import { Employer } from "../../models/employer.modal.js";
import { JobListing } from "../../models/jobListing.modal.js";

export const search = async (req, res) => {
  try {
    const { keyword, country, searchFor } = req.query;

    if (!keyword || !country || !searchFor) {
      return res.status(200).json({
        success: false,
        message: "fields  are required",
      });
    }

    const regEx = new RegExp(keyword, "i");

    const filterJob = {
      $or: [
        { title: regEx },
        { jobType: regEx },
        { workType: regEx },
        { jobLevel: regEx },
        { "location.city": regEx },
        { "tags.name": regEx },
      ],
      "location.country": country,
    };

    const filterEmployer = {
      $or: [{ name: regEx }, { organization: regEx }, { industry: regEx }],
    };

    switch (true) {
      case searchFor === "job":
        const filterJobResponse = await JobListing.find(filterJob);
        res.status(200).json({
          success: true,
          type: "Job",
          data: filterJobResponse,
          message: "fetch jobs",
        });
        break;

      case searchFor === "employer":
        const filterEmployerResponse = await Employer.find(filterEmployer);
        res.status(200).json({
          success: true,
          type: "Employer",
          data: filterEmployerResponse,
          message: "fetch employer",
        });
        break;
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};
