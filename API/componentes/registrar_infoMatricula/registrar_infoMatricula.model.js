'use strict';
const mongoose = require('mongoose');

let schema_infoMatricula= new mongoose.Schema(
    {
        titulo : {type : String, required: true},
        descripcion : {type: String, required: true}
    }
);

module.exports = mongoose.model('InfoMatricula', schema_infoMatricula);
