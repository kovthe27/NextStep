'use strict';
const mongoose = require('mongoose');

let schema_TablaPreguntasAdmin = new mongoose.Schema(
    {
        numero : {type : Number, required : true},
        pregunta : {type : String, required: true},
        respuesta : {type: String, required: true}
    }
);

module.exports = mongoose.model('PreguntasAdmin', schema_TablaPreguntasAdmin);
