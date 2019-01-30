const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RewardSchema = new Schema({
  rewardName: {
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

module.exports = Reward = mongoose.model("rewards", RewardSchema);
