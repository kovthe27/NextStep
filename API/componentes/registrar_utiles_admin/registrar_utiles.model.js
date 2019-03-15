'use strict';
const mongoose = require('mongoose');

let schema_TablaUtilesAdmin = new mongoose.Schema(
    {
        nivel : {type : String, unique: true, required : true},
        fecha : {type : String, required: true},
        url : {type: String, required: true}
    }
);

module.exports = mongoose.model('UtilesAdmin', schema_TablaUtilesAdmin);