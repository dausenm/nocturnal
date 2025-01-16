const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the same directory
app.use(express.static(path.join(__dirname)));

// Set up a basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
