import Itemcard from "./Itemcard.js";
import { useSelector } from "react-redux";
import { Grid, GridItem } from "@chakra-ui/react";

function Listjunk(props) {
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
        return (
          <GridItem key={j.id}>
            <Itemcard key={j.id} item={j} />
          </GridItem>
        );
      })}
    </Grid>
  );
}
export default Listjunk;
