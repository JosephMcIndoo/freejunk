import { Box, Input } from "@chakra-ui/react";
import { setFilter } from "../reducers/filterReducer.js";
import { useDispatch } from "react-redux";

function Search(props) {
  const dispatch = useDispatch();
  function handleChange(event) {
    const search = event.target.value;
    dispatch(setFilter(search.toLowerCase(search)));
  }

  return (
    <Box mb={props.mb}>
      <Input w="250px" placeholder="Search" onChange={handleChange} />
    </Box>
  );
}

export default Search;
