'use strict';
const model_acercaNosotros = require('./registrar_acercaNosotros.model');

module.exports.registrar_acercaNosotros = (req, res) => {
    let acercaNosotros_nuevo = new model_acercaNosotros({
        cedulaJuridica: req.body.cedulaJuridica,
        descripcionCentro: req.body.descripcionCentro,
        ubicacion : req.body.ubicacion,
        encargado : req.body.encargado,
        correo : req.body.correo,
        telefono : req.body.telefono,
        facebook : req.body.facebook,
        instagram : req.body.instagram,
        twitter : req.body.twitter,
        pagina : req.body.pagina
    });

    acercaNosotros_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la información de matricula, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La información de matrícula fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_acercaNosotros = function(req, res) {
    model_acercaNosotros.find().then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};


