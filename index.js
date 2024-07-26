const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define the /hello route
app.get('/hello', (req, res) => {
  res.json({ message: 'hello world' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
