import Itemcard from "../components/Itemcard.js";
import { useDispatch, useSelector } from "react-redux";
import { Stack, HStack, Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const COUNT = 10;

function Gamble(props) {
  const randJunk = useSelector((state) => {
    let ret = [];
    for (let i = 0; i < COUNT; i++) {
      ret[i] = state.junk[Math.floor(Math.random() * state.junk.length)];
    }
    return ret;
  });

  return (
    <AnimatePresence>
      <motion.div
        animate={{
          x: [0, 100, 200, 400, 600, 800, 1000, 1200],
        }}
        transition={{
          ease: "linear",
          duration: 1,
          repeat: Infinity,
        }}
        className="gambling"
      >
        <HStack space="5px">
          {randJunk.map((j) => {
            if (j != undefined) {
              return <Itemcard className="gambling" key={j.id} item={j} />;
            }
          })}
        </HStack>
      </motion.div>
    </AnimatePresence>
  );
}

export default Gamble;
