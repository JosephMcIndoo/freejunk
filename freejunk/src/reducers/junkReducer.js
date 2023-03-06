import { createSlice } from "@reduxjs/toolkit";
import junkServices from "../services/junk.js";

const initialState = [];

const junkReducer = createSlice({
  name: "junk",
  initialState,
  reducers: {
    addJunk(state, action) {
      console.log(action.payload);
      return state.concat(action.payload);
    },
    setJunk(state, action) {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export function initJunk() {
  console.log("Getting Init Junk");
  return async (dispatch) => {
    dispatch(setJunk(await junkServices.getAllJunk()));
  };
}

export function postJunk(junk) {
  console.log("Posting junk");
  return async (dispatch) => {
    const j = await junkServices.postJunk(junk);
    console.log(j.name);
    dispatch(addJunk(j));
  };
}

export const { addJunk, setJunk } = junkReducer.actions;
export default junkReducer.reducer;
