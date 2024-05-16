import { combineReducers } from "@reduxjs/toolkit";
import messages from "./messages";
import auth from "./auth";
export default combineReducers({
  messages,
  auth,
});
