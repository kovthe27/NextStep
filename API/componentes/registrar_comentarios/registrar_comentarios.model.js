'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_comentario = new mongoose.Schema(
    {
        cedulaJuridica : {type : String, required : true},
        nombreUsuario : {type : String, required : true},
        fotoUsuario : {type : String, required : true},
        correoUsuario : {type : String, required : true},
        calificacion : {type : String, required : true},
        fecha : {type : String, required : true},
        comentario : {type : String, required : true}
    }
);

module.exports = mongoose.model('comentario', schema_comentario);
