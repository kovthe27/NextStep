'use strict';
const express = require('express');
const router =  express.Router();
const favorito_api = require('./registrar_favorito.api');

router.route('/registrar_favorito')
    .post(
        function(req, res){
            favorito_api.registrar_favorito(req, res);
        }
    );

router.route('/consultar_favoritos')
        .get(
            function(req, res){
                favorito_api.consultar_favoritos(req, res);
            }
        )

module.exports = router;