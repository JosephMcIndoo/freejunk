const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3003;
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors());

const test = require("../output/formatted.json");

app.get("/junk", (req, res) => {
  res.json(test);
});

app.post("/junk", (req,res)=>{
  //Do stuff here :)
})

app.listen(PORT, () => {
  console.log("Server is listening....");
});
