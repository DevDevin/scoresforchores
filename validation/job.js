const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateJobInput(data) {
  let errors = {};

  data.jobName = !isEmpty(data.jobName) ? data.jobName : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  // job Validation

  if (Validator.isEmpty(data.jobName)) {
    errors.jobName = "Job Name field is required";
  }

  // Points Validation
  if (!Validator.isNumeric(data.points)) {
    errors.points = "Points field must be a number";
  }

  if (Validator.isEmpty(data.points)) {
    errors.points = "Points field is required";
  }

  // Description Validation
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
