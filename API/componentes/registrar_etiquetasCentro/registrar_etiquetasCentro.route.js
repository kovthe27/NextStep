'use strict';
const express = require('express');
const router =  express.Router();
const etiquetasCentro_api = require('./registrar_etiquetasCentro.api');

router.route('/registrar_etiquetasCentro')
    .post(
        function(req, res){
            etiquetasCentro_api.registrar_etiquetasCentro(req, res);
        }
    );

router.route('/consultar_etiquetasCentro')
        .get(
            function(req, res){
                etiquetasCentro_api.consultar_etiquetasCentro(req, res);
            }
        )

module.exports = router;
