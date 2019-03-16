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

// @route   DELETE api/job
// @desc    Delete job by id
// @access  Private
router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    Job.findById(req.body.id) // TODO: make this a variable that is the id of the selected job
      .then(job => {
        job.remove();
        job.save();
        res.json({ message: "job deleted: ", job });
      })
      .catch(err => res.json({ error: err }));
  }
);

// @route   EDIT api/jobs/edit/:jobName
// @desc    Edit job by jobName
// @access  Private
router.post(
  "/edit/:jobName",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateJobInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    console.log("working");
    Job.findOne({ jobName: req.params.jobName }) // may have to find a way to turn the value of the jobName before the change into a variable so that we can still use it to find the job. or just find a way to get the selected jobs id
      .then(job => {
        if (req.body.jobName) job.jobName = req.body.jobName;
        if (req.body.description) job.description = req.body.description;
        if (req.body.points) job.points = req.body.points;
        job.save();
        res.json({ message: "job edited: ", job });
      })
      .catch(err => res.json({ error: err }));
  }
);

// @route   GET api/jobs/all
// @desc    Get all jobs
// @access  Public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Job.find()
      .populate("job", ["name"])
      .then(jobs => {
        if (!jobs) {
          errors.noprofile = "There are no jobs";
          return res.status(404).json(errors);
        }
        console.log("get jobs api called. Jobs: ", jobs);
        res.json(jobs);
      })
      .catch(err => res.status(404).json({ job: "There are no Jobs" }));
  }
);

module.exports = router;
