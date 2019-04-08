'use strict';
const mongoose = require('mongoose');

let schema_infoMatricula= new mongoose.Schema(
    {
        cedulaJuridica : {type : String, required: true},
        titulo : {type : String, required: true},
        descripcion : {type: String, required: true},
        estado : {type : String, required : true}
    }
);

module.exports = mongoose.model('InfoMatricula2', schema_infoMatricula);
