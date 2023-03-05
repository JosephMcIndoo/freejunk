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
  const image =
    "https://fjimages.blob.core.windows.net/images/" + item.image_name;
  const fallBack = "https://fjimages.blob.core.windows.net/images/noImage.jpg";
  return (
    <GridItem key={item.id} colorScheme="brand">
      <Card maxW="220px" key={item.id} colorScheme="brand">
        <CardHeader>
          <Heading size="md">{item.name}</Heading>
        </CardHeader>
        <Image
          src={image}
          fallbackSrc={fallBack}
          borderRadius="sm"
          maxW={{ base: "50%", sm: "200px" }}
          ml="10px"
        />
        <Stack mt="4" spacing="3">
          <Text ml="5px">{item.description}</Text>
          <Button variant="solid" colorScheme="brand">
            Claim
          </Button>
        </Stack>
      </Card>
    </GridItem>
  );
}

export default Itemcard;
