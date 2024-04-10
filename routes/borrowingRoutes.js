const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

router.post('/:bookId/patron/:patronId', borrowingController.borrowBook);
router.put('/:bookId/patron/:patronId', borrowingController.returnBook);

module.exports = router;
