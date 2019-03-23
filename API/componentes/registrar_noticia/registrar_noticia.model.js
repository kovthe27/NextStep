'use strict';
const mongoose = require('mongoose');

let schema_noticia = new mongoose.Schema(
    {
        cedulaJuridica : {type : String, required: true},
        titulo : {type : String, required: true},
        fecha : {type : String, required : true},
        descripcion : {type: String, required: true}
    }
);

module.exports = mongoose.model('Noticia', schema_noticia);
