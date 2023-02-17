import { Box, Input } from "@chakra-ui/react";

function Search(props) {
  return (
    <Box mb={props.mb}>
      <Input w="250px" placeholder="Search" />
    </Box>
  );
}

export default Search;
