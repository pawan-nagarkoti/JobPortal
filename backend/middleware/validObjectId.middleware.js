import mongoose from "mongoose";

export const validateObjectIds = (fields = []) => {
  return (req, res, next) => {
    for (const field of fields) {
      const value =
        req.params[field] ||
        req.query[field] ||
        req.body[field] ||
        (req.files && req.files[field]?.[0]?.filename); // in case of form-data files

      if (value && !mongoose.Types.ObjectId.isValid(value)) {
        return res.status(400).json({
          success: false,
          message: `Invalid ${field} format.`,
        });
      }
    }
    next();
  };
};
