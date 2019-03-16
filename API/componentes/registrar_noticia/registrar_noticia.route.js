'use strict';
const express = require('express');
const router =  express.Router();
const noticia_api = require('./registrar_noticia.api');

router.route('/registrar_noticia')
    .post(
        function(req, res){
            noticia_api.registrar_noticia(req, res);
        }
    );

router.route('/consultar_noticia')
        .get(
            function(req, res){
                noticia_api.consultar_noticia(req, res);
            }
        )

module.exports = router;
