var express = require('express');
var router = express.Router();


/**
 * Controllers
 */

const { search, product } = require('../controllers/search');


/* . */
router.get('/items', search);

/* . */
router.get('/items/:id', product);

module.exports = router;