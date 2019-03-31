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
// @desc    Delete reward by id
// @access  Private
router.delete(
  "/:reward_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    Reward.findById(req.params.reward_id) // TODO: make this a variable that is the id of the selected reward
      .then(reward => {
        reward.remove();
        reward.save();
        res.json({ message: "reward deleted: ", reward });
        history.push("/rewards");
      })
      .then(res => history.push("/rewards"))
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
// @desc    Edit reward by id
// @access  Private
router.post(
  "/edit/:reward_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateRewardInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    console.log("inside of edit reward 2");
    Reward.findById(req.params.reward_id)
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
        console.log("get rewards api called. Jobs: ");
        res.json(rewards);
      })
      .catch(err => res.status(404).json({ job: "There are no rewards" }));
  }
);

// @route GET api/rewards/findReward
// @desc Get reward that was selected for editing
// @access private
router.get(
  "/findReward/:reward_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    console.log("entered api/rewards/findReward");
    Reward.findById(req.params.reward_id)
      // .populate("reward", ["name", "avatar"])
      .then(reward => {
        if (!reward) {
          reward.noReward = "There is no reward that matches";
          return res.status(404).json(errors);
        }
        console.log("reward found: ", reward);
        res.json(reward);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
