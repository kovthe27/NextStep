'use strict';
const mongoose = require('mongoose');

let schema_RegistroPadre = new mongoose.Schema(
    {
        nombrePadre : {type : String, required : true},
        idPadre : {type : Number, required: true},
        nacionPadre : {type: String, required: true},
        direccionPadre : {type: String, required: true},
        emailPadre : {type: String, required: true},
        telPadre : {type: Number, required: true},
        cantHijos : {type: Number, required: false},
        fotoPadre : {type: String, required: false}
    }
);

module.exports = mongoose.model('RegistroPadre', schema_RegistroPadre);