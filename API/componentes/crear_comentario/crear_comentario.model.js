'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        cedulaJuridica : {type : Number},
        correo : {type: String},
        nombre : {type : String},
        fecha : {type: String},
        comentario : {type: String},
        likes : {type: Number}


    }
);

module.exports = mongoose.model('Comentario', schema_comentario);
