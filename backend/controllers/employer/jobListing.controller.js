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
      workType,
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
      message: `server error ${e.message}`,
    });
  }
};

export const fetchJobs = async (req, res) => {
  try {
    const jobId = req.params;
    const title = req.query.title;
    const country = req.query.country;
    const city = req.query.city;
    const jobType = req.query.jobType;
    const workType = req.query.workType;
    const remoteJob = req.query.remoteJob;
    const salary = req.query.salary;
    const isFeatured = req.query.isFeatured;
    const location = req.query.location;
    const employerId = req.query.employerId;

    let filter = {};

    // filter.title = { $regex: title, $options: "i" };
    if (title) {
      const titleArray = title
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      filter.title = {
        $in: titleArray.map((t) => new RegExp(t, "i")),
      };
    }

    if (location) {
      const l = location
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const regex = new RegExp(l.join("|"), "i");

      filter.$or = [{ "location.country": regex }, { "location.city": regex }];
    }

    if (country) {
      filter["location.country"] = { $regex: country, $options: "i" };
    }
    if (city) {
      filter["location.city"] = { $regex: city, $options: "i" };
    }
    if (jobType) {
      filter.jobType = jobType;
    }
    if (workType) {
      filter.workType = workType;
    }
    if (remoteJob) {
      filter.jobType = "remote";
    }
    if (salary) {
      const [minimum, maximum] = salary.split("-").map(Number);
      filter = {
        "salary.minSalary": { $gte: minimum },
        "salary.maxSalary": { $lte: maximum },
      };
    }
    if (employerId) {
      filter.employerId = employerId;
    }

    if (isFeatured) {
      filter.isFeatured = isFeatured;
    }

    //pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await JobListing.countDocuments(filter); // filter with count
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const allJobs = await JobListing.find(filter)
      .populate({
        path: "employerId",
        select: "name logo",
      })
      .skip(skip)
      .limit(limit);

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
      message: `server error ${e.message}`,
    });
  }
};

export const singleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const fetchSingleJob = await JobListing.findOne({ _id: id }).populate({
      path: "employerId",
      select: "name logo",
    });
    return res.status(200).json({
      success: true,
      data: fetchSingleJob,
      message: "job fetched",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
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
      message: `server error ${e.message}`,
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
      message: `server error ${e.message}`,
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
      { new: true },
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
      message: `server error ${e.message}`,
    });
  }
};
