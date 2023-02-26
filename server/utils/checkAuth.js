import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
  if (!token) {
    return res.status(403).json({
      message: "No access",
    });
  }
  try {
    const decodedToken = jwt.verify(token, "secretweakside");
    req.userId = decodedToken._id;
    next();
  } catch (error) {
    res.status(403).json({
      message: "No access",
    });
  }
};
