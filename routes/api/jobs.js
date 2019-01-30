const express = require("express");
const router = express.Router();
const passport = require("passport");

// Bring in job input validator function
const validateJobInput = require("../../validation/job");

// Load Job Model
const Job = require("../../models/Job");

// @route GET api/jobs/test
// @desc Tests jobs route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Jobs Works" }));

// @route POST api/jobs/add
// @desc Add job to the database
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJobInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Job.findOne({ jobName: req.body.jobName }).then(jobName => {
      if (jobName) {
        errors.jobName = "This job already exists";
        return res.status(400).json(errors);
      } else {
        const newJob = new Job({
          jobName: req.body.jobName,
          points: req.body.points,
          description: req.body.description
        });

        newJob
          .save()
          .then(job => res.json(job))
          .catch(err => console.log(err));
      }
    });
  }
);

module.exports = router;
