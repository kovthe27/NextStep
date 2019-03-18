'use strict';
const model_cita = require('./registrar_cita.model');

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_cita({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
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
