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
      message: "server error",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const fetchAllJobs = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const fetchSingleJob = async (req, res) => {
  try {
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
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteAllJobs = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
