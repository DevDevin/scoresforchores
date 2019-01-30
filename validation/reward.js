const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRewardInput(data) {
  let errors = {};

  data.rewardName = !isEmpty(data.rewardName) ? data.rewardName : "";
  data.description = !isEmpty(data.description) ? data.description : "";

  // rewardName Validation

  if (Validator.isEmpty(data.rewardName)) {
    errors.rewardName = "Reward Name field is required";
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
