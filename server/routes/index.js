var express = require('express');
var router = express.Router();


/**
 * Controllers
 */

const { search, product } = require('../controllers/search');


/**
 * @swagger
 * /api/items:
 *  get:
 *      parameters:
 *          - in : query
 *            name: search
 *            schema: string 
 *      description: Busqueda de los productos
 *      response:
 *          '200':
 *              description: Un Array con los productos
 */
router.get('/items', search);

/**
 * @swagger
 * /api/items/{id}:
 *  get:
 *      parameters:
 *          - in : path
 *            name: id
 *            schema: string 
 *      description: Obtiene la informacion del Poducto
 *      response:
 *          '200':
 *              description: Un Array con los productos
 */
router.get('/items/:id', product);

module.exports = router;