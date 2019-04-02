import {
  GET_JOBS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_JOB
} from "../actions/types";

const initialState = {
  profile: null,
  jobs: null,
  loading: false,
  job: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_JOBS:
      console.log("entered GET_JOBS function in jobReducer.js");
      return {
        ...state,
        jobs: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case GET_JOB:
      console.log("entered GET_JOB function in jobReducer.js");
      console.log("action.payload: ", action.payload);
      return {
        ...state,
        job: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
