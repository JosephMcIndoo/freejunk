import { Box, Button, Text } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { postJunk } from "../reducers/junkReducer.js";
import { useState } from "react";

function Addparts(props) {
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  return (
    <Box>
      <Formik
        initialValues={{ location: "", description: "", name: "" }}
        onSubmit={(val, { setSubmitting }) => {
          const data = new FormData();
          data.append("file", file);
          const builtJunk = {
            name: val.name,
            location: val.location,
            description: val.description,
            image_name: file.name,
          };
          data.append("junk", builtJunk);
          console.log(data);
          dispatch(postJunk(data)).then(() => {
            setSubmitting(true);
          });
        }}
      >
        <Form>
          <Text color="brand.900">Name</Text>
          <Field name="name" />
          <Text color="brand.900">Location</Text>
          <Field name="location" />
          <Text color="brand.900">Description</Text>
          <Field bg="brand.100" name="description" />
          <Text color="brand.900">Image</Text>
          <Field
            name="file"
            type="file"
            id="file"
            onChange={(event) => {
              setFile(event.currentTarget.files[0]);
            }}
          />
          <Button type="submit" colorScheme="brand">
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
}

export default Addparts;
