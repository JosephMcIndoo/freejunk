//This file describes what types of states are available - in so many words.
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer.js";
import junkReducer from "./reducers/junkReducer.js";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    junk: junkReducer,
  },
});

export default store;
