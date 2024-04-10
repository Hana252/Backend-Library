const borrowingRepository = require('../repositories/borrowingRepository');

async function borrowBook(bookId, patronId) {
  return await borrowingRepository.createBorrowingRecord(bookId, patronId);
}

async function returnBook(bookId, patronId) {
  return await borrowingRepository.updateBorrowingRecord(bookId, patronId);
}

module.exports = {
  borrowBook,
  returnBook
};
