import { createSlice } from "@reduxjs/toolkit";
import junkServices from "../services/junk.js";

const initialState = [];
//This is the file where we setup what and how we will display our information
//We create an initial state, and a name to describe what this holds.
//We then provide functions, reducers, that must be pure functions.
//Meaning, they return the new state, and do not alter the current state.
//(This borrows from immutability in functional programming. There's also more...)
const junkReducer = createSlice({
  name: "junk",
  initialState,
  reducers: {
    addJunk(state, action) {
      console.log(action.payload);
      return state.concat(action.payload); //Return new array
    },
    setJunk(state, action) {
      console.log(action.payload);
      return action.payload; //Return what was given
    },
  },
});

//This is an associated function that combines reducers and services to init
//This should be called from the dispatch() function
export function initJunk() {
  console.log("Getting Init Junk");
  return async (dispatch) => {
    dispatch(setJunk(await junkServices.getAllJunk()));
  };
}

//Same idea as above, but also talk to backend to upload
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
