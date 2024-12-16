const Book = require('../models/Book');

// Add a new book
const createBook = async (req, res) => {
    const { title, author, genre, availability } = req.body;

    if (!title || !author || !genre) {
        return res.status(400).json({ msg: 'Please provide title, author, and genre' });
    }
    try {
        const newBook = new Book({
            title,
            author,
            genre,
            availability,
            borrowedBy: null,
        });

        const savedBook = await newBook.save();
        res.status(201).json({
            msg: 'Book created successfully',
            book: savedBook,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};


// Get all books or a specific book by ID
const getBooks = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ msg: 'Book not found' });
        return res.json(book);
    }

    const books = await Book.find();
    res.json(books);
};

// Update a book
const updateBook = async (req, res) => {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ msg: 'Book not found' });
    res.json(updatedBook);
};

// Delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) return res.status(404).json({ msg: 'Book not found' });
    res.json({ msg: 'Book deleted' });
};

module.exports = { createBook, getBooks, updateBook, deleteBook };
