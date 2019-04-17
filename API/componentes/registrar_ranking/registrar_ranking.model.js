'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaRanking = new mongoose.Schema(
    {
        cedula : {type : String, required : true},
        anno : {type : Number, required: true},
        calificacion : {type: String, required: true},
        tipo : {type: String, required: true},
    }
);

module.exports = mongoose.model('tablaRanking', schema_TablaRanking);



