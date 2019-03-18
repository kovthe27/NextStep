'use strict';
const mongoose = require('mongoose');

let schema_cita = new mongoose.Schema(
    {
        Nombre : {type : String, required: true},
        fecha : {type : Date, required : true},
        correo : {type: String, required: true}
    }
);

module.exports = mongoose.model('Cita', schema_cita);
