// Import moongose, like i made in server.js
const mongoose = require('mongoose');

// Creating a new var named ProductSchema
// Now, we need to create fields to save on database
// tittle, description, url and createdAt
const ProductSchema = new mongoose.Schema({
  title: {              // Each product need to have a title.
    type: String,       // String type.
    required: true,     // To be always required.
  },
  description: {        // Each product need a description.
    type: String,       // String type.
    required: true,     // To be always required.
  },
  url: {                // Need a link url
    type: String,       // String type.
    required: true,     // To be always required.
  },
  createdAt: {          // Save the creation date time.
    type: Date,         // Date type.
    default: Date.now,  // Automatic register the created time.
  },
});

// This register a model in our database
mongoose.model('Product', ProductSchema);