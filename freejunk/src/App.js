import Mover from "./components/Mover.js";
import { useEffect } from "react";
import { initJunk } from "./reducers/junkReducer.js";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage.js";
import Addparts from "./pages/Addparts.js";
import Categories from "./pages/Categories.js";
import Gamble from "./pages/Gamble.js";

//This is the high level description of what our website does. Hence why
//it is only routes. Routes are different pages at an address.
//I.e., z.umn.edu/freejunk:3000/ -> the main
//z.umn.edu/freejunk:3000/ -> addpart
//etc
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initJunk());
    console.log("Getting init values from useEffect");
  }, []);

  return (
    <Mover ml="5px">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/add" element={<Addparts />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/gamble" element={<Gamble />} />
      </Routes>
    </Mover>
  );
}

export default App;
