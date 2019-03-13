'use strict';
const model_servicio = require('./registrar_servicio.model');

module.exports.registrar_servicio = (req, res) => {
    let servicio_nuevo = new model_servicio({
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion
    });
    console.log(servicio_nuevo);

    servicio_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el servicio, por favor vuelva a intentarlo`
            });
        } else {
            res.json({
                success: true,
                msg: `El servicio fue creado con éxito`
            });
        };
    });
};

module.exports.consultar_servicio = function(req, res) {
    model_servicio.find().then(
        function (servicio) {
            res.send(servicio)
        });
};
