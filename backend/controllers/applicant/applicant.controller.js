import qs from "qs";
import { uploadOnCloudinary } from "../../lib/cloudinary.js";
import { Applicant } from "../../models/applicant.modal.js";
import { User } from "../../models/user.modal.js";
import { GENDER } from "../../constant.js";

export const addApplicant = async (req, res) => {
  try {
    const data = qs.parse(req.body, { allowDots: true });

    // check user has already created applicant or not?
    const isApplicantAllreadyCreated = await Applicant.exists({
      userId: data.userId,
    });
    if (isApplicantAllreadyCreated) {
      return res.status(200).json({
        success: false,
        message: "user is already created applicant",
      });
    }

    const profileImage = await uploadOnCloudinary(req.files.profilePicture[0].path);

    const applicantObj = {
      name: data.name,
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
        jobTitle: JSON.parse(data.alertJob.jobTitle),
        alertLocation: JSON.parse(data.alertJob.alertLocation),
      },
      profilePrivacy: data.profilePrivacy,
      resumePrivacy: data.resumePrivacy,
    };

    const isValidUserId = await User.exists({ _id: data.userId });
    if (!isValidUserId) {
      return res.status(400).json({
        success: false,
        message: "user id is not found",
      });
    }

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
      message: `server error ${e.message}`,
    });
  }
};

export const fetchApplicant = async (req, res) => {
  try {
    const applicantName = req.query.name;
    const location = req.query.location;
    const gender = req.query.gender;
    const userId = req.query.userId;
    const employerId = req.query.employerId;

    const filter = {};

    if (applicantName) {
      filter.name = { $regex: applicantName, $options: "i" };
    }

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (gender) {
      filter.gender = Object.values(GENDER).includes(gender) ? gender : null;
    }

    if (userId) {
      filter.userId = userId;
    }

    if (employerId) {
      filter["bookmarkCandidate.employerId"] = employerId;
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await Applicant.countDocuments(filter);
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const applicants = await Applicant.find(filter).skip(skip).limit(limit);

    return res.status(200).json({
      success: true,
      applicants,
      page: page,
      limit: limit,
      totalPages,
      previousPage: page > 1,
      nextPage: page < totalPages,
      totalItems,
      currentPageItems: applicants.length,
      message: "fetch all aplicants",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: "false",
      message: `server error ${e.message}`,
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
      message: `server error ${e.message}`,
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
      message: `server error ${e.message}`,
    });
  }
};

export const updateApplicant = async (req, res) => {
  try {
    const { id } = req.params;
    const data = qs.parse(req.body, { allowDots: true });
    let profileImage;

    if (req.files.profilePicture) {
      const image = await uploadOnCloudinary(req.files.profilePicture[0].path);
      profileImage = image?.secure_url;
    } else {
      profileImage = data.profilePicture;
    }

    if (data.bookmarkCandidate) {
      const employerId = data.bookmarkCandidate.employerId;
      const bookmark = data.bookmarkCandidate.bookmark;

      const existing = await Applicant.findOne({
        _id: id,
        "bookmarkCandidate.employerId": employerId,
      });

      if (existing) {
        const updated = await Applicant.findOneAndUpdate(
          { _id: id, "bookmarkCandidate.employerId": employerId },
          {
            $set: {
              "bookmarkCandidate.$.bookmark": bookmark,
            },
          },
          { new: true },
        );

        return res.status(200).json({
          success: true,
          message: "Bookmark updated",
          data: updated,
        });
      } else {
        const updated = await Applicant.findByIdAndUpdate(
          id,
          {
            $push: {
              bookmarkCandidate: {
                employerId,
                bookmark,
              },
            },
          },
          { new: true },
        );

        return res.status(200).json({
          success: true,
          message: "Bookmark added",
          data: updated,
        });
      }
    }

    const applicantObj = {
      name: data.name,
      userId: data.userId,
      profilePicture: profileImage,
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
        jobTitle: JSON.parse(data.alertJob.jobTitle),
        alertLocation: JSON.parse(data.alertJob.alertLocation),
      },
      profilePrivacy: data.profilePrivacy,
      resumePrivacy: data.resumePrivacy,
    };

    const updatedApplicant = await Applicant.findByIdAndUpdate({ _id: id }, applicantObj, { new: true });

    return res.status(200).json({
      success: true,
      data: updateApplicant,
      message: updatedApplicant,
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};
