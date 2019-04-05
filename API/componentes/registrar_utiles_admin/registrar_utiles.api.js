'use strict';
const schema_TablaUtilesAdmin = require('./registrar_utiles.model');


//Articulos
module.exports.registrar_utilesAdmin = (req, res) => {
    let utiles_nuevo = new schema_TablaUtilesAdmin({
        cedula: req.body.cedula,
        cantidad: req.body.cantidad,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        nivel: req.body.nivel,
        fecha: req.body.fecha
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
