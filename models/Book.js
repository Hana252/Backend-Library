const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publicationYear: {
    type: Number
  },
  ISBN: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('Book', bookSchema);
