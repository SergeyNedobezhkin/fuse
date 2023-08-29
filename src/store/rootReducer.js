import { combineReducers } from "@reduxjs/toolkit";
import jokeReducer from "../slice/jokeSlice";

const rootReducer = combineReducers({
  jokes: jokeReducer,
});

export default rootReducer;
