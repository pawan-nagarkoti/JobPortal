import { uploadOnCloudinary } from "../../lib/cloudinary.js";
import { Employer } from "../../models/employer.modal.js";
import qs from "qs";

export const addEmployer = async (req, res) => {
  try {
    const data = qs.parse(req.body, { allowDots: true });
    const { logo, banner } = req.files;

    const employerLogo = await uploadOnCloudinary(logo[0].path);
    const employerBanner = await uploadOnCloudinary(banner[0].path);

    const employerObj = {
      name: data.name,
      description: data.description,
      organization: data.organization,
      industry: data.industry,
      teamSize: data.teamSize,
      establishmentYear: data.establishmentYear,
      url: data.url,
      companyVision: data.companyVision,
      contact: {
        location: {
          country: data.country,
          city: data.city,
        },
        phone: {
          countryCode: data.countryCode,
          number: data.number,
        },
        email: data.email,
      },
      socialLinks: data.socialLinks,
      logo: employerLogo?.secure_url,
      banner: employerBanner?.secure_url,
    };

    const addedEmployer = await Employer.create(employerObj);
    if (addedEmployer) {
      return res.status(201).json({
        success: true,
        data: addedEmployer,
        message: "added employer",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const fetchEmployers = async (req, res) => {
  try {
    const getEmployers = await Employer.find();

    return res.status(200).json({
      success: true,
      data: getEmployers,
      message: "fetch all employers",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const updateEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const fetchSingleEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteAllEmployer = async (req, res) => {
  try {
    await Employer.deleteMany({});
    return res.status(200).json({
      success: true,
      message: "deleted all employers",
    });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};
