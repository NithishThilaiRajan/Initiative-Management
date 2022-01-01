import userUpdate from "./userInfo";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  userInfo: userUpdate,
});

export default rootReducers;