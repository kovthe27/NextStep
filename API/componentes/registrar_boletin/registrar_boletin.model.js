'use strict';
const mongoose = require('mongoose');

let schema_boletin = new mongoose.Schema(
    {
        cedulaJuridica : {type: String, unique:true, required: true},
        boletin : {type: String, required: true},
        nombre : {type: String, required: true}
    }
);

module.exports = mongoose.model('Boletin3', schema_boletin);
