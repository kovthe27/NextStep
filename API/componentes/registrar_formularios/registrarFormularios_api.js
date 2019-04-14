'use strict';
const schema_TablaFormularios = require('./registrarFormularios_model');


module.exports.registrar_formulario = (req, res) => {
    let formulario_nuevo = new schema_TablaFormularios({
        cedulaJuridica: req.body.cedulaJuridica,
        nombre: req.body.nombre,
        item: req.body.item,
        select: req.body.select,
        periodo: req.body.periodo,
    });

    formulario_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el formulario, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El formulario fue creado con éxito`
            });
        };
    });
};

module.exports.consultar_formulario = function(req, res) {
    schema_TablaFormularios.find().then(
        function (formulario) {
            res.send(formulario)
        });
};
