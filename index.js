const express = require("express");
const fs = require("fs");
const multer = require("multer");

const app = express();
const PORT = 3000;

const upload = multer();
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.post("/hook", upload.none(), (req, res) => {
  const jsonData = req.body;
  
  fs.writeFile("./public/emby.json", JSON.stringify(jsonData), { encoding: "utf8" }, (err) => {
      if (err) {
      console.log("Error writing to emby.json:", err);
      res.status(500).end();
      return;
    }

    console.log("Data written to emby.json:", jsonData);
    res.status(200).end();
  });
});
