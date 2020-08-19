// Import module express.
const express = require("express");

// Import Mongoose;
const mongoose = require('mongoose');

// Define a variable with the express function.
// Initialize the Express module;
const app = express();

// Initializing Database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true})

// Create a route for the application, root Route is = "/".
// Parameter "req" = Requisition to server.
// Parameter "res" = Response to client.
// This is the first route.
app.get('/', (req, res) => {
  res.send('Hello Rocketseat');
});

// Make the server listen on the port 3001 (localhost:3001).
app.listen(3001);