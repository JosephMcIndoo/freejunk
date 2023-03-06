import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard.js";
import { initJunk } from "../reducers/junkReducer.js";
import { addJunk, setJunk } from "../reducers/junkReducer.js";
import { Grid } from "@chakra-ui/react";

function Listjunk(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (junk.length == 0) {
      //This is an optimization to prevent reloads
      dispatch(initJunk());
      console.log("Getting init values from useEffect");
    }
  }, [dispatch]);

  const junk = useSelector((state) => {
    return state.junk
      .map((j) => {
        if (j.name.toLowerCase().includes(state.filter)) {
          return j;
        }
      })
      .filter((j) => {
        if (j != null) {
          return j;
        }
      });
  });
  return (
    <Grid gap={5} templateColumns="repeat(6,1fr)">
      {junk.map((j) => {
        return <Itemcard item={j} />;
      })}
    </Grid>
  );
}
export default Listjunk;
