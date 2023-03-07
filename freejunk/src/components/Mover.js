//A "Mover" is like the topmost bar on a website
//It moves you between different pages
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Box,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Mover(props) {
  return (
    <Box ml={props.ml}>
      <Breadcrumb h="35px" ml="5px" mt="5px" mb="20px" fontSize="30px">
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Free junk
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/add">
            Add Part
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/categories">
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Box ml={props.ml}>{props.children}</Box>
    </Box>
  );
}

export default Mover;
