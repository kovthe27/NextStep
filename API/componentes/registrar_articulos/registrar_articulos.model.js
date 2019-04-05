'use strict';
const mongoose = require('mongoose');

let schema_utiles= new mongoose.Schema(
    {
        nombre: {type: String, require: true}
    }
);

module.exports = mongoose.model('TablaUtiles', schema_utiles);