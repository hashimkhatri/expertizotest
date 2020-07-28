import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import presistReducer from "./presistReducer";

export default combineReducers({
  errors: errorReducer,
  presistStore: presistReducer,
});
