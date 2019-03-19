'use strict';
const schema_TablaListaUtiles = require('./registrar_utiles_lista.model');

module.exports.registrar_listaUtiles = (req, res) => {
    let utiles_nuevo = new schema_TablaListaUtiles({
        cedula: req.body.cedula,
        nombre: req.body.nombre,
        creada: req.body.creada,
        visible: req.body.visible,
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

module.exports.consultar_listaUtiles = function(req, res) {
    schema_TablaListaUtiles.find().then(
        function (utilesAdmin) {
            res.send(utilesAdmin)
        });
};