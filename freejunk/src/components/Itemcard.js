import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Divider,
  GridItem,
} from "@chakra-ui/react";

function Itemcard({ item }) {
  return (
    <GridItem>
      <Card maxW="220px">
        <CardHeader>
          <Heading size="md">
            {item.amount} {item.title}
          </Heading>
        </CardHeader>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Garbage_bag.jpg"
          borderRadius="sm"
          maxW={{ base: "50%", sm: "200px" }}
          ml="10px"
        />
        <Stack mt="4" spacing="3">
          <Text ml="5px">{item.description}</Text>
          <Button variant="solid" colorScheme="teal">
            Claim
          </Button>
        </Stack>
      </Card>
    </GridItem>
  );
}

export default Itemcard;
