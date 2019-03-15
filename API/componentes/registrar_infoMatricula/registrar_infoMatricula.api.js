'use strict';
const model_infoMatricula = require('./registrar_infoMatricula.model');

module.exports.registrar_infoMatricula = (req, res) => {
    let infoMatricula_nuevo = new model_infoMatricula({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
    });
    // console.log(infoMatricula_nuevo);

    infoMatricula_nuevo.save(function (error) {
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

module.exports.consultar_infoMatricula = function(req, res) {
    model_infoMatricula.find().then(
        function (infoMatricula) {
            res.send(infoMatricula)
        });
};
