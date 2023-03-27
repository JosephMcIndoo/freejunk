import Mover from "./components/Mover.js";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage.js";
import Addparts from "./pages/Addparts.js";
import Categories from "./pages/Categories.js";

//This is the high level description of what our website does. Hence why
//it is only routes. Routes are different pages at an address.
//I.e., z.umn.edu/freejunk:3000/ -> the main
//z.umn.edu/freejunk:3000/ -> addpart
//etc
function App() {
  return (
    <Mover ml="5px">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/add" element={<Addparts />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Mover>
  );
}

export default App;
