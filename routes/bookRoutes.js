const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.post('/', bookController.createBook);
router.get('/', bookController.allBooks);
router.get('/:id', bookController.getBookById);
router.get('/delete/:id', bookController.deleteBook);
router.post('/update/:id', bookController.updateBook);

module.exports = router;