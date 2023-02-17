import { createSlice } from "@reduxjs/toolkit";

const initialState = ""; //No filter!

const filterReducer = createSlice({
  name: "filter",
  initialState, //Note, do not misspell this!!
  reducers: {
    //If I remember, these are the acions/functions
    setFilter(state, action) {
      return action.payload;
    },
    removeFilter(state, action) {
      return "";
    },
  },
});

export const { setFilter, removeFilter } = filterReducer.actions;
export default filterReducer.reducer;
