'use strict';
const express = require('express');
const router = express.Router();
const padre_api = require('./registrar_usuario.api');

router.route('/registrar_padre')
    .post(
        function (req, res) {
            padre_api.registrar_Padre(req, res);
        }
    );

router.route('/actualizar_padre')
    .post(
        function(req , res){
            padre_api.actualizar_padre(req, res);
        }
    );

router.route('/consultar_padre')
    .get(
        function (req, res) {
            padre_api.listar_TodosPadres(req, res);
        }
    )

router.route('/actualizarcontrasena_Padre')
    .post(
        function (req, res) {
            padre_api.actualizarcontrasena_Padre(req, res);
        }
    )


router.route('/buscar_padre')
.get(
    function(req , res){
        padre_api.buscar_Padre(req, res);
    }
);


module.exports = router;