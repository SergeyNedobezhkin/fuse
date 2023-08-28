import { combineReducers } from "@reduxjs/toolkit";
import jokeSlice from "../slice/jokeSlice.js";

const rootReducer = combineReducers({
  joke: jokeSlice,
});

export default rootReducer;
