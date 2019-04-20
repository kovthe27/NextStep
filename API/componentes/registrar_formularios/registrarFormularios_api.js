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


module.exports.buscar_formulario = (req, res) =>{
    schema_TablaFormularios.find(
        {_id :req.body.id_formulario}
    ) .then(
        function(formulario){
            res.send (formulario)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    schema_TablaFormularios.findByIdAndUpdate(req.body.id_formulario, { $set: req.body },
        function (error, formulario){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el formulario'});
            }else{
                res.json({success: true , msg : 'El formulario se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminar_formulario = function(req, res){
    schema_TablaFormularios.findByIdAndRemove(req.body.id_formulario,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el formulario '});
            }else{
                res.json({success: true ,msg: 'El formulario se eliminó con éxito'}); 
            }
        }
    )
};

