import qs from "qs";
import { uploadOnCloudinary } from "../../lib/cloudinary.js";
import { Applicant } from "../../models/applicant.modal.js";

export const addApplicant = async (req, res) => {
  try {
    const data = qs.parse(req.body, { allowDots: true });
    const profileImage = await uploadOnCloudinary(
      req.files.profilePicture[0].path
    );

    const applicantObj = {
      userId: data.userId,
      profilePicture: profileImage.secure_url,
      biography: data.biography,
      dob: data.dob,
      nationality: data.nationality,
      gender: data.gender,
      maritalStatus: data.maritalStatus,
      experience: data.experience,
      education: data.education,
      websiteUrl: data.websiteUrl,
      location: data.location,
      title: data.title,
      socialLinks: data.socialLinks,
      phone: {
        countryCode: data.countryCode,
        number: data.number,
      },
      alertJob: {
        role: data.role,
        location: data.location,
      },
      profilePrivacy: data.profilePrivacy,
      resumePrivacy: data.resumePrivacy,
    };

    const newApplicant = await Applicant.create(applicantObj);
    if (addApplicant) {
      return res.status(201).json({
        success: true,
        newApplicant,
        message: "added new applicant",
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

export const fetchApplicant = async (req, res) => {
  try {
    const applicants = await Applicant.find();
    return res.status(200).json({
      success: true,
      applicants,
      message: "fetch all aplicants",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: "false",
      message: "server error",
    });
  }
};

export const singleApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const applicant = await Applicant.findOne({ _id: id });
    return res.status(200).json({
      success: true,
      applicant,
      message: "fetch single applicant",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "fetch single applicant",
    });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedApplicant = await Applicant.deleteOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: deletedApplicant,
      message: "deleted applicant",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

export const deleteAllApplicant = async (req, res) => {
  try {
    const deletedApplicant = await Applicant.deleteMany();
    return res.status(200).json({
      success: true,
      data: deletedApplicant,
      message: "deleted applicant",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};
