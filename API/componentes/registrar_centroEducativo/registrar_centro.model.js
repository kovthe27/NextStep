'use strict';
const mongoose = require('mongoose');

//Registro Centro Educativo
let schema_RegistroCentro = new mongoose.Schema(
    {
        nombreCentro : {type : String, required : true},
        nombreComercial : {type : String, required : true},
        cedJuridica : {type : String, required : true, unique: true},
        provinciaCentro : {type: String,required: true},
        cantonCentro : {type: String, required: true},
        distritoCentro : {type: String, required: true},
        direccionCentro : {type: String, required: true},
        emailCentro : {type: String, required: true},
        contrasenaCentro : {type: String, required: true},
        telCentro : {type: Number, required: true},
        faxCentro : {type: Number, required: false},
        fotoCentro : {type: String, required: false},
        sitioWeb : {type: String, required: false},
        tipoCentro : {type: String, required: true},
        gradoAcademico : {type: String, required: true},
        annoFundCentro : {type: Number, required: true},
        referenciaHistorica : {type: String, required: true},
        archivosCentro : {type: String, required: false},
        registroCompletado : {type: Boolean}
    }
);

module.exports = mongoose.model('RegistroCentro1', schema_RegistroCentro);