const Book = require('../models/Book');
const User = require('../models/User');

// Borrow a book
const borrowBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);

  if (!book || !book.availability) {
    return res.status(400).json({ msg: 'Book is not available for borrowing' });
  }

  book.availability = false;
  book.borrowedBy = req.user._id;
  await book.save();

  res.json({ msg: 'Book borrowed successfully' });
};

// Return a book
const returnBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await Book.findById(bookId);

  if (book.borrowedBy === null || book.borrowedBy.toString() !== req.user._id.toString()) {
    return res.status(400).json({ msg: 'This book was not borrowed by you' });
  }

  book.availability = true;
  book.borrowedBy = null;
  await book.save();

  res.json({ msg: 'Book returned successfully' });
};

module.exports = { borrowBook, returnBook };
