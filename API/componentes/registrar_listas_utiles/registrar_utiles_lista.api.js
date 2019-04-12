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



module.exports.buscar_listaUtiles = (req, res) =>{
    schema_TablaListaUtiles.find(
        {_id :req.body.id_listaUtiles}
    ) .then(
        function(listaUtiles){
            res.send (listaUtiles)
        }
    )
};

// Actualizar

module.exports.actualizarLista = function(req, res){
   
    schema_TablaListaUtiles.findByIdAndUpdate(req.body.id_listaUtiles, { $set: req.body },
        // schema_TablaListaUtiles.findByIdAndUpdate(req.body.id_listaUtiles, { $set:{descripcion:req.body.descripcion}},
        function (error, listaUtiles){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la lista de útiles'});
            }else{
                res.json({success: true , msg : 'La lista de útiles se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminarListaUtiles = function(req, res){
    schema_TablaListaUtiles.findByIdAndRemove(req.body.id_listaUtiles,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la lista de útiles'});
            }else{
                res.json({success: true ,msg: 'La lista de útiles se eliminó con éxito'}); 
            }
        }
    )
};

