const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DayOfJobSchema = new Schema({
  jobName: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  childName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: "this description will be pulled in from the job object"
  },
  notes: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: "In Progress"
  },
  points: {
    type: Number,
    default: 10 // this will be pulled in from the job object
  }
});

module.exports = DayofJob = mongoose.model("dayofjob", DayOfJobSchema);
