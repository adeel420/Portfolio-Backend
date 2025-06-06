const Project = require("../models/projectModel");

exports.create = async (req, res) => {
  try {
    let { title, languages, projectLink, githubLink } = req.body;
    let thumbnail = req.body.thumbnail;

    if (req.file && req.file.path) {
      thumbnail = req.file.path; // ✅ Now this is okay
    }

    const newData = new Project({
      title,
      thumbnail,
      languages,
      projectLink,
      githubLink,
    });
    const response = await newData.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.get = async (req, res) => {
  try {
    const response = await Project.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.singleGet = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Project.findById(id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, languages, projectLink, githubLink } = req.body;
    let updatedData = {
      title,
      languages,
      projectLink,
      githubLink,
    };
    if (req.file && req.file.path) {
      updatedData.thumbnail = req.file.path;
    }
    const updatedProject = await Project.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};

exports.deleted = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Project.findByIdAndDelete(id);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
};
