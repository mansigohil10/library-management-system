const express = require('express');
const { borrowBook, returnBook } = require('../controllers/borrowController');
const protect = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/:bookId/borrow', protect, borrowBook);
router.post('/:bookId/return', protect, returnBook);

module.exports = router;
