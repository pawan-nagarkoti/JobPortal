import { Applicant } from "../../models/applicant.modal.js";
import { Employer } from "../../models/employer.modal.js";
import { JobListing } from "../../models/jobListing.modal.js";

export const totalCount = async (req, res) => {
  // find total jobs which are active
  const totalActiveJobs = await JobListing.countDocuments({ isActive: true });

  // count new job with in a one day(12am to 12pm);
  const countTodayJobs = async (req, res) => {
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);

    const end = new Date();
    end.setUTCHours(12, 0, 0, 0);

    const count = await JobListing.countDocuments({
      createdAt: { $gte: start, $lt: end },
    });
    return count;
  };

  const totalNewJobs = await countTodayJobs();
  const totalCompanies = await Employer.countDocuments();
  const totalCandidates = await Applicant.countDocuments();

  const totalCountData = {
    activeJobs: totalActiveJobs,
    newJobs: totalNewJobs,
    companies: totalCompanies,
    candidates: totalCandidates,
  };
  return res.status(200).json({
    success: true,
    data: totalCountData,
    success: true,
    message: "Fetch all records",
  });
};
