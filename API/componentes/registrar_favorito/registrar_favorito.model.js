'use strict';
const mongoose = require('mongoose');

let schema_favorito = new mongoose.Schema(
    {
        cedulaJuridica : {type: String, required : true},
        correo : {type: String,  required : true}

    }
);

module.exports = mongoose.model('Favorito', schema_favorito);