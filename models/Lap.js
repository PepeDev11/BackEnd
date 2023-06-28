const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    modelo: {
        type: String,
        required: true
    },
    marca: {
        type: String,
        required: true
    },
    procesador: {
        type: String,
        required: true
    },
    memoriaRam: {
        type: String,
        required: true
    },
    discos: {
        type: String,
        required: true
    },
    tarjetaMadre: {
        type: String,
        required: true
    },
    tarjetaVideo: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);