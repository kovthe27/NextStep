'use strict';
const express = require('express');
const router = express.Router();
const servicio_ranking = require('./registrar_ranking.api');

router.route('/registrar_ranking')
    .post(
        function (req, res) {
            servicio_ranking.registrar_ranking(req, res);
        }
    );

router.route('/consultar_ranking')
    .get(
        function (req, res) {
            servicio_ranking.consultar_ranking(req, res);
        }
    )


router.route('/actualizar_ranking')
    .post(
        function (req, res) {
            servicio_ranking.actualizar_ranking(req, res);
        }
    );

router.route('/buscar_ranking')
    .post(
        function (req, res) {
            servicio_ranking.buscar_ranking(req, res);
        }
    );

router.route('/eliminar_ranking')
    .post(
        function (req, res) {
            servicio_ranking.eliminar_ranking(req, res);
        }
    );

module.exports = router;