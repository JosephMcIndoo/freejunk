import Itemcard from "../components/Itemcard.js";
import Search from "../components/Search.js";
import Listjunk from "../components/Listjunk.js";
import Sidebar from "../components/Sidebar.js";
import "./mainpage.css";
import { Flex, Box } from "@chakra-ui/react";

//Very high level function again, dive into each component to get an idea
function Mainpage(props) {
  return (
    <div>
      <Search mb="10px" />
      <Flex>
        <Box>
          <Sidebar />
        </Box>
        <Box>
          <Listjunk />
        </Box>
      </Flex>
    </div>
  );
}

export default Mainpage;
