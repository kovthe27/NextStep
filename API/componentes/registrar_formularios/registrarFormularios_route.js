'use strict';
const express = require('express');
const router =  express.Router();
const servicio_formularios = require('./registrarFormularios_api');

router.route('/registrar_formulario')
    .post(
        function(req, res){
            servicio_formularios.registrar_formulario(req, res);
        }
    );

router.route('/consultar_formulario')
        .get(
            function(req, res){
                servicio_formularios.consultar_formulario(req, res);
            }
        )

module.exports = router;