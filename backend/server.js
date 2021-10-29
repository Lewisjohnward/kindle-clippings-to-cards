const express = require("express");
const cors = require("cors");
const fs = require("fs");
const processClippings = require('./utils/processclippings')

const fileUpload = require("express-fileupload");

const app = express();
app.use(cors())
// cors({credentials: true, origin: true})

const PORT = process.env.PORT || 5000;

app.use(fileUpload());
app.use(express.json());

app.get("/test", function (req, res) {
  console.log("req recieved")
  res.sendFile(`./test.csv`, {
    root: __dirname,
  });
});

app.post("/upload", function (req, res) {
  let sampleFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = __dirname + "/test/" + sampleFile.name;

//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) {
//         console.log(err)
//       return res.status(500).json(err);
//     }
//   });

  const string = processClippings(sampleFile)
  fs.writeFileSync("test.csv", string)
  res.sendFile(`./test.csv`, {
    root: __dirname,
  });

});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
