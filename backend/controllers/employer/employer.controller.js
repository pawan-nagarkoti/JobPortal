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
    const { id } = req.params;
    const data = qs.parse(req.body, { allowDots: true });
    if (!data)
      return res.status(400).json({ success: true, message: "no data" });

    // common function for detect image url or file
    async function detectsImages(existingUrl = "", newFilePath = "") {
      if (newFilePath) {
        const image = await uploadOnCloudinary(newFilePath);
        return image?.secure_url;
      }
      return existingUrl || "";
    }

    const bannerImage = await detectsImages(
      data?.banner || "",
      req?.files?.banner?.[0]?.path || ""
    );
    const logoImage = await detectsImages(
      data?.logo || "",
      req?.files?.logo?.[0]?.path || ""
    );

    // let bannerImage, logoImage;
    // if (data.banner) {
    //   bannerImage = data.banner;
    // } else {
    //   let image = await uploadOnCloudinary(req.files.banner[0].path);
    //   bannerImage = image?.secure_url;
    // }

    // if (data.logo) {
    //   logoImage = data.logo;
    // } else {
    //   let image = await uploadOnCloudinary(req.files.logo[0].path);
    //   logoImage = image?.secure_url;
    // }

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
      logo: logoImage,
      banner: bannerImage,
    };

    const update = await Employer.findByIdAndUpdate(
      {
        _id: id,
      },
      employerObj,
      {
        new: true,
      }
    );

    if (update) {
      return res.status(200).json({
        success: true,
        data: update,
        message: "updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "something is wrong",
      });
    }
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({
      message: "server error",
    });
  }
};

export const deleteEmployer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "deleted id not found",
      });
    }

    const deletedEmployer = await Employer.findOne({ _id: id });
    if (deletedEmployer) {
      return res.status(200).json({
        success: true,
        message: "deleted employer",
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
      message: "server error",
    });
  }
};

export const fetchSingleEmployer = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "employer id required",
      });
    }

    const singleEmployer = await Employer.findOne({ _id: id });

    if (singleEmployer) {
      return res.status(200).json({
        success: true,
        data: singleEmployer,
        message: "fetched single employer",
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
