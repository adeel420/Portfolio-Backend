const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    languages: {
      type: String,
    },
    projectLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
