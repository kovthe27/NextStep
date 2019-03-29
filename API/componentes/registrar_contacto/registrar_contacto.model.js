'use strict';
const mongoose = require('mongoose');

//Registro Contacto Centro Educativo
let schema_RegistroContacto = new mongoose.Schema(
    {
        nombreEncargado : {type : String, required : true},
        idEncargado : {type : Number, required: true, unique: true},
        dptoEncargado : {type : String, required : true},
        telEncargado : {type: Number, required: true},
        extEncargado : {type: Number, required: false},
        emailEncargado : {type: String, required: true},
        fotoEncargado : {type: String, required: false},
        centroEducativoId : {type: String, required: true}
    }
);

module.exports = mongoose.model('RegistroContacto', schema_RegistroContacto);