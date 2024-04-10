const mongoose = require('mongoose');

const borrowingRecordSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  },
  patronId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patron',
    required: true
  },
  borrowDate: {
    type: Date,
    default: Date.now
  },
  returnDate: {
    type: Date
  }
});

module.exports = mongoose.model('BorrowingRecord', borrowingRecordSchema);
