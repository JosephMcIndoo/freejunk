import {
    Box,
    Flex,
    Text,
    Checkbox,
    VStack,
    Button
} from "@chakra-ui/react";
import Search from "./Search.js";


// Temporary category list
const Categories = [
    {
        name: 'School'
    },
    {
        name: 'Electronics'
    },
    {
        name: 'Toys'
    }
];

const Sidebar = () => {
    return (
        <Box
        bg="white"
        borderRight="2px"
        borderRightColor="gray.300"
        pos="fixed"
        w="200px"
        h="full">
            <Flex h="30px" alignItems="center" mx="8">
                <Text fontSize="3xl">
                    Filter
                </Text>
            </Flex>
            <VStack align="left">
                {Categories.map((c) => {
                    return (
                    <Checkbox colorScheme='teal' size='sm'>
                        {c.name}
                    </Checkbox>
                    )
                })}
            </VStack>
            <Button colorScheme='teal'>
                Update Filters
            </Button>
            <Search mb="10px" />
        </Box>
    )
}

export default Sidebar;
