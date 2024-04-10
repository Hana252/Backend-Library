const Book = require('../models/Book');

async function getAllBooks() {
  return await Book.find();
}

async function getBookById(id) {
  return await Book.findById(id);
}

async function addBook(bookData) {
  return await Book.create(bookData);
}

async function updateBook(id, bookData) {
  return await Book.findByIdAndUpdate(id, bookData, { new: true });
}

async function deleteBook(id) {
  return await Book.findByIdAndDelete(id);
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
