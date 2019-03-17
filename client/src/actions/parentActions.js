import axios from "axios";
import { GET_ERRORS, GET_JOBS, JOBS_LOADING, GET_REWARDS } from "./types";

// Add Job
export const addJob = (newJob, history) => dispatch => {
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

// Profile loading
export const setJobsLoading = () => {
  return {
    type: JOBS_LOADING
  };
};
