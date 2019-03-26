'use strict';
const schema_TablaFavortios = require('./registrar_favoritos.model');


module.exports.registrar_favorito = (req, res) => {
    let favorito_nuevo = new schema_TablaFavortios({
        cedulaJuridica: req.body.cedulaJuridica,
        correo: req.body.correo,
    });

    favorito_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la lista de favoritos, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La lista de favoritos fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_favorito = function(req, res) {
    schema_TablaFavortios.find().then(
        function (favorito) {
            res.send(favorito)
        });
};
