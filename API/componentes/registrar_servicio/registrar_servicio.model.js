'use strict';
const mongoose = require('mongoose');

let schema_servicio = new mongoose.Schema(
    {
        imagen : {type: String, required: true},
        titulo : {type : String, required: true},
        descripcion : {type: String, required: true}
    }
);

module.exports = mongoose.model('Servicio', schema_servicio);
