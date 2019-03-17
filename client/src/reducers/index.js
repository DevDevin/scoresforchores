import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import jobReducer from "./jobReducer";
import rewardReducer from "./rewardReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  jobs: jobReducer,
  rewards: rewardReducer
});
