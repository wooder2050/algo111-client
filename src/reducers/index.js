import { combineReducers } from "redux";
import loginReducers from "./login";
import modalReducers from "./modal";
import problemReducers from "./problem";

export default combineReducers({
  login: loginReducers,
  modal: modalReducers,
  problem: problemReducers
});
