const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobSchema = new Schema({
  jobName: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

module.exports = Job = mongoose.model("jobs", JobSchema);
