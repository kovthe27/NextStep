'use strict';
const express = require('express');
const router = express.Router();
const servicio_utilesAdmin = require('./registrar_utiles_lista.api');

router.route('/registrar_listaUtiles')
    .post(
        function (req, res) {
            servicio_utilesAdmin.registrar_listaUtiles(req, res);
        }
    );

router.route('/consultar_listaUtiles')
    .get(
        function (req, res) {
            servicio_utilesAdmin.consultar_listaUtiles(req, res);
        }
    )

router.route('/actualizar_listaUtiles')
    .post(
        function (req, res) {
             servicio_utilesAdmin.actualizarLista(req, res);
        }
    );

router.route('/buscar_listaUtiles')
    .post(
        function (req, res) {
             servicio_utilesAdmin.buscar_listaUtiles(req, res);
        }
    );

router.route('/eliminar_listaUtiles')
    .post(
        function (req, res) {
             servicio_utilesAdmin.eliminarListaUtiles(req, res);
        }
    );

module.exports = router;