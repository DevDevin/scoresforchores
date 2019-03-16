const express = require("express");
const router = express.Router();
const passport = require("passport");

// Most likely won't need validation because the submission will be done from the reward catalog. I will only
// use the form if I can't get catalog submission to work.
// const validateRewardRequestInput = require("../../validation/rewardRequest");

// Load Reward Model
const RewardRequest = require("../../models/RewardRequest");

// @route GET api/rewardRequest/test
// @desc Tests rewardRequest route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Reward Request Works" }));

// @route POST api/rewardsRequests/add
// @desc Add rewardRequest to the database
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newRewardRequest = new RewardRequest({
      rewardName: req.body.rewardName,
      requestorName: req.body.requestorName, // I could pull this from the session
      rewardPoints: req.body.rewardPoints,
      requestorPoints: req.body.requestorPoints,
      status: req.body.status,
      noteFromParent: req.body.noteFromParent
    });

    newRewardRequest
      .save()
      .then(rewardRequest => res.json(rewardRequest))
      .catch(err => console.log(err));
  }
);

// @route POST api/rewardsRequests/accept
// @desc Accept rewardRequest - Parent Action
// @access Private
router.post(
  "/accept/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    RewardRequest.findById(req.params.id)
      .then(rewardRequest => {
        rewardRequest.status = "Accepted";
        rewardRequest.noteFromParent = req.body.noteFromParent;
        rewardRequest.save();
        res.json({ message: "Reward Request Accepted", rewardRequest });
      })
      .catch(err => {
        console.log("could not find the request by the id");
      });
  }
);

// @route POST api/rewardsRequests/complete
// @desc Complete rewardRequest - Child Action
// @access Private
router.post(
  "/complete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    RewardRequest.findById(req.params.id)
      .then(rewardRequest => {
        rewardRequest.remove();
        rewardRequest.save();
        res.json({ message: "RewardRequest Deleted" });
      })
      .catch(console.log("could not find reward by id"));
  }
);

module.exports = router;
