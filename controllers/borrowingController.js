const borrowingService = require('../services/borrowingService');

async function borrowBook(req, res) {
  const { bookId, patronId } = req.params;
  try {
    const borrowingRecord = await borrowingService.borrowBook(bookId, patronId);
    res.status(201).json(borrowingRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function returnBook(req, res) {
  const { bookId, patronId } = req.params;
  try {
    const returnedRecord = await borrowingService.returnBook(bookId, patronId);
    res.json(returnedRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  borrowBook,
  returnBook
};
