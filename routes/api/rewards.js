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

// @route   DELETE api/reward
// @desc    Delete job by id
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    Reward.findById(req.body.id) // TODO: make this a variable that is the id of the selected reward
      .then(reward => {
        reward.remove();
        reward.save();
        res.json({ message: "reward deleted: ", reward });
      })
      .catch({ error: "could not find reward id: " });
  }
);

// @route POST api/jobs/edit
// @desc Add job to the database
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    Reward.findById(req.body.id) // TODO: make this a variable that is the id of the selected reward
      .then(reward => {
        reward.remove();
        reward.save();
        res.json({ message: "reward deleted: ", reward });
      })
      .catch({ error: "could not find reward id: " });
  }
);

// @route   EDIT api/jobs/edit/:rewardName
// @desc    Edit job by jobName
// @access  Private
router.post(
  "/edit/:rewardName",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRewardInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    console.log("working");
    Reward.findOne({ rewardName: req.params.rewardName }) // may have to find a way to turn the value of the rewardName before the change into a variable so that we can still use it to find the job. or just find a way to get the selected jobs id
      .then(reward => {
        if (req.body.rewardName) reward.rewardName = req.body.rewardName;
        if (req.body.description) reward.description = req.body.description;
        if (req.body.points) reward.points = req.body.points;
        reward.save();
        res.json({ message: "reward edited: ", reward });
      })
      .catch(err => res.json({ error: err }));
  }
);

// @route   GET api/rewards/all
// @desc    Get all jobs
// @access  Public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Reward.find()
      .populate("reward", ["name"])
      .then(rewards => {
        if (!rewards) {
          errors.noprofile = "There are no rewards";
          return res.status(404).json(errors);
        }
        console.log("get rewards api called. Jobs: ", rewards);
        res.json(rewards);
      })
      .catch(err => res.status(404).json({ job: "There are no rewards" }));
  }
);

module.exports = router;
