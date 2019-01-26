const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const jobs = require("./routes/api/jobs");
const rewards = require("./routes/api/rewards");

const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello devin"));

//Use Routes
app.use("/api/users", users);
app.use("/api/jobs", jobs);
app.use("/api/rewards", rewards);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
