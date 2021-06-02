import { combineReducers } from "redux";
import userInfo from "./userInfo_reducer";
import email from "./emailReducer";
import userName from "./userNameReducer";

const rootReducer = combineReducers({
  userName,
  email,
  userInfo,
});

export default rootReducer;