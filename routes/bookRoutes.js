// const express = require('express');
// const router = express.Router();
// const bookController = require('../controllers/bookController');

// router.get('/', bookController.getAllBooks);


// module.exports = router;

// bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.get('/', bookController.getAllBooks);


router.get('/:id', bookController.getBookById);


router.post('/addBook', bookController.addBook);


router.put('/:id', bookController.updateBook);


router.delete('/:id', bookController.deleteBook);

module.exports = router;
