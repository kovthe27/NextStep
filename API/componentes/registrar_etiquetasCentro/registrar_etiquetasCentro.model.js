'use strict';
const mongoose = require('mongoose');

let schema_etiquetasCentro = new mongoose.Schema(
    {
        etiqueta1 : {type : String, required: false},
        etiqueta2 : {type : String, required: false},
        etiqueta3 : {type : String, required: false},
        etiqueta4 : {type : String, required: false}
    }
);

module.exports = mongoose.model('EtiquetasCentro', schema_etiquetasCentro);
