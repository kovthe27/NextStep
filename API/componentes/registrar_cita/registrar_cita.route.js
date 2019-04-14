'use strict';
const express = require('express');
const router =  express.Router();
const cita_api = require('./registrar_cita.api');

router.route('/registrar_cita')
    .post(
        function(req, res){
            cita_api.registrar_cita(req, res);
        }
    );

router.route('/consultar_cita')
        .get(
            function(req, res){
                cita_api.consultar_cita(req, res);
            }
        );

router.route('/enviar_MailCita')
.post(
    function(req, res){
        cita_api.enviar_MailCita(req, res);
    }
)



module.exports = router;
