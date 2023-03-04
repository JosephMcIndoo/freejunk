import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Itemcard from "./Itemcard.js";
import { initJunk } from "../reducers/junkReducer.js";
import { addJunk, setJunk } from "../reducers/junkReducer.js";

function Listjunk(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initJunk());
  }, [dispatch]);

  const junk = useSelector((state) => {
    return state.junk
      .map((j) => {
        if (j.name.toLowerCase().includes(state.filter)) {
          return j;
        }
      })
      .filter((j) => {
        if (j != null) {
          return j;
        }
      });
  });
  console.log(junk);
  return (
    <div>
      {junk.map((j) => {
        return <Itemcard item={j} key={j.id} />;
      })}
    </div>
  );
}
export default Listjunk;
