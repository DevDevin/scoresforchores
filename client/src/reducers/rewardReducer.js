import {
  GET_JOBS,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_REWARDS
} from "../actions/types";

const initialState = {
  profile: null,
  rewards: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_REWARDS:
      console.log("entered GET_REWARDS function in rewardReducer.js");
      return {
        ...state,
        rewards: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        profile: null
      };
    default:
      return state;
  }
}
