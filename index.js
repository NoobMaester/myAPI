
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests


// GET endpoint for basic information
app.get('/api/info', (req, res) => {
  res.status(200).json({
      email: "tsafarialadin@gmail.com",
      current_datetime: new Date().toISOString(),
      github_url: "https://github.com/NoobMaester/myAPI/"
    }
  );
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