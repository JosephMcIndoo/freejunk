import { Box, Flex, Text, Checkbox, VStack, Button } from "@chakra-ui/react";
import Search from "./Search.js";

// Temporary category list
const Categories = [
  {
    name: "School",
    id: 1,
  },
  {
    name: "Electronics",
    id: 3,
  },
  {
    name: "Toys",
    id: 2,
  },
];

const Sidebar = () => {
  return (
    <Box
      bg="white"
      borderRight="2px"
      borderRightColor="gray.300"
      pos="fixed"
      w="200px"
      h="full"
    >
      <Flex h="30px" alignItems="center" mx="8">
        <Text fontSize="3xl">Filter</Text>
      </Flex>
      <VStack align="left">
        {Categories.map((c) => {
          return (
            <Checkbox key={c.id} colorScheme="teal" size="sm">
              {c.name}
            </Checkbox>
          );
        })}
      </VStack>
      <Button colorScheme="teal">Update Filters</Button>
      <Search mb="10px" />
    </Box>
  );
};

export default Sidebar;
