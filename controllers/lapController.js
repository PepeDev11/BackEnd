const Producto = require("../models/Lap");


exports.prueba = async(req, res) => {
    res.status(200).send({
        message: 'Probando APIREST de Laptops'
    });
}

exports.crearProducto = async(req, res) => {

    try {
        let laptop;

        // Creamos nuestro producto
        laptop = new Producto(req.body);

        await laptop.save();
        res.send(laptop);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProducto = async(req, res) => {

    try {
        let laptop = await Producto.findById(req.params.id);

        if (!laptop) {
            res.status(404).json({ msg: 'No existe esa Laptop' })
        }
        else{
            res.json(laptop);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerProductos = async(req, res) => {

    try {

        const laptops = await Producto.find();
        res.json(laptops)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarProducto = async(req, res) => {

    try {
        const { modelo, marca, procesador, memoriaRam, discos, tarjetaMadre, tarjetaVideo, precio } = req.body;
        let laptop = await Producto.findById(req.params.id);

        if (!laptop) {
            res.status(404).json({ msg: 'No existe esa Laptop' })
        }

        laptop.modelo = modelo;
        laptop.marca = marca;
        laptop.procesador = procesador;
        laptop.memoriaRam = memoriaRam;
        laptop.discos = discos;
        laptop.tarjetaMadre = tarjetaMadre;
        laptop.tarjetaVideo = tarjetaVideo;
        laptop.precio = precio;

        laptop = await Producto.findOneAndUpdate({ _id: req.params.id }, laptop, { new: true })
        res.json(laptop);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarProducto = async(req, res) => {

    try {
        let laptop = await Producto.findById(req.params.id);

        if (!laptop) {
            res.status(404).json({ msg: 'No existe esa Laptop' })
        }

        await Producto.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Laptop eliminada con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}