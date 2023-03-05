import Itemcard from "../components/Itemcard.js";
import Search from "../components/Search.js";
import Listjunk from "../components/Listjunk.js";

function Mainpage(props) {
  return (
    <div>
      <Search mb="10px" />
      <Listjunk />
    </div>
  );
}

export default Mainpage;
