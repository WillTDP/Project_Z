const express = require("express");
const multer = require("multer");

const app = express();
const PORT = 3000;

// Set up multer middleware to handle multipart/form-data
const upload = multer();

// Start express on the defined port
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Endpoint for the webhook
app.post("/hook", upload.any(), (req, res) => {
  console.log(req.body); // Log the entire request body
  res.status(200).end(); // Responding is important
});