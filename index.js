const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Define the /hello route
app.get('/hello', (req, res) => {
  res.json({ message: 'hello world' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
