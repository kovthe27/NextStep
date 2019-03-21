'use strict';
const model_boletin = require('./registrar_boletin.model');

module.exports.registrar_boletin = (req, res) => {
    let boletin_nuevo = new model_boletin({
        cedulaJuridica: req.body.cedulaJuridica,
        boletin: req.body.boletin,
        nombre: req.body.nombre
    });
    console.log(boletin_nuevo);

    boletin_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el boletin, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El boletin fue guardado con éxito`
            });
        };
    });
};

module.exports.consultar_boletin = function(req, res) {
    model_boletin.find().then(
        function (boletin) {
            res.send(boletin)
        });
};
