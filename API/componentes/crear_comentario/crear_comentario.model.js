'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        rate :  {type : Number, required: true},
        cedulaJuridica : {type : String, required: true},
        correo : {type: String, required: true},
        nombre : {type : String, required: true},
        fecha : {type: String, required: true},
        comentario : {type: String, required: true},
        likes : {type: Number, required: true}


    }
);

module.exports = mongoose.model('Comentario', schema_comentario);
