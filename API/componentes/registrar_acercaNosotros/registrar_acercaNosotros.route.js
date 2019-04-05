'use strict';
const express = require('express');
const router =  express.Router();
const acercaNosotros_api = require('./registrar_acercaNosotros.api');

router.route('/registrar_acercaNosotros')
    .post(
        function(req, res){
            acercaNosotros_api.registrar_acercaNosotros(req, res);
        }
    );

router.route('/consultar_acercaNosotros')
        .get(
            function(req, res){
                acercaNosotros_api.consultar_acercaNosotros(req, res);
            }
        )

module.exports = router;
