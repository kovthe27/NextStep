'use strict';
const schema_TablaBitacora = require('./registrar_bitacora.model');


//Articulos
module.exports.registrar_bitacora = (req, res) => {
    let utiles_nuevo = new schema_TablaBitacora({
        usuario: req.body.usuario,
        accion: req.body.accion,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        hora: req.body.hora,
    });
    console.log(utiles_nuevo);

    utiles_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se guardo en bitácora`
            });

        } else {
            res.json({
                success: true,
                msg: `Accion guardada en bitácora`
            });
        };
    });
};

module.exports.consultar_bitacora = function(req, res) {
    schema_TablaBitacora.find().then(
        function (Bitacora) {
            res.send(Bitacora)
        });
};
