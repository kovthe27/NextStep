'use strict';
const express = require('express');
const router =  express.Router();
const servicio_preguntaAdmin = require('./registrar_Preguntas.api');

router.route('/registrar_PreguntaAdmin')
    .post(
        function(req, res){
            servicio_preguntaAdmin.registrar_PreguntaAdmin(req, res);
        }
    );

router.route('/consultar_PreguntaAdmin')
        .get(
            function(req, res){
                servicio_preguntaAdmin.consultar_PreguntaAdmin(req, res);
            }
        )

module.exports = router;
