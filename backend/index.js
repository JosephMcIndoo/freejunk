const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3003;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); //This may be incorrect
const { BlobServiceClient, ContainerClient } = require("@azure/storage-blob");

const sasToken = process.env.REACT_APP_AZURE_STORAGE_SAS_TOKEN;
const storageAccountName = process.env.REACT_APP_AZURE_STORAGE_RESOURCE_NAME;
const imageURL = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`;
console.log(imageURL);

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
//The above lets the json requests from the frontend actually work
//It's a parser middleware :)

const test = require("../output/formatted.json");

app.get("/junk", (req, res) => {
  prisma.junk.findMany().then((all) => {
    res.json(all);
  });
});

app.post("/junk", upload.single("image"), (req, res) => {
  const body = req.body;
  const file = body.image;
  console.log(req.body);
  console.log(file);
  const blobClient = ContainerClient.getBlockBlogClient(file.name);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  blobClient.uploadData(file, options).then(() => {
    prisma.junk
      .create({
        data: {
          image_name: body.image_name,
          location: body.location,
          description: body.description,
          name: body.name,
        },
      })
      .then((ret) => {
        console.log(ret);
        res.json(ret);
      });
  });
});

app.listen(PORT, () => {
  console.log("Server is listening....");
});
