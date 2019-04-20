'use strict';
const model_TablaPreguntasAdmin = require('./registrar_preguntas.model');

module.exports.registrar_PreguntaAdmin = (req, res) => {
    let pregunta_nuevo = new model_TablaPreguntasAdmin({
        numero: req.body.numero,
        pregunta: req.body.pregunta,
        respuesta: req.body.respuesta
    });
    console.log(pregunta_nuevo);

    pregunta_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la pregunta, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La pregunta fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_PreguntaAdmin = function(req, res) {
    model_TablaPreguntasAdmin.find().then(
        function (preguntaAdmin) {
            res.send(preguntaAdmin)
        });
};


module.exports.buscar_pregunta = (req, res) =>{
    model_TablaPreguntasAdmin.find(
        {_id :req.body.id_pregunta}
    ) .then(
        function(preguntaAdmin){
            res.send (preguntaAdmin)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    model_TablaPreguntasAdmin.findByIdAndUpdate(req.body.id_pregunta, { $set: req.body },
        // model_TablaPregunta.findByIdAndUpdate(req.body.id_pregunta, { $set:{descripcion:req.body.descripcion}},
        function (error, pregunta){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la pregunta'});
            }else{
                res.json({success: true , msg : 'La pregunta se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminarpregunta = function(req, res){
    model_TablaPreguntasAdmin.findByIdAndRemove(req.body.id_pregunta,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la pregunta '});
            }else{
                res.json({success: true ,msg: 'La pregunta se eliminó con éxito'}); 
            }
        }
    )
};


