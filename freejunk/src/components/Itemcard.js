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
  const image = "../../../output/images/" + item.image_name;
  return (
    <GridItem key={item.id}>
      <Card maxW="220px" key={item.id}>
        <CardHeader>
          <Heading size="md">{item.name}</Heading>
        </CardHeader>
        <Image
          src={image}
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
