import { combineReducers } from "redux";
import loginReducers from "./login";
import modalReducers from "./modal";

export default combineReducers({
  login: loginReducers,
  modal: modalReducers
});
