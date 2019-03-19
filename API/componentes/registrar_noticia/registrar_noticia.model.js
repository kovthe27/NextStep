'use strict';
const mongoose = require('mongoose');

let schema_noticia = new mongoose.Schema(
    {
        titulo : {type : String, required: true},
        fecha : {type : Date, required : true},
        descripcion : {type: String, required: true}
    }
);

module.exports = mongoose.model('Noticia', schema_noticia);
