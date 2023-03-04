const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());

const test = require("../output/formatted.json");

app.get("/junk", (req, res) => {
  res.json(test);
});

app.listen(PORT, () => {
  console.log("Server is listening....");
});
