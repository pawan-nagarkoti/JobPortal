import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ")
      ? authHeader?.slice(7)
      : null;

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err.message);
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ success: false, message: "Access token expired" });
    }
    if (err.name === "JsonWebTokenError" || err.name === "NotBeforeError") {
      return res
        .status(401)
        .json({ success: false, message: "Invalid access token" });
    }
    return next(err);
  }
};
