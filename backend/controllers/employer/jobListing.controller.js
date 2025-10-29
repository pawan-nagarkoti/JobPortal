import { JOB_TYPE, WORK_TYPE } from "../../constant.js";
import { Employer } from "../../models/employer.modal.js";
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

    const isValidEmployertId = await Employer.exists({ _id: employerId });

    if (!isValidEmployertId) {
      return res.status(400).json({
        success: false,
        message: "Id not found",
      });
    }

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
    const search = req.query.search;
    const location = req.query.location;
    const workType = req.query.workType;
    const remoteJob = req.query.remoteJob;
    const industry = req.query.industry;
    const salary = req.query.salary;

    let filter = {};

    if (search || location) {
      const searchContainer = [];

      if (search) {
        searchContainer.push({
          $or: [
            { title: { $regex: search, $options: "i" } },
            { jobLevel: { $regex: search, $options: "i" } },
            { workType: { $regex: search, $options: "i" } },
            { jobType: { $regex: search, $options: "i" } },
            { tags: { $in: [new RegExp(search, "i")] } },
          ],
        });
      }

      if (location) {
        searchContainer.push({
          $or: [
            { "location.country": { $regex: location, $options: "i" } },
            { "location.city": { $regex: location, $options: "i" } },
          ],
        });
      }

      // Combine both groups with $and (only if there are conditions)
      filter = searchContainer.length ? { $and: searchContainer } : {};
    }

    switch (true) {
      case remoteJob === "yes":
        filter.jobType = "remote";

      case workType ===
        (Object.values(WORK_TYPE).includes(workType) ? workType : "null"):
        filter.workType = workType;

      default:
        break;
    }

    console.log(filter);

    //pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await JobListing.countDocuments(filter);
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const allJobs = await JobListing.find(filter).skip(skip).limit(limit);

    if (allJobs) {
      return res.status(200).json({
        success: true,
        data: allJobs,
        page: page,
        limit: limit,
        totalPages,
        previousPage: page > 1,
        nextPage: page < totalPages,
        totalItems,
        currentPageItems: allJobs.length,
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
