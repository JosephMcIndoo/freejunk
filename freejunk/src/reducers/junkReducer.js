import { createSlice } from "@reduxjs/toolkit";
import { getAllJunk } from "../services/junk.js";

const initialState = [];

const junkReducer = createSlice({
  name: "junk",
  initialState,
  reducers: {
    addJunk(state, action) {
      console.log("adding!");
      return state.concat(action.payload);
    },
    setJunk(state, action) {
      return action.payload;
    },
  },
});

export function initJunk() {
  console.log("Getting Init Junk");
  return async (dispatch) => {
    dispatch(setJunk(await getAllJunk()));
  };
}

export const { addJunk, setJunk } = junkReducer.actions;
export default junkReducer.reducer;
