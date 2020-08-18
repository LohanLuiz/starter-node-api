// Import module express.
const express = require('express');

// Define a variable with the express function.
const app = express();

// Create a route for the application, root Route is = "/".
// Parameter "req" = Requisition to server.
// Parameter "res" = Response to client.
app.get('/', (req, res) => {
  res.send('Hello Rocketseat');
});

// Make the server listen on the port 3001 (localhost:3001).
app.listen(3001);