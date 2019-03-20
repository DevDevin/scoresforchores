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
