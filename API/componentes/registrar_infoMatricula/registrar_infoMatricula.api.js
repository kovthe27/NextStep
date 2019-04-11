'use strict';
const model_infoMatricula = require('./registrar_infoMatricula.model');

module.exports.registrar_infoMatricula = (req, res) => {
    let infoMatricula_nuevo = new model_infoMatricula({
        cedulaJuridica: req.body.cedulaJuridica,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        estado: 'activo'
    });
    // console.log(infoMatricula_nuevo);

    infoMatricula_nuevo.save(function (error) {
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

module.exports.consultar_infoMatricula = function(req, res) {
    model_infoMatricula.find().then(
        function (infoMatricula) {
            res.send(infoMatricula)
        });
};


module.exports.buscar_infoMatricula = (req, res) =>{
    model_infoMatricula.find(
        {_id :req.body.id_infoMatricula}
    ) .then(
        function(infoMatricula){
            res.send (infoMatricula)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    model_infoMatricula.findByIdAndUpdate(req.body.id_infoMatricula, { $set: req.body },
        function (error, infoMatricula){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la información de martrícula'});
            }else{
                res.json({success: true , msg : 'La información de martrícula se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminarInfoMatricula = function(req, res){
    model_infoMatricula.findByIdAndRemove(req.body.id_infoMatricula,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la noticia '});
            }else{
                res.json({success: true ,msg: 'La noticia se eliminó con éxito'}); 
            }
        }
    )
};

