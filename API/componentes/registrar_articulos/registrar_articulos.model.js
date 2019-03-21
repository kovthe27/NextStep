'use strict';
const mongoose = require('mongoose');

let schema_utiles= new mongoose.Schema(
    {
        nombre: {type: string, require: true}
    }
);

module.exports = mongoose.model('TablaUtiles', schema_utiles);