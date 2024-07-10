const express = require('express');
const domain_path = require('path');
const app = express();

// Serve static assets from the 'build' directory
app.use(express.static(domain_path.join(__dirname, 'build')));

// Define a catch-all route to serve the React app
app.get('*', (req, res) => {
  res.sendFile(domain_path.join(__dirname, 'build', 'index.html'));
});

// Start the server on a specific port (e.g., 3000)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
