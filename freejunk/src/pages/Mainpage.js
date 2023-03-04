import Itemcard from "../components/Itemcard.js";
import { Grid } from "@chakra-ui/react";
import Search from "../components/Search.js";
import Listjunk from "../components/Listjunk.js";

function Mainpage(props) {
  return (
    <div>
      <Search mb="10px" />
      <Grid gap={5} templateColumns="repeat(6,1fr)">
        <Listjunk />
      </Grid>
    </div>
  );
}

export default Mainpage;
