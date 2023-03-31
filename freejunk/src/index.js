import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";
import { extendTheme } from "@chakra-ui/react";

//This file is somewhat boiler plate - this is where our program / website starts

const theme = extendTheme({
  colors: {
    brand: {
      50: "#7CAE7A",
      100: "#809F77",
      200: "#839073",
      300: "#797A6B",
      400: "#6E6362",
      500: "#665D60",
      600: "#5E575E",
      700: "#4E4A59",
      800: "#444556",
      900: "#394053",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
//Provider gives access to its children (what it sourrounds) the "store"
//Store is where all the data (and its associated functions) are kept
//
//Router gives access to pages (defined in App.js)
//ChakraProvider gives access to ChakraUI themes

root.render(
  <Provider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
  </Provider>
);
