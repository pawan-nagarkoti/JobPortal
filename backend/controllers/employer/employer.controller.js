import { Employer } from "../../models/employer.modal.js";

export const addEmployer = async (req, res) => {
  try {
    const {
      name,
      description,
      organization,
      industry,
      teamSize,
      establishmentYear,
      url,
      companyVision,
      country,
      countryCode,
      number,
      email,
      city,
    } = req.body;

    const employerObj = {
      name,
      description,
      organization,
      industry,
      teamSize,
      establishmentYear,
      url,
      companyVision,
      countryCode,
      number,
      contact: {
        location: {
          country,
          city,
        },
        phone: {
          countryCode,
          number,
        },
        email,
      },
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
  }
};

export const updateEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchSingleEmployer = async (req, res) => {
  try {
  } catch (e) {
    console.log(e.message);
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
