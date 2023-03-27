import {
  Card,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  GridItem,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { reserveJunk } from "../reducers/junkReducer.js";

function Itemcard({ item }) {
  const image =
    "https://fjimages.blob.core.windows.net/images/" + item.image_name;
  const fallBack = "https://fjimages.blob.core.windows.net/images/noImage.jpg";
  //Fall back is a generic image always on blob storage - can be changed.
  const dispatch = useDispatch();
  const buttonHandler = (e) => {
    dispatch(reserveJunk(item.id));
  };

  return (
    <GridItem key={item.id}>
      <Card maxW="220px" key={item.id}>
        <CardHeader key={item.id}>
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
          <Text ml="5px">
            {item.description === "Unknown" ? "" : item.description}
          </Text>
          <Button variant="solid" colorScheme="brand" onClick={buttonHandler}>
            Claim
          </Button>
        </Stack>
      </Card>
    </GridItem>
  );
}

export default Itemcard;
