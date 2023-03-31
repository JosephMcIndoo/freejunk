//Core/express
const junkRouter = require("express").Router();

//Azure blob info - where our images are
const { BlobServiceClient, ContainerClient } = require("@azure/storage-blob");
const storageAccountName = process.env.REACT_APP_AZURE_STORAGE_RESOURCE_NAME;
const sasToken = process.env.REACT_APP_AZURE_STORAGE_SAS_TOKEN;
const imageURL = `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`;

//Prisma - a better way to ineract with the database (azure mySQL)
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//Multer - may be removed
const multer = require("multer");
const upload = multer({ dest: "uploads/" }); //This may be incorrect

//This is a get request at where junk router is placed, followed by /
//In this application, that means z.umn.edu/freejunk:3003/freejunk/
junkRouter.get("/", (req, res) => {
  prisma.junk
    .findMany({
      where: {
        reserved: false,
      },
    })
    .then((all) => {
      res.json(all);
    });
});

//A post request - asks to upload something at this url.
junkRouter.post("/", upload.single("image"), (req, res) => {
  //This does not fully work yet - it tries to upload images
  //It will however upload information to the database
  const body = req.body;
  const file = body.image;
  console.log(req.body);
  console.log(file);
  const blobClient = ContainerClient.getBlockBlogClient(file.name);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  blobClient.uploadData(file, options).then(() => {
    //This is the (attempted) upload to images
    prisma.junk //This is the upload to the database
      .create({
        data: {
          image_name: body.image_name,
          location: body.location,
          description: body.description,
          name: body.name,
          reserved: false,
        },
      })
      .then((ret) => {
        console.log(ret);
        res.json(ret); //We return what we uploaded, as expected
      });
  });
});

junkRouter.delete("/:id", (req, res) => {
  prisma.junk
    .update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        reserved: true,
      },
    })
    .then((ret) => {
      console.log("Removed" + req.id);
      res.json(ret);
    });
});

module.exports = junkRouter; //This allows us to import it later on
