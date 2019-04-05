'use strict';
const express = require('express');
const router =  express.Router();
const infoMatricula_api = require('./registrar_infoMatricula.api');

router.route('/registrar_infoMatricula')
    .post(
        function(req, res){
            infoMatricula_api.registrar_infoMatricula(req, res);
        }
    );

router.route('/consultar_infoMatricula')
        .get(
            function(req, res){
                infoMatricula_api.consultar_infoMatricula(req, res);
            }
        )

module.exports = router;
