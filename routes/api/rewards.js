const express = require("express");
const router = express.Router();

// @route GET api/rewards/test
// @desc Tests rewards route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Rewards Works" }));

module.exports = router;
