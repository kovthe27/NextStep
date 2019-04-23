'use strict';
const express = require('express');
const router = express.Router();
const calificaciones_api = require('./registrar_calificaciones.api');

router.route('/registrar_calificaciones')
    .post(
        function (req, res) {
            calificaciones_api.registrar_calificaciones(req, res);
        }
    );

router.route('/consultar_calificaciones')
    .get(
        function (req, res) {
            calificaciones_api.consultar_calificaciones(req, res);
        }
    )

router.route('/consultar_calificaciones')
    .get(
        function (req, res) {
            calificaciones_api.consultar_calificaciones(req, res);
        }
    )

router.route('/buscar_calificaciones')
    .post(
        function (req, res) {
            calificaciones_api.buscar_calificaciones(req, res);
        }
    );

    router.route('/eliminarcalificacion')
    .post(
        function (req, res) {
            calificaciones_api.eliminarcalificacion(req, res);
        }
    );

    router.route('/consultar_calificacionesOrdenadas')
    .get(
        function (req, res) {
            calificaciones_api.consultar_calificacionesOrdenadas(req, res);
        }
    )
module.exports = router;