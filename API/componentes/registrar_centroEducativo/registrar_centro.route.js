'use strict';
const express = require('express');
const router =  express.Router();
const centro_api = require('./registrar_centro.api');

router.route('/registrar_centro')
    .post(
        function(req, res){
            centro_api.registrar_Centro(req, res);
        }
    );

router.route('/consultar_centro')
    .get(
        function(req, res){
            centro_api.listar_TodosCentros(req, res);
        }
    )




module.exports = router;