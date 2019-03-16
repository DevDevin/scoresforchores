const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRewardRequestInput(data) {
  let errors = {};

  data.rewardName = !isEmpty(data.rewardName) ? data.rewardName : "";

  // Reward Name Validation

  if (Validator.isEmpty(data.rewardName)) {
    errors.rewardName = "Reward Name field is required";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
