const express = require("express");
const router = express.Router();
const passport = require("passport");

// Bring in reward input validator function
const validateRewardInput = require("../../validation/reward");

// Load Reward Model
const Reward = require("../../models/Reward");

// @route GET api/rewards/test
// @desc Tests rewards route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Rewards Works" }));

// @route POST api/rewards/add
// @desc Add reward to the database
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRewardInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Reward.findOne({ rewardName: req.body.rewardName }).then(rewardName => {
      if (rewardName) {
        errors.rewardName = "This reward already exists";
        return res.status(400).json(errors);
      } else {
        const newReward = new Reward({
          rewardName: req.body.rewardName,
          points: req.body.points,
          description: req.body.description
        });

        newReward
          .save()
          .then(reward => res.json(reward))
          .catch(err => console.log(err));
      }
    });
  }
);

module.exports = router;
