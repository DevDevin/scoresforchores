const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDayofJobInput(data) {
  let errors = {};

  data.jobName = !isEmpty(data.jobName) ? data.jobName : "";
  data.day = !isEmpty(data.day) ? data.day : "";

  // jobname Validation

  if (Validator.isEmpty(data.jobName)) {
    errors.jobName = "Job Name field is required";
  }

  // Day Validation

  if (Validator.isEmpty(data.day)) {
    errors.day = "You must choose a day of the week to assign this job";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
