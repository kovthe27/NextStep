'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaBitacora = new mongoose.Schema(
    {
        usuario: {type: String, require: true},
        descripcion: {type: String, require: true},
        fecha: {type: String, require: true},
        hora: {type: String, require: true}
    }
);

module.exports = mongoose.model('tablaBitacora', schema_TablaBitacora);