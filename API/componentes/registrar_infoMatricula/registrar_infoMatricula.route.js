'use strict';
const express = require('express');
const router = express.Router();
const infoMatricula_api = require('./registrar_infoMatricula.api');

router.route('/registrar_infoMatricula')
    .post(
        function (req, res) {
            infoMatricula_api.registrar_infoMatricula(req, res);
        }
    );

router.route('/consultar_infoMatricula')
    .get(
        function (req, res) {
            infoMatricula_api.consultar_infoMatricula(req, res);
        }
    )

router.route('/actualizar_infoMatricula')
    .post(
        function (req, res) {
            infoMatricula_api.actualizar(req, res);
        }
    );

router.route('/buscar_infoMatricula')
    .post(
        function (req, res) {
            infoMatricula_api.buscar_infoMatricula(req, res);
        }
    );

    router.route('/eliminar_infoMatricula')
    .post(
        function (req, res) {
            infoMatricula_api.eliminarInfoMatricula(req, res);
        }
    );

module.exports = router;