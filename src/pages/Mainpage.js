import Itemcard from "../components/Itemcard.js";
import { Grid } from "@chakra-ui/react";
import Search from "../components/Search.js";

function Mainpage(props) {
  return (
    <div>
      <Search mb="10px" />
      <Grid gap={5} templateColumns="repeat(6,1fr)">
        {props.junk.map((b) => (
          <Itemcard item={b} />
        ))}
      </Grid>
    </div>
  );
}

export default Mainpage;
