import { Applicant } from "../../models/applicant.modal.js";
import { JobApplication } from "../../models/jobApplication.modal.js";
import { JobListing } from "../../models/jobListing.modal.js";
import { Resume } from "../../models/resume.modal.js";

export const addJob = async (req, res) => {
  try {
    const {
      jobId,
      applicantId,
      coverLetter,
      status,
      resumeId,
      bookmarked,
      appliedAt,
      statusUpdateAt,
    } = req.body;

    const isJobValidId = await JobListing.exists({ _id: jobId });
    const isApplicantValidId = await Applicant.exists({ _id: applicantId });
    const isResumeValidId = await Resume.exists({ _id: resumeId });

    if (!isJobValidId || !isApplicantValidId || !isResumeValidId) {
      return res.status(400).json({
        success: false,
        message: "Id not found",
      });
    }

    const addedJob = await JobApplication.create({
      jobId,
      applicantId,
      coverLetter,
      status,
      resumeId,
      bookmarked,
      appliedAt,
      statusUpdateAt,
    });

    return res.status(201).json({
      success: true,
      data: addedJob,
      message: "added job application successfully",
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
      jobId,
      applicantId,
      coverLetter,
      status,
      resumeId,
      bookmarked,
      appliedAt,
      statusUpdateAt,
    } = req.body;

    const isJobValidId = await JobListing.exists({ _id: jobId });
    const isApplicantValidId = await Applicant.exists({ _id: applicantId });
    const isResumeValidId = await Resume.exists({ _id: resumeId });

    if (!isJobValidId || !isApplicantValidId || !isResumeValidId) {
      return res.status(400).json({
        success: false,
        message: "Id not found",
      });
    }

    const update = await JobApplication.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        jobId,
        applicantId,
        coverLetter,
        status,
        resumeId,
        bookmarked,
        appliedAt,
        statusUpdateAt,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: update,
      message: "udpated job",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const fetchAllJobs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await JobApplication.countDocuments();
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const getAllJobs = await JobApplication.find().skip(skip).limit(limit);
    return res.status(200).json({
      success: true,
      data: getAllJobs,
      page: page,
      limit: limit,
      totalPages,
      previousPage: page > 1,
      nextPage: page < totalPages,
      totalItems,
      currentPageItems: getAllJobs.length,
      message: "fetch all jobs",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const fetchSingleJob = async (req, res) => {
  try {
    const { id } = req.params;
    const single = await JobApplication.findById({ _id: id });
    return res.status(200).json({
      success: true,
      data: single,
      message: "fetch single job application",
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
    const deleted = await JobApplication.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      data: deleted,
      message: "deleted job",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const deleteAllJobs = async (req, res) => {
  try {
    const deletedAll = await JobApplication.deleteMany();
    return res.status(200).json({
      success: true,
      data: deletedAll,
      message: "fetch all jobs",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};
