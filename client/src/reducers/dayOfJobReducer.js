import {
  GET_DAYOFJOBS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_JOBS_BY_NAME
} from "../actions/types";

const initialState = {
  profile: null,
  chores: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_DAYOFJOBS:
      console.log("entered GET_DAYOFJOBS function in jobReducer.js");
      return {
        ...state,
        chores: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    case GET_JOBS_BY_NAME:
      console.log("entered GET_JOBS_BY_NAME in dayofjobReducer.js");
      return {
        ...state,
        jobsByName: action.payload,
        loading: true
      };

    default:
      return state;
  }
}
