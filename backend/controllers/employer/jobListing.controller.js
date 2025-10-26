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
      salary: {
        minSalary,
        maxSalary,
        period,
        currency,
      },
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      workType,
      jobLevel,
      location: {
        country,
        city,
        isRemoteWorldwidePosition,
      },
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

export const fetchJobs = async (req, res) => {
  try {
    const allJobs = await JobListing.find();

    if (allJobs) {
      return res.status(200).json({
        success: true,
        data: allJobs,
        message: "fetched all jobs",
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

export const singleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const fetchSingleJob = await JobListing.findOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: fetchSingleJob,
      message: "job fetched",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await JobListing.deleteOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: deletedJob,
      message: "job deleted",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteAllJob = async (req, res) => {
  try {
    await JobListing.deleteMany();
    return res.status(200).json({
      message: "deleted all jobs",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
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

    const updatedJobObj = {
      employerId,
      title,
      tags,
      salary: {
        minSalary,
        maxSalary,
        period,
        currency,
      },
      education,
      experience,
      jobType,
      vacancies,
      expirationDate,
      workType,
      jobLevel,
      location: {
        country,
        city,
        isRemoteWorldwidePosition,
      },
      jobBenefits,
      description,
      applyJob,
      isExpired,
      isFeatured,
      isActive,
      expiresAt,
    };

    const updatedJob = await JobListing.findByIdAndUpdate(
      {
        _id: id,
      },
      updatedJobObj,
      { new: true }
    );

    if (updatedJob) {
      return res.status(200).json({
        success: true,
        data: updatedJob,
        message: "Job updated",
      });
    } else {
      return res.status(200).json({
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
