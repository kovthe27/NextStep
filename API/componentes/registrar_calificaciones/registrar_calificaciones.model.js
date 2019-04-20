'use strict';
const mongoose = require('mongoose');

let schema_calificaciones= new mongoose.Schema(
    {
        cedulaJuridica : {type: String, required: true},
        calificacion : {type: Number, required: true},
        fecha : {type : String, required: true},
    }
);

module.exports = mongoose.model('tablaCalificaciones', schema_calificaciones);