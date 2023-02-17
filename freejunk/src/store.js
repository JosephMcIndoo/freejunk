import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer.js";

const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export default store;
