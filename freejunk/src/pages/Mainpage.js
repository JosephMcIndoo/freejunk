import Search from "../components/Search.js";
import Listjunk from "../components/Listjunk.js";

//Very high level function again, dive into each component to get an idea
function Mainpage(props) {
  return (
    <div>
      <Search mb="10px" />
      <Listjunk />
    </div>
  );
}

export default Mainpage;
