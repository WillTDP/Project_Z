const express = require("express");
const fs = require("fs");
const multer = require("multer");

const app = express();
const PORT = 3000;

const upload = multer();
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.post("/hook", upload.none(), (req, res) => {
  console.log("Raw body:", req.body);

  const jsonData = req.body;

  try {
    const jsonString = JSON.stringify(jsonData, null, 2); // Convert to JSON string
    fs.writeFileSync("./public/emby.json", formattedJsonString, "utf8");
    console.log("Data written to emby.json:\n", formattedJsonString);
    res.status(200).end();
  } catch (err) {
    console.log("Error writing to emby.json:", err);
    res.status(500).end();
  }
});
