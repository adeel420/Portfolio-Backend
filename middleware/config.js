const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "adeelimran468@gmail.com",
    pass: "axzxuyltovmazpgi",
  },
  debug: true,
});

module.exports = transporter;
