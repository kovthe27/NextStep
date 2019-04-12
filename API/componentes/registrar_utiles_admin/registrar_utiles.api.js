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


module.exports.buscar_utilesAdmin = (req, res) =>{
    schema_TablaUtilesAdmin.find(
        {_id :req.body.id_utilesAdmin}
    ) .then(
        function(utilesAdmin){
            res.send (utilesAdmin)
        }
    )
};

// Actualizar

module.exports.actualizarLista = function(req, res){
   
    schema_TablaUtilesAdmin.findByIdAndUpdate(req.body.id_utilesAdmin, { $set: req.body },
        // schema_TablautilesAdmin.findByIdAndUpdate(req.body.id_utilesAdmin, { $set:{descripcion:req.body.descripcion}},
        function (error, utilesAdmin){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la lista de útiles'});
            }else{
                res.json({success: true , msg : 'La lista de útiles se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminarutilesAdmin = function(req, res){
    schema_TablaUtilesAdmin.findByIdAndRemove(req.body.id_utilesAdmin,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la lista de útiles'});
            }else{
                res.json({success: true ,msg: 'La lista de útiles se eliminó con éxito'}); 
            }
        }
    )
};


