'use strict';

//tabla con los articulos por lista
const mongoose = require('mongoose');

let schema_TablaTipo= new mongoose.Schema(
    {
        nombre : {type : String, unique: true, required : true},
    }
);

module.exports = mongoose.model('tablaTipo', schema_TablaTipo);