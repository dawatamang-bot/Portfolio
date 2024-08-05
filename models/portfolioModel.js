const { default: mongoose } = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const mongoose = require(mongoose);

const IntroSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  lottieURL: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const experienceSchema = new mongoose.Schema({
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const projectsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
});
const certificationsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  technologies: {
    type: String,
    required: true,
  },
});

module.exports = {
  Intro: mongoose.model("intros", IntroSchema),
  About: mongoose.model("abouts", aboutSchema),
  Experience: mongoose.model("experience", experienceSchema),
  Projects: mongoose.model("projects", projectsSchema),
  Certifications: mongoose.model("certifications", certificationsSchema),
};
