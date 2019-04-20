'use strict';
const express = require('express');
const router =  express.Router();
const servicio_etiquetas = require('./registrar_etiquetas.api');

router.route('/registrar_etiqueta')
    .post(
        function(req, res){
            servicio_etiquetas.registrar_etiqueta(req, res);
        }
    );

router.route('/consultar_etiqueta')
        .get(
            function(req, res){
                servicio_etiquetas.consultar_etiqueta(req, res);
            }
        )


router.route('/actualizar_etiqueta')
    .post(
        function (req, res) {
            servicio_etiquetas.actualizar_etiqueta(req, res);
        }
    )

router.route('/buscar_etiqueta')
    .post(
        function (req, res) {
            servicio_etiquetas.buscar_etiqueta(req, res);
        }
    );

router.route('/eliminar_etiqueta')
    .post(
        function (req, res) {
            servicio_etiquetas.eliminaretiqueta(req, res);
        }
    );

module.exports = router;