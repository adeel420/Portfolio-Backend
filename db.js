require("dotenv").config();
const mongoose = require("mongoose");
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected");
});
db.on("disconnected", () => {
  console.log("Disconnected");
});
db.on("error", (err) => {
  console.log("Error", err);
});
module.exports = db;
