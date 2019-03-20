'use strict';
const express = require('express');
const router =  express.Router();
const servicio_bitacora = require('./registrar_bitacora.api');

router.route('/registrar_bitacora')
    .post(
        function(req, res){
            servicio_bitacora.registrar_bitacora(req, res);
        }
    );

router.route('/consultar_bitacora')
        .get(
            function(req, res){
                servicio_bitacora.consultar_bitacora(req, res);
            }
        )

module.exports = router;