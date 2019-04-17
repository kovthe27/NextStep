'use strict';
const mongoose = require('mongoose');

let schema_cita = new mongoose.Schema(
    {
        cedulaJuridica : {type: String, required: true},
        nombre : {type : String, required: true},
        fecha : {type : Date, required : true},
        hora : {type : String, required : true},
        correo : {type: String, required: true},
        estado : {type: String, required: true}
    }
);

module.exports = mongoose.model('Cita', schema_cita);
