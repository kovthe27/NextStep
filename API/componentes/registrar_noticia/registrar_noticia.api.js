'use strict';
const model_noticia = require('./registrar_noticia.model');

module.exports.registrar_noticia = (req, res) => {
    let noticia_nueva = new model_noticia({
        cedulaJuridica : req.body.cedulaJuridica,
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        descripcion: req.body.descripcion,
        estado: 'activo'
    });
    console.log(noticia_nueva);

    noticia_nueva.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la noticia, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La noticia fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_noticia = function(req, res) {
    model_noticia.find().then(
        function (noticia) {
            res.send(noticia)
        });
};

module.exports.buscar_noticia = (req, res) =>{
    model_noticia.find(
        {_id :req.body.id_noticia}
    ) .then(
        function(noticia){
            res.send (noticia)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    model_noticia.findByIdAndUpdate(req.body.id_noticia, { $set: req.body },
        // model_noticia.findByIdAndUpdate(req.body.id_noticia, { $set:{descripcion:req.body.descripcion}},
        function (error, noticia){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar la noticia'});
            }else{
                res.json({success: true , msg : 'La noticia se actualizó con éxito'}
                
                );

            }
        }
    
    );
}

module.exports.eliminarNoticia = function(req, res){
    model_noticia.findByIdAndRemove(req.body.id_noticia,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar la noticia '});
            }else{
                res.json({success: true ,msg: 'La noticia se eliminó con éxito'}); 
            }
        }
    )
};

