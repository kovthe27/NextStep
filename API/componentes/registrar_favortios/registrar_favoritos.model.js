'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaFavortios = new mongoose.Schema(
    {
        cedulaJuridica : {type : String, required : true},
        correo : {type : String, required: true},
    }
);

module.exports = mongoose.model('tablaFavoritos', schema_TablaFavortios);



