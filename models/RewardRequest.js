const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RewardRequestSchema = new Schema({
  rewardName: {
    type: String,
    required: true
  },
  requestorName: {
    type: String,
    required: true
  },
  rewardPoints: {
    type: Number,
    required: true
  },
  requestorPoints: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "Submitted"
  },
  noteFromParent: {
    type: String,
    required: false
  }
});

module.exports = RewardRequest = mongoose.model(
  "rewardRequest",
  RewardRequestSchema
);
