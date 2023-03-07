//Express is what handles the requests to the backend
const express = require("express");
const app = express();
//CORs makes it so we can have cross origin resources - whatever that means
//If we take it out it stops working so here it is
const cors = require("cors");
//The port for the server, different then the frontend.
const PORT = 3003;
//The "how and what" to getting and posting junk.
//Ideally there is one of these for each API serverice (like registering users)
const junkRouter = require("./controllers/junk.js");

//Load all of the stuff we imported...
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
//Load routers BELOW "middleware"
app.use("/junk", junkRouter);

//Start the server
app.listen(PORT, () => {
  console.log("Server is listening....");
});
