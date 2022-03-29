import { combineReducers } from "redux";
import TaskReducer from "./tasks/TaskReducer";

const rootReducer = combineReducers({
  TaskReducer,
});

export default rootReducer;
