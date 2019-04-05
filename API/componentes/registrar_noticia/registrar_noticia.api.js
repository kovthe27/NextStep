'use strict';
const model_noticia = require('./registrar_noticia.model');

module.exports.registrar_noticia = (req, res) => {
    let noticia_nueva = new model_noticia({
        cedulaJuridica : req.body.cedulaJuridica,
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion
    });
    console.log(noticia_nueva);

    noticia_nueva.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la noticia, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La noticia fue creado con éxito`
            });
        };
    });
};

module.exports.consultar_noticia = function(req, res) {
    model_noticia.find().then(
        function (noticia) {
            res.send(noticia)
        });
};
