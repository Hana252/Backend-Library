const BorrowingRecord = require('../models/BorrowingRecord');

async function createBorrowingRecord(bookId, patronId) {
  return await BorrowingRecord.create({ bookId, patronId });
}

async function updateBorrowingRecord(bookId, patronId) {
  return await BorrowingRecord.findOneAndUpdate(
    { bookId, patronId, returnDate: null },
    { returnDate: new Date() },
    { new: true }
  );
}

module.exports = {
  createBorrowingRecord,
  updateBorrowingRecord
};
