'use strict';
const model_comentario = require('./crear_comentario.model');

module.exports.crear_comentario = (req, res) => {
    let comentario_nuevo = new model_comentario({
        rate : req.body.rate,
        cedulaJuridica: req.body.cedulaJuridica,
        correo: req.body.correo,
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        comentario: req.body.comentario,
        likes: req.body.likes


    });
    console.log(comentario_nuevo);

    comentario_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el comentario, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El comentario fue creado con éxito`
            });
        };
    });
};

module.exports.consultar_comentario= function(req, res) {
    model_comentario.find().then(
        function (comentario) {
            res.send(comentario)
        });
};
