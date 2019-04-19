'use strict';
const model_servicio = require('./registrar_servicio.model');

module.exports.registrar_servicio = (req, res) => {
    let servicio_nuevo = new model_servicio({
        cedulaJuridica: req.body.cedulaJuridica,
        imagen: req.body.imagen,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: 'activo'
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



module.exports.buscar_servicio = (req, res) =>{
    model_servicio.find(
        {_id :req.body.id_servicio}
    ) .then(
        function(servicio){
            res.send (servicio)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    model_servicio.findByIdAndUpdate(req.body.id_servicio, { $set: req.body },
        function (error, servicio){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el servicio'});
            }else{
                res.json({success: true , msg : 'El servicio se actualizó con éxito'}
                
                );

            }
        }
    
    );
}


module.exports.eliminar_servicio = function(req, res){
    model_servicio.findByIdAndRemove(req.body.id_servicio,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el servicio '});
            }else{
                res.json({success: true ,msg: 'El servicio se eliminó con éxito'}); 
            }
        }
    )
};


