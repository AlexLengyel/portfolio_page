import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import scrollViewReducer from "./scrollViewReducer";

const reducers = combineReducers({
  themeReducer,
  scrollViewReducer,
});

export default reducers;
