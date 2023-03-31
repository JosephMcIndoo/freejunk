import {
  Card,
  CardHeader,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { reserveJunk } from "../reducers/junkReducer.js";

function Itemcard({ className, item }) {
  const image =
    "https://fjimages.blob.core.windows.net/images/" + item.image_name;
  const fallBack = "https://fjimages.blob.core.windows.net/images/noImage.jpg";
  //Fall back is a generic image always on blob storage - can be changed.
  const dispatch = useDispatch();
  const buttonHandler = (e) => {
    dispatch(reserveJunk(item.id));
  };

  return (
    <div className={className}>
      <Card maxW="220px" key={item.id}>
        <CardHeader key={item.id}>
          <Heading size="md">
            {item.name === "" ? "Unknown" : item.name}
          </Heading>
        </CardHeader>
        <Center>
          <Image
            src={image}
            fallbackSrc={fallBack}
            borderRadius="sm"
            ml="5px"
            boxSize="150px"
            loading="lazy"
            fit="cover"
          />
        </Center>
        <Stack mt="4" spacing="3">
          <Text ml="5px">
            {item.description === "Unknown" ? "" : item.description}
          </Text>
          <Button variant="solid" colorScheme="brand" onClick={buttonHandler}>
            Claim
          </Button>
        </Stack>
      </Card>
    </div>
  );
}

export default Itemcard;
