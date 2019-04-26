'use strict';
const model_calificaciones = require('./registrar_calificaciones.model');

module.exports.registrar_calificaciones= (req, res) => {
    let acercaNosotros_nuevo = new model_calificaciones({
        cedulaJuridica: req.body.cedulaJuridica,
        calificacion: req.body.calificacion,
        fecha : req.body.fecha,
    });

    acercaNosotros_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la información de matricula, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La información de matrícula fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_calificaciones= function(req, res) {
    model_calificaciones.find().then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};

module.exports.buscar_calificaciones= (req, res) =>{
    model_calificaciones.find(
        {_id :req.body.id_acercaNosotros}
    ) .then(
        function(acercaNosotros){
            res.send (acercaNosotros)
        }
    )
};

// Actualizar

module.exports.actualizar_calificaciones= function(req, res){
   
    model_calificaciones.findByIdAndUpdate(req.body.id_acercaNosotros, { $set: req.body },
        // model_acercaNosotros.findByIdAndUpdate(req.body.id_acercaNosotros, { $set:{descripcion:req.body.descripcion}},
        function (error, acercaNosotros){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la información'});
            }else{
                res.json({success: true , msg : 'La información se actualizó con éxito'}
                
                );

            }
        }
    
    );
}


module.exports.eliminarcalificacion = function(req, res){
    model_calificaciones.findByIdAndRemove(req.body.id_calificacion,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la calificación '});
            }else{
                res.json({success: true ,msg: 'La calificación se eliminó con éxito'}); 
            }
        }
    )
};

module.exports.consultar_calificacionesOrdenadas = function(req, res) {
    model_calificaciones.find().sort({calificacion: 'desc'}).then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};


module.exports.consultar_calificacionesAnno = function(req, res) {
    model_calificaciones.find().sort({fecha: 'asc'}).then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};

module.exports.consultar_calificacionesAnnodesc = function(req, res) {
    model_calificaciones.find().sort({fecha: 'desc'}).then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};

