'use strict';
const mongoose = require('mongoose');

//Registro Padre
let schema_RegistroPadre = new mongoose.Schema(
    {
        nombreUsuario : {type : String, required : true},
        apellidoUsuario : {type : String, required : true},
        seg_ApellidoUsuario : {type : String, required : false},
        idUsuario : {type : Number, required: true, unique: true},
        nacionUsuario : {type: String, required: true},
        direccionUsuario : {type: String, required: true},
        emailUsuario : {type: String, required: true},
        contrasenaUsuario : {type: String, required: true, unique: true},
        estadoUsuario : {type: String, required: true},
        telUsuario : {type: Number, required: true},
        cantHijos : {type: Number, required: false},
        fotoUsuario : {type: String, required: false},
        provinciaUsuario : {type: String,require: true},
        cantonUsuario : {type: String, require: true},
        distritoUsuario : {type: String, require: true}
    }
);

module.exports = mongoose.model('RegistroPadre', schema_RegistroPadre);
