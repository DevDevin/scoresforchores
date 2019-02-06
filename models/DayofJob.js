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
  }
});

module.exports = DayofJob = mongoose.model("dayofjob", DayOfJobSchema);
