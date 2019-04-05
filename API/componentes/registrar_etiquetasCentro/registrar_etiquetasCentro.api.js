'use strict';
const model_etiquetasCentro = require('./registrar_etiquetasCentro.model');

module.exports.registrar_etiquetasCentro = (req, res) => {
    let etiquetasCentro_nuevo = new model_etiquetasCentro({
        cedulaJuridica: req.body.cedulaJuridica,
        etiqueta1: req.body.etiqueta1,
        etiqueta2: req.body.etiqueta2,
        etiqueta3: req.body.etiqueta3,
        etiqueta4: req.body.etiqueta4,
    });
    // console.log(etiquetasCentro_nuevo);

    etiquetasCentro_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar las etiquetas, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `Las etiquetas fueron creadas con éxito`
            });
        };
    });
};

module.exports.consultar_etiquetasCentro = function(req, res) {
    model_etiquetasCentro.find().then(
        function (etiquetasCentro) {
            res.send(etiquetasCentro)
        });
};
