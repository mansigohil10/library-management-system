const express = require('express');
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/bookController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', protect, createBook);
router.get('/:id?', getBooks);
router.put('/:id', protect, updateBook);
router.delete('/:id', protect, deleteBook);

module.exports = router;
