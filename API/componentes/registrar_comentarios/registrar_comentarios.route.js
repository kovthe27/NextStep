'use strict';
const express = require('express');
const router = express.Router();
const comentarios_api = require('./registrar_comentarios.api');

router.route('/registrar_comentarios')
    .post(
        function (req, res) {
            comentarios_api.registrar_comentarios(req, res);
        }
    );

router.route('/consultar_comentarios')
    .get(
        function (req, res) {
            comentarios_api.consultar_comentarios(req, res);
        }
    )

    router.route('/buscar_comentarios')
    .post(
        function (req, res) {
            comentarios_api.buscar_comentarios(req, res);
        }
    );

router.route('/eliminar_comentario')
    .post(
        function (req, res) {
            comentarios_api.eliminar(req, res);
        }
    );

module.exports = router;