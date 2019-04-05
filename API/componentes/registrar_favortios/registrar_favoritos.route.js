'use strict';
const express = require('express');
const router =  express.Router();
const servicio_favoritos = require('./registrar_favoritos.api');

router.route('/registrar_favorito')
    .post(
        function(req, res){
            servicio_favoritos.registrar_favorito(req, res);
        }
    );

router.route('/consultar_favorito')
        .get(
            function(req, res){
                servicio_favoritos.consultar_favorito(req, res);
            }
        )

module.exports = router;