'use strict';
const express = require('express');
const router =  express.Router();
const servicio_etiquetas = require('./registrar_etiquetas.api');

router.route('/registrar_etiqueta')
    .post(
        function(req, res){
            servicio_etiquetas.registrar_etiqueta(req, res);
        }
    );

router.route('/consultar_etiqueta')
        .get(
            function(req, res){
                servicio_etiquetas.consultar_etiqueta(req, res);
            }
        )

module.exports = router;