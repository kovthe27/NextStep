'use strict';
const mongoose = require('mongoose');

//Registro Contacto Centro Educativo
let schema_RegistroContacto = new mongoose.Schema(
    {
        nombreEncargado : {type : String, required : true},
        idEncargado : {type : String, required: true},
        dptoEncargado : {type : String, required : true},
        telEncargado : {type: String, required: true},
        extEncargado : {type: String, required: false},
        emailEncargado : {type: String, required: true},
        fotoEncargado : {type: String, required: false},
        centroEducativoId : {type: String, required: true},
        cedulaJuridica : {type: String, unique: true}
    }
);

module.exports = mongoose.model('RegistroContacto', schema_RegistroContacto);