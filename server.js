// Import module express.
const express = require("express");

// Import Mongoose.
const mongoose = require('mongoose');

// Import Require-dir module.
const requireDir = require("require-dir");

// Define a variable with the express function.
// Initialize the Express module;
const app = express();

// Initializing Database
// And specify that this requires the file Product.js
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  { useNewUrlParser: true},
  );
requireDir('./src/models');

// Access to model Product
const Product = mongoose.model('Product');

// Create a route for the application, root Route is = "/".
// Parameter "req" = Requisition to server.
// Parameter "res" = Response to client.
// This is the first route.
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });

  return res.send('Hello Rocketseat');
});

// Make the server listen on the port 3001 (localhost:3001).
app.listen(3001);