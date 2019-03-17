'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaUtilesAdmin = new mongoose.Schema(
    {
        cedula : {type : String, required : true},
        cantidad : {type : Number, required: true},
        tipo : {type: String, required: true},
        descripcion : {type: String, required: true},
        nivel : {type: String, required: true},
    }
);

module.exports = mongoose.model('tablaArticulos', schema_TablaUtilesAdmin);



