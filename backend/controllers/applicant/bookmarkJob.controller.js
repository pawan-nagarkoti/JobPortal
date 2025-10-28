import { Applicant } from "../../models/applicant.modal.js";
import { JobListing } from "../../models/jobListing.modal.js";
import { SavedJob } from "../../models/savedJob.modal.js";

export const addBookmark = async (req, res) => {
  try {
    const { jobId, applicantId, notes } = req.body;

    if (!jobId || !applicantId) {
      return res.status(400).json({
        message: "required fields",
      });
    }

    const isValidJobId = await JobListing.exists({ _id: jobId });
    const isValidApplicantId = await Applicant.exists({ _id: applicantId });

    if (!isValidJobId || !isValidApplicantId) {
      return res.status(400).json({
        success: false,
        message: "Id not found",
      });
    }

    const add = await SavedJob.create({
      jobId,
      applicantId,
      notes,
    });

    return res.status(201).json({
      success: true,
      data: add,
      message: "added bookmark",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const fetchBookmark = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await SavedJob.countDocuments();
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const fetch = await SavedJob.find()
      .populate(
        "jobId",
        "title workType location.country location.city salary.minSalary salary.maxSalary isExpired isActive expiresAt"
      )
      .populate("applicantId", "profilePicture")
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      success: true,
      data: fetch,
      page: page,
      limit: limit,
      totalPages,
      previousPage: page > 1,
      nextPage: page < totalPages,
      totalItems,
      currentPageItems: fetch.length,
      message: "fetch bookmarked job",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const fetchSingleBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const single = await SavedJob.findOne({ _id: id })
      .populate(
        "jobId",
        "title workType location.country location.city salary.minSalary salary.maxSalary isExpired isActive expiresAt"
      )
      .populate("applicantId", "profilePicture");
    return res.status(200).json({
      success: true,
      data: single,
      message: "single bookmarked job fetch",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await SavedJob.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      data: deleted,
      message: "deleted bookmark job",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteAllBookmark = async (req, res) => {
  try {
    const deleted = await SavedJob.deleteMany();
    return res.status(200).json({
      success: true,
      data: deleted,
      message: "add saved job deleted",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
