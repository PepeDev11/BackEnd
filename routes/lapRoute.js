// Rutas para producto
const express = require('express');
const router = express.Router();
const lapController = require('../controllers/lapController');

// api/productos
router.get('/pp', lapController.prueba);
router.post('/', lapController.crearProducto);
router.get('/', lapController.obtenerProductos);
router.put('/:id', lapController.actualizarProducto);
router.get('/:id', lapController.obtenerProducto);
router.delete('/:id', lapController.eliminarProducto);

module.exports = router;