import { JobListing } from "../../models/jobListing.modal.js";

export const addJob = async (req, res) => {
  try {
    const {
      employerId,
      title,
      tags,
      minSalary,
      maxSalary,
      period,
      currency,
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      workType,
      jobLevel,
      country,
      city,
      isRemoteWorldwidePosition,
      jobBenefits,
      description,
      applyJob,
      isExpired,
      isFeatured,
      isActive,
      expiresAt,
    } = req.body;

    const add = await JobListing.create({
      employerId,
      title,
      tags,
      minSalary,
      maxSalary,
      period,
      currency,
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      workType,
      jobLevel,
      country,
      city,
      isRemoteWorldwidePosition,
      jobBenefits,
      description,
      applyJob,
      isExpired,
      isFeatured,
      isActive,
      expiresAt,
    });

    if (add) {
      return res.status(201).json({
        success: true,
        data: add,
        message: "New Job listed",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something wrong",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
