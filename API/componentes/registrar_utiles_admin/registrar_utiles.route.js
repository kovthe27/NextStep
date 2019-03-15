'use strict';
const express = require('express');
const router =  express.Router();
const servicio_utilesAdmin = require('./registrar_utiles.api');

router.route('/registrar_utilesAdmin')
    .post(
        function(req, res){
            servicio_utilesAdmin.registrar_utilesAdmin(req, res);
        }
    );

router.route('/consultar_utilesAdmin')
        .get(
            function(req, res){
                servicio_utilesAdmin.consultar_utilesAdmin(req, res);
            }
        )

module.exports = router;