'use strict';
const schema_TablaTipo = require('./registrar_articulos.model');


//Articulos
module.exports.registrar_tipoArticulo = (req, res) => {
    let utiles_nuevo = new schema_TablaTipo({
        nombre: req.body.nombre,
    });
    console.log(utiles_nuevo);

    utiles_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el tipo`
            });

        } else {
            res.json({
                success: true,
                msg: `La lista se actualizo con exito`
            });
        };
    });
};

module.exports.consultar_tipoArticulo = function(req, res) {
    schema_TablaTipo.find().then(
        function (tipos) {
            res.send(tipos)
        });
};
