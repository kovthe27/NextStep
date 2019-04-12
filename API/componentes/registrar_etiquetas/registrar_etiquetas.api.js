'use strict';
const schema_TablaEtiquetas = require('./registrar_etiquetas.model');


//Articulos
module.exports.registrar_etiqueta = (req, res) => {
    let utiles_nuevo = new schema_TablaEtiquetas({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        usuarios: req.body.usuarios,
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


module.exports.buscar_etiqueta = (req, res) =>{
    schema_TablaEtiquetas.find(
        {_id :req.body.id_etiqueta}
    ) .then(
        function(etiqueta){
            res.send (etiqueta)
        }
    )
};

// Actualizar

module.exports.actualizar_etiqueta = function(req, res){
   
    schema_TablaEtiquetas.findByIdAndUpdate(req.body.id_etiqueta, { $set: req.body },
        // schema_TablaEtiquetas.findByIdAndUpdate(req.body.id_etiqueta, { $set:{descripcion:req.body.descripcion}},
        function (error, etiqueta){
            if(error){
                res.json({error : false , msg : 'No se pudo actualizar la etiqueta'});
            }else{
                res.json({success: true , msg : 'La etiqueta se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminaretiqueta = function(req, res){
    schema_TablaEtiquetas.findByIdAndRemove(req.body.id_etiqueta,
        function(error){
            if(error){
                res.json({error: false ,msg: 'No se pudo eliminar la etiqueta '});
            }else{
                res.json({success: true ,msg: 'La etiqueta se eliminó con éxito'}); 
            }
        }
    )
};