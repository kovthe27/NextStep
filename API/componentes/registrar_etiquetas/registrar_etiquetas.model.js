'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaEtiquetas= new mongoose.Schema(
    {
        nombre : {type : String, unique: true, required : true},
        fecha : {type : String, required : true},
        usuarios: {type : Number, required : true},
    }
);

module.exports = mongoose.model('tablaEtiqueta', schema_TablaEtiquetas);