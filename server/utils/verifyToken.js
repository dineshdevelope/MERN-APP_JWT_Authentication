import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Invalid Token" });
    }
  } else {
    res.status(401).json({ message: "Unauthorized - No Token" });
  }
};

export default verifyToken;
