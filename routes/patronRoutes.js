const express = require('express');
const router = express.Router();
const patronController = require('../controllers/patronController');

router.get('/', patronController.getAllPatrons);
router.get('/:id', patronController.getPatronById);
router.post('/addPatron', patronController.addPatron);
router.put('/:id', patronController.updatePatron);
router.delete('/:id', patronController.deletePatron);

module.exports = router;
