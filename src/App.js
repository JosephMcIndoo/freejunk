import Mover from "./components/Mover.js";
import { Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage.js";
import Addparts from "./pages/Addparts.js";
import Categories from "./pages/Categories.js";
import junk from "./junk.js";

function App() {
  return (
    <Mover ml="5px">
      <Routes>
        <Route path="/" element={<Mainpage junk={junk} />} />
        <Route path="/add" element={<Addparts />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Mover>
  );
}

export default App;
