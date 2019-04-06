const express = require("express");
const router = express.Router();
const passport = require("passport");

// Bring in job input validator function
const validateDayofJobInput = require("../../validation/dayofjobs");

// Load Job Model
const DayofJob = require("../../models/DayofJob");

// @route GET api/jobs/test
// @desc Tests jobs route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "DayofJobs Works" }));

// @route POST api/jobs/add
// @desc Add job to the database
// @access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDayofJobInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    DayofJob.findOne({ jobName: req.body.jobName }).then(jobName => {
      if (jobName) {
        errors.strJobName = "This job has already been assigned for this day";
        return res.status(400).json(errors);
      } else {
        const newDayofJob = new DayofJob({
          jobName: req.body.jobName,
          day: req.body.day,
          complete: req.body.complete,
          childName: req.body.childName
        });

        newDayofJob
          .save()
          .then(dayofjob => res.json(dayofjob))
          .catch(err => console.log(err));
      }
    });
  }
);

// @route   DELETE api/dayofjob
// @desc    Delete dayofjob by id
// @access  Private
router.delete(
  "/:dayofjobs_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    DayofJob.findById(req.params.dayofjobs_id) // TODO: make this a variable that is the id of the selected reward
      .then(dayofjob => {
        dayofjob.remove();
        dayofjob.save();
        res.json({ message: "dayofjob deleted: ", dayofjob });
      })
      .catch(err => {
        res.json({ message: "could not delete day of job" });
      });
  }
);

// @route   Complete api/dayofjob/completionrequest
// @desc    Submit a completion request for jobs done
// @access  Private
router.post(
  "/completionrequest",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    DayofJob.findById(req.body.id) // TODO: make this a variable that is the id of the selected reward
      .then(dayofjob => {
        dayofjob.status = "Submitted";
        dayofjob.save();
        res.json({ message: "dayofjob completed: ", dayofjob });
      })
      .catch(err => {
        res.json({ message: "could not complete day of job" });
      });
  }
);

// @route   Accept or reject a completion request
// @desc    Submit a completion request for jobs done
// @access  Private
router.post(
  "/completionrequestdecision",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log("working");
    DayofJob.findById(req.body.id) // TODO: make this a variable that is the id of the selected reward
      .then(dayofjob => {
        if (req.body.decision === "Accept") {
          dayofjob.status = "Accepted";
          dayofjob.save();
          res.json({ message: "Completion Request Accepted: ", dayofjob });
        }

        if (req.body.decision === "Reject") {
          dayofjob.status = "Rejected";
          dayofjob.save();
          res.json({ message: "Completion Request Rejected: ", dayofjob });
        }
      })
      .catch(err => {
        res.json({ message: "could not find job by id", err });
      });
  }
);

// @route   EDIT api/jobs/edit/:rewardName
// @desc    Edit job by jobName
// @access  Private
router.post(
  "/edit/:dayofjobName",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateDayofJobInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }
    console.log("working");
    DayofJob.findOne({ jobName: req.params.dayofjobName }) // may have to find a way to turn the value of the rewardName before the change into a variable so that we can still use it to find the job. or just find a way to get the selected jobs id
      .then(dayofjob => {
        if (req.body.jobName) dayofjob.jobName = req.body.jobName;
        if (req.body.day) dayofjob.day = req.body.day;
        dayofjob.save();
        res.json({ message: "dayofjob edited: ", dayofjob });
      })
      .catch(err => res.json({ error: err }));
  }
);

// @route   GET api/dayofjobs/all
// @desc    Get all dayofjobs
// @access  Public
router.get(
  "/all",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    DayofJob.find()
      .populate("dayofjob", ["name"])
      .then(dayofjob => {
        if (!dayofjob) {
          errors.noprofile = "There are no dayofjob";
          return res.status(404).json(errors);
        }
        console.log("get dayofjob api called dayofjobs.js");
        res.json(dayofjob);
      })
      .catch(err => res.status(404).json({ job: "There are no dayofjob" }));
  }
);

// @route GET api/jobs/jobs-byname
// @desc Get all jobs for the child that was selected
// @access private
router.get(
  "/jobs-byname/:child_name",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    console.log("entered api/jobs/jobs-byname/child_name");
    DayofJob.findOne({ childName: req.params.child_name })
      .populate("dayofjob", ["name"])
      .then(dayofjob => {
        if (!dayofjob) {
          errors.noprofile = "There are no dayofjobs assigned to this child";
          return res.status(404).json(errors);
        }
        console.log("get jobs-byname called: ", dayofjob);
        res.json(dayofjob);
      })
      .catch(err => res.status(404).json({ dayofjob: "No day of jobs found" }));
  }
);

// // @route   GET api/dayofjobs/all
// // @desc    Get all jobs
// // @access  Public
// router.get(
//   "/all",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const errors = {};
//     console.log("insided of get all day of jobs");
//     DayofJob.find()
//       .populate("job", ["name"])
//       .then(dayofjob => {
//         if (!dayofjob) {
//           errors.noprofile = "There are no dayofjob";
//           return res.status(404).json(errors);
//         }
//         console.log("get all dayOfdayOfJobs api called.");
//         res.json(dayofjob);
//       })
//       .catch(err => res.status(404).json({ dayofjob: "There are no Jobs" }));
//   }
// );

module.exports = router;
