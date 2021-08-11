let express = require('express');
let router = express.Router();
let controller = require('../controllers/mainController');

router.get('/', controller.index)

router.get('/about', controller.about)

module.exports = router;