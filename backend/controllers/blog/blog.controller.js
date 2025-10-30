import { Applicant } from "../../models/applicant.modal.js";
import { Blog } from "../../models/blog.modal.js";
import qs from "qs";
import { Employer } from "../../models/employer.modal.js";

export const addBlog = async (req, res) => {
  try {
    const data = qs.parse(req.body, { allowDots: true });

    const isValidApplicant = await Applicant.exists({ _id: data.applicant });
    const isValidEmployer = await Employer.exists({ _id: data.employer });

    if (!isValidApplicant || !isValidEmployer) {
      return res.status(400).json({
        success: false,
        message: "Id not found",
      });
    }

    const addedBlog = await Blog.create({
      title: data.title,
      shortDescription: data.shortDescription,
      longDescription: data.longDescription,
      date: data.date,
      comments: data.comments,
      categories: data.categories,
      tags: data.tags,
      applicant: data.applicant,
      employer: data.employer,
      isVerified: data.isVerified,
    });

    if (addedBlog) {
      return res.status(201).json({
        success: true,
        data: addedBlog,
        message: "Blog created successfully",
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

export const updateBlog = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const fetchBlogs = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const fetchSingleBlog = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const deleteBlog = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};

export const deleteAllBlogs = async (req, res) => {
  try {
    await Blog.deleteMany();
    res.status(200).json({
      success: true,
      message: "all blogs deleted",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      success: false,
      message: `server error ${e.message}`,
    });
  }
};
