'use strict';

const mongoose = require('mongoose');

let schema_TablaFavortios = new mongoose.Schema(
    {
        cedulaJuridica : {type : String, required : true},
        nombre : {type : String, required: true},
        item : {type : String, required: true},
        select : {type : Number, required: true},
        periodo : {type : String},
    }
);

module.exports = mongoose.model('tablaFormularios1', schema_TablaFavortios);

