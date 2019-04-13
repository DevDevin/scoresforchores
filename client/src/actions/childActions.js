import axios from "axios";
import { GET_ERRORS, JOBS_LOADING, GET_DAYOFJOBS } from "./types";

// Get all jobs
export const getMyChores = () => dispatch => {
  console.log("inside of getMyChores in ChildActions");
  dispatch(setChoresLoading());
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

// Profile loading
export const setChoresLoading = () => {
  return {
    type: JOBS_LOADING
  };
};

// submit completion request
export const submitCompletionRequest = (dayOfJobID, history) => dispatch => {
  console.log("inside submit completion request ", dayOfJobID);
  axios
    .post(`api/dayofjobs/completionrequest/${dayOfJobID}`)
    .then(res => history.push("/jobs"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
