'use strict';
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        cedulaJurídica : {type : Number, required : true},
        nombrePadreFamilia : {type : String, required: true},
        fecha : {type: Date, required: true},
        comentario : {type: String, required: true},
        likes : {type: Number, required: true}


    }
);

module.exports = mongoose.model('Comentario', schema_comentario);
