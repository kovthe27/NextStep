'use strict';
const express = require('express');
const router = express.Router();
const centro_api = require('./registrar_centro.api');

router.route('/registrar_centro')
    .post(
        function (req, res) {
            centro_api.registrar_Centro(req, res);
        }
    );

router.route('/consultar_centro')
    .get(
        function (req, res) {
            centro_api.listar_TodosCentros(req, res);
        }
    )

router.route('/cambiarEstado_centro')
    .post(
        function (req, res) {
            centro_api.CambiarEstado(req, res);
        }
    )

router.route('/actualizarcontrasena_Centro')
    .post(
        function (req, res) {
            centro_api.actualizarcontrasena_Centro(req, res);
        }
    )

router.route('/actualizar_centro')
    .post(
        function(req , res){
            centro_api.actualizar_centro(req, res);
        }
    );

router.route('/buscar_centro')
    .post(
    function(req , res){
        centro_api.buscar_centro(req, res);
    }
    );

router.route('/eliminar_centro')
.post(
    function(req , res){
        centro_api.eliminar_centro(req, res);
    }
);

module.exports = router;