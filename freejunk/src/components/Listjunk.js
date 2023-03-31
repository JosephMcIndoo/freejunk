import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard.js";
import { initJunk } from "../reducers/junkReducer.js";
import { Grid } from "@chakra-ui/react";

function Listjunk(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (junk.length === 0) {
      //This is an optimization to prevent reloads
      dispatch(initJunk());
      console.log("Getting init values from useEffect");
    }
  }, []);

  //useSelector - what do I want from the global store...
  const junk = useSelector((state) => {
    return state.junk //Remove anything not in filter
      .map((j) => {
        if (j.name.toLowerCase().includes(state.filter.toLowerCase())) {
          return j;
        }
        return null;
      })
      .filter((j) => {
        return j;
      });
  });
  //We create an <Itemcard> for each item in the array, and return it as an array
  //This is automatically mapped onto the website
  return (
    <Grid gap={5} templateColumns="repeat(6,1fr)">
      {junk.map((j) => {
        return <Itemcard item={j} />;
      })}
    </Grid>
  );
}
export default Listjunk;
