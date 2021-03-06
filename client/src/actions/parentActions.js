import axios from "axios";
import {
  GET_ERRORS,
  GET_JOBS,
  JOBS_LOADING,
  GET_REWARDS,
  GET_REWARD,
  GET_JOB,
  GET_JOBS_BY_NAME,
  GET_DAYOFJOBS
} from "./types";

// Add Job
export const addJob = (newJob, history) => dispatch => {
  console.log("add job called in parent actions");
  axios
    .post("/api/jobs/add", newJob)
    .then(res => history.push("/jobs"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add dayofjob
export const addDayOfJob = (newJob, history) => dispatch => {
  console.log("add day job called in parent actions: ", newJob);
  axios
    .post("/api/dayofjobs/add", newJob)
    .then(res => history.push("/parent-schedule"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add Reward
export const addReward = (newReward, history) => dispatch => {
  axios
    .post("/api/rewards/add", newReward)
    .then(res => history.push("/rewards"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Edit Reward
export const editReward = (newReward, history) => dispatch => {
  axios
    .post(`api/rewards/edit/${newReward.rewardID}`, newReward)
    .then(res => history.push("/rewards"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Edit Job
export const editJob = (newJob, history) => dispatch => {
  console.log("inside edit job: ", newJob.jobID);
  axios
    .post(`api/jobs/edit/${newJob.jobID}`, newJob)
    .then(res => history.push("/jobs"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all jobs
export const getJobs = () => dispatch => {
  dispatch(setJobsLoading());
  axios
    .get("/api/jobs/all")
    .then(res =>
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOBS,
        payload: null
      })
    );
};

// Get Jobs By Name
export const getJobsByName = childName => dispatch => {
  console.log("entered getJobsByName parentActions.js");
  console.log("childName: ", childName);
  dispatch(setJobsLoading());
  axios
    .get(`/api/dayofjobs/jobs-byname/${childName}`)
    .then(res =>
      dispatch({
        type: GET_JOBS_BY_NAME,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOBS_BY_NAME,
        payload: null
      })
    );
};

// Get all rewards
export const getRewards = () => dispatch => {
  dispatch(setJobsLoading());
  axios
    .get("/api/rewards/all")
    .then(res =>
      dispatch({
        type: GET_REWARDS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REWARDS,
        payload: null
      })
    );
};

// Delete Job
export const deleteJob = id => dispatch => {
  axios
    .delete(`api/dayofjobs/${id}`)
    .then(res =>
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Job
export const deleteDayOfJob = id => dispatch => {
  axios
    .delete(`api/dayofjobs/${id}`)
    .then(res =>
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Reward
export const deleteReward = id => dispatch => {
  axios
    .delete(`api/rewards/${id}`)
    .then(res =>
      dispatch({
        type: GET_REWARDS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading
export const setJobsLoading = () => {
  return {
    type: JOBS_LOADING
  };
};

// Get selected reward
export const getSelectedReward = id => dispatch => {
  console.log("inside getselectedreward ", id);
  dispatch(setJobsLoading());
  axios
    .get(`api/rewards/findReward/${id}`)
    .then(res =>
      dispatch({
        type: GET_REWARD,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_REWARD,
        payload: {}
      })
    );
};

// Get selected job
export const getSelectedJob = id => dispatch => {
  console.log("inside getSelectedJob ", id);
  dispatch(setJobsLoading());
  axios
    .get(`api/jobs/findJob/${id}`)
    .then(res =>
      dispatch({
        type: GET_JOB,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOB,
        payload: {}
      })
    );
};

// Get all dayofjobs
export const getDayOfJobs = () => dispatch => {
  console.log("get all day of jobs called in parentActions.js");
  dispatch(setJobsLoading());
  axios
    .get("/api/dayofjobs/all")
    .then(res =>
      dispatch({
        type: GET_DAYOFJOBS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DAYOFJOBS,
        payload: null
      })
    );
};
