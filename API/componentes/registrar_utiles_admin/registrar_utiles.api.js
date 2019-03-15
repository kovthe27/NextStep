'use strict';
const schema_TablaUtilesAdmin = require('./registrar_utiles.model');

module.exports.registrar_utilesAdmin = (req, res) => {
    let utiles_nuevo = new schema_TablaUtilesAdmin({
        nivel: req.body.nivel,
        fecha: req.body.fecha,
        url: req.body.url
    });
    console.log(utiles_nuevo);

    utiles_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la lista de utiles, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La lista de utiles fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_utilesAdmin = function(req, res) {
    schema_TablaUtilesAdmin.find().then(
        function (utilesAdmin) {
            res.send(utilesAdmin)
        });
};