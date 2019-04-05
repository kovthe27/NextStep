'use strict';
const express = require('express');
const router =  express.Router();
const servicio_utilesTipo = require('./registrar_articulos.api');

router.route('/registrar_tipoArticulo')
    .post(
        function(req, res){
            servicio_utilesTipo.registrar_tipoArticulo(req, res);
        }
    );

router.route('/consultar_tipoArticulo')
        .get(
            function(req, res){
                servicio_utilesTipo.consultar_tipoArticulo(req, res);
            }
        )

module.exports = router;