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


        router.route('/buscar_formulario')
    .post(
        function (req, res) {
            servicio_formularios.buscar_formulario(req, res);
        }
    );

    router.route('/eliminar_formulario')
    .post(
        function (req, res) {
            servicio_formularios.eliminarformulario(req, res);
        }
    );

    router.route('/actualizar_formulario')
    .post(
        function (req, res) {
            servicio_formularios.actualizar(req, res);
        }
    );
module.exports = router;