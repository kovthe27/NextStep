'use strict';
const express = require('express');
const router =  express.Router();
const comentario_api = require('./crear_comentario.api');

router.route('/crear_comentario')
    .post(
        function(req, res){
            servicio_api.crear_comentario(req, res);
        }
    );

router.route('/consultar_comentario')
        .get(
            function(req, res){
                servicio_api.consultar_comentario(req, res);
            }
        )

module.exports = router;
