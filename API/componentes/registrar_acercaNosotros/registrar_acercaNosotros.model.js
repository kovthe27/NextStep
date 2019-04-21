'use strict';
const mongoose = require('mongoose');

let schema_acercaNosotros= new mongoose.Schema(
    {
        cedulaJuridica : {type: String, unique: true, required: true},
        descripcionCentro : {type: String, required: true},
        ubicacion : {type : String, required: true},
        encargado: {type : String, required: true},
        correo : {type : String, required: true},
        telefono : {type : String, required: false},
        facebook : {type : String, required: false},
        instagram : {type : String, required: false},
        twitter : {type : String, required: false},
        pagina : {type : String, required: false},
    }
);

module.exports = mongoose.model('AcercaNosotros2', schema_acercaNosotros);