'use strict';
const schema_TablaEtiquetas = require('./registrar_etiquetas.model');


//Articulos
module.exports.registrar_etiqueta = (req, res) => {
    let utiles_nuevo = new schema_TablaEtiquetas({
        nombre: req.body.nombre,
    });
    console.log(utiles_nuevo);

    utiles_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la etiqueta`
            });

        } else {
            res.json({
                success: true,
                msg: `La lista se actualizo con exito`
            });
        };
    });
};

module.exports.consultar_etiqueta = function(req, res) {
    schema_TablaEtiquetas.find().then(
        function (etiquetas) {
            res.send(etiquetas)
        });
};
