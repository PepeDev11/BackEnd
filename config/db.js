const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });
//187.190.203.170

const conectarDB = async() => {

    try {

        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');

    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = conectarDB