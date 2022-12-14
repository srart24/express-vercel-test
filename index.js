// Add Express
const express = require("express");

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/tes", (req, res) => {
  res.send("Tes Doang Banh");
});



// Initialize server
app.listen(8080, () => {
  console.log("Running on port 8080");
});

module.exports = app;
