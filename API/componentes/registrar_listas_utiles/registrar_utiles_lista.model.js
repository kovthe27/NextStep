'use strict';

const mongoose = require('mongoose');

//tabla con las listas por usuario

let schema_TablaListaUtiles = new mongoose.Schema(
    {
        cedula : {type : String, required : true},
        nombre : {type : String, unique: true, required: true},
        creada : {type : String, required: true},
        visible : {type : Boolean, required: true},
    }
);

module.exports = mongoose.model('tablaListasU', schema_TablaListaUtiles);