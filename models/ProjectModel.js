const { model, Schema } = require("mongoose");

const projectSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },
  technologies: {
    type: [String],
    default: [],
    required: [true, "please provide technologies"],
  },
  images: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  description: String,
  link: {
    type: {
      type: String,
    },
    requried: [true, "please provide website link"],
  },
  projectType: {
    type: String,
    default: "front_end",
    enum: {
      values: ["front_end", "back_end"],
      message: "please provide a valid project type",
    },
  },
});

const projectModel = new model("Project", projectSchema);

module.exports = projectModel;
