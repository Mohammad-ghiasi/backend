const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;


const corsOptions = {
  origin: '*', // Allow all origins
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these methods
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
// Use CORS middleware

// Define the /hello route
app.get('/hello', (req, res) => {
  res.json({ message: 'hello world' });
});
app.get('/name', (req, res) => {
  res.json({ message: 'my name is mohammad' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
