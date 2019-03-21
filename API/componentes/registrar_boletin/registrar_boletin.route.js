'use strict';
const express = require('express');
const router =  express.Router();
const boletin_api = require('./registrar_boletin.api');

router.route('/registrar_boletin')
    .post(
        function(req, res){
            boletin_api.registrar_boletin(req, res);
        }
    );

router.route('/consultar_boletin')
        .get(
            function(req, res){
                boletin_api.consultar_boletin(req, res);
            }
        )

module.exports = router;
