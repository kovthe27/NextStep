'use strict';
const express = require('express');
const router =  express.Router();
const padre_api = require('./padre.api');

router.route('/registrar_padre')
    .post(
        function(req, res){
            padre_api.registrar_Padre(req, res);
        }
    );

router.route('/consultar_padre')
        .get(
            function(req, res){
                padre_api.listar_TodosPadres(req, res);
            }
        )

module.exports = router;