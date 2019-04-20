'use strict';
const express = require('express');
const router =  express.Router();
const contacto_api = require('./registrar_contacto.api');

router.route('/registrar_contacto')
    .post(
        function(req, res){
            contacto_api.registrar_Contacto(req, res);
        }
    );

router.route('/consultar_contacto')
    .get(
        function(req, res){
            contacto_api.listar_TodosContactos(req, res);
        }
    )

router.route('/actualizar_contacto')
    .post(
        function(req , res){
            contacto_api.actualizar_contacto(req, res);
        }
    );

router.route('/buscar_contacto')
    .post(
    function(req , res){
        contacto_api.buscar_contacto(req, res);
    }
    );


module.exports = router;