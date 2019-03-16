'use strict';
const model_servicio = require('./registrar_favorito.model');

module.exports.registrar_favorito = (req, res) => {
    let favorito_nuevo = new model_favorito({
        cedulaJuridica: req.body.cedulaJuridica,
        correo: req.body.correo
     
    });
    console.log(favorito_nuevo);

    favorito_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el centro educativo como favorito, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El centro educativo fue agregado con éxito`
            });
        };
    });
};

module.exports.consultar_favoritos = function(req, res) {
    model_favorito.find().then(
        function (favorito) {
            res.send(favorito)
        });
};
