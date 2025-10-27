import { uploadOnCloudinary } from "../../lib/cloudinary.js";
import { Applicant } from "../../models/applicant.modal.js";
import { Resume } from "../../models/resume.modal.js";

export const addResume = async (req, res) => {
  try {
    const { applicantId, title } = req?.body;
    const { cv } = req?.files;

    if (!applicantId || !title || !cv) {
      return res.status(400).json({
        success: false,
        message: "field required",
      });
    }

    const resumeFile = await uploadOnCloudinary(
      cv[0]?.path,
      "jobPortal/resume"
    );

    const add = await Resume.create({
      applicantId,
      title,
      cv: resumeFile?.secure_url,
    });

    return res.status(201).json({
      success: true,
      data: add,
      message: "added new resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const { applicantId, title } = req.body;
    const { cv } = req.files;

    let resumeFile;
    if (cv) {
      let image = await uploadOnCloudinary(cv[0].path);
      resumeFile = image?.secure_url;
    } else {
      resumeFile = req.body.cv;
    }

    const update = await Resume.findByIdAndUpdate(
      { _id: id },
      {
        applicantId,
        title,
        cv: resumeFile,
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      data: update,
      message: "update resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const fetchResume = async (req, res) => {
  try {
    const fetch = await Resume.find();
    return res.status(200).json({
      success: true,
      data: fetch,
      message: "fetch all resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const fetchSingleResume = async (req, res) => {
  try {
    const { id } = req.params;
    const singleResume = await Resume.findOne({ _id: id });

    return res.status(200).json({
      success: true,
      data: singleResume,
      message: "fetch single resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedResume = await Resume.deleteOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: deletedResume,
      message: "delete resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteAllResume = async (req, res) => {
  try {
    const deletedResume = await Resume.deleteMany({});
    return res.status(200).json({
      success: true,
      data: deletedResume,
      message: "delete resume",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};
