import axios from "axios";
import { GET_ERRORS, GET_JOBS, JOBS_LOADING } from "./types";

// Register User
export const addJob = (newJob, history) => dispatch => {
  axios
    .post("/api/jobs/add", newJob)
    .then(res => history.push("/joblist"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Register User
export const addReward = (newReward, history) => dispatch => {
  axios
    .post("/api/rewards/add", newReward)
    .then(res => history.push("/joblist"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all profiles
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

// Profile loading
export const setJobsLoading = () => {
  return {
    type: JOBS_LOADING
  };
};
