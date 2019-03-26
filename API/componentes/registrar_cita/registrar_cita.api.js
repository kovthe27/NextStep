'use strict';
const model_cita = require('./registrar_cita.model');

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_cita({
        cedulaJuridica: req.body.cedulaJuridica,
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        hora: req.body.hora,
        correo: req.body.correo
    });
    console.log(cita_nueva);

    cita_nueva.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la cita, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La cita fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_cita = function(req, res) {
    model_cita.find().then(
        function (cita) {
            res.send(cita)
        });
};
