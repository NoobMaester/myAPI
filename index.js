// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Basic information data
const basicInfo = {
  email: "tsafarialadin@gmail.com",
  github_url: "https://github.com/NoobMaester",
  current_datetime: new Date().toISOString()
};

// GET endpoint for basic information
app.get('/api/info', (req, res) => {
  res.status(200).json({
    success: true,
    data: basicInfo
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found"
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

// Server configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});