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
    const { id } = req.params;
    const data = qs.parse(req.body, { allowDots: true });

    const blogObj = {
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
    };

    const updatedBlog = await Blog.findByIdAndUpdate({ _id: id }, blogObj, {
      new: true,
    });

    if (updatedBlog) {
      return res.status(200).json({
        success: true,
        updatedBlog,
        message: "blog updated successfully",
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

export const fetchBlogs = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const totalItems = await Blog.countDocuments();
    const totalPages = Math.max(1, Math.ceil(totalItems / limit));

    const blog = await Blog.find().skip(skip).limit(limit);
    if (blog) {
      return res.status(200).json({
        success: true,
        data: blog,
        page: page,
        limit: limit,
        totalPages,
        previousPage: page > 1,
        nextPage: page < totalPages,
        totalItems,
        currentPageItems: blog.length,
        message: "fetch all blogs",
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

export const fetchSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "blog id not found",
      });
    }
    const singleBlog = await Blog.findOne({ _id: id });
    return res.status(200).json({
      success: true,
      data: singleBlog,
      message: "deleted blog",
    });
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
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "deleted id not found",
      });
    }
    const deletedBlog = await Blog.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      success: true,
      data: deletedBlog,
      message: "deleted blog",
    });
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
