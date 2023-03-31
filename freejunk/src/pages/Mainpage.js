import Listjunk from "../components/Listjunk.js";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar.js";

//Very high level function again, dive into each component to get an idea
function Mainpage(props) {
  return (
    <div>
      <Grid
        gap={5}
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"150px 1fr"}
        h="200px"
      >
        <GridItem area={"nav"}>
          <Sidebar />
        </GridItem>
        <GridItem area={"main"}>
          <Listjunk />
        </GridItem>
      </Grid>
    </div>
  );
}

export default Mainpage;
