const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

const jwtAuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];
    if (!token || token === "null" || token === "undefined") {
      return res.status(401).json({ error: "Invalid token" });
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified.id) {
      return res.status(401).json({ error: "Invalid token payload" });
    }

    req.user = { id: verified.id };
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET);
};

module.exports = { jwtAuthMiddleware, generateToken };
