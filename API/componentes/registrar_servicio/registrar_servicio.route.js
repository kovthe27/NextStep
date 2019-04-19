'use strict';
const express = require('express');
const router = express.Router();
const servicio_api = require('./registrar_servicio.api');

router.route('/registrar_servicio')
    .post(
        function (req, res) {
            servicio_api.registrar_servicio(req, res);
        }
    );

router.route('/consultar_servicio')
    .get(
        function (req, res) {
            servicio_api.consultar_servicio(req, res);
        }
    )


router.route('/actualizar_servicio')
    .post(
        function (req, res) {
            servicio_api.actualizar(req, res);
        }
    );

router.route('/buscar_servicio')
    .post(
        function (req, res) {
            servicio_api.buscar_servicio(req, res);
        }
    );

    router.route('/eliminar_servicio')
    .post(
        function (req, res) {
            servicio_api.eliminar_servicio(req, res);
        }
    );

module.exports = router;