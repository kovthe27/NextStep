'use strict';
const model_comentario = require('./registrar_comentarios.model');

module.exports.registrar_comentarios = (req, res) => {
    let comentario_nueva = new model_comentario({
        cedulaJuridica : req.body.cedulaJuridica,
        correoUsuario : req.body.correoUsuario,
        calificacion : req.body.calificacion,
        fecha : req.body.fecha,
        comentario: req.body.comentario,
        likes: req.body.likes
    });
    console.log(comentario_nueva);

    comentario_nueva.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el comentario, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El comentario fue creado con éxito`
            });
        };
    });
};

module.exports.consultar_comentarios = function(req, res) {
    model_comentario.find().then(
        function (comentario) {
            res.send(comentario)
        });
};

module.exports.buscar_comentarios = (req, res) =>{
    model_comentario.find(
        {_id :req.body.id_comentarios}
    ) .then(
        function(comentarios){
            res.send (comentarios)
        }
    )
};

module.exports.eliminar = function(req, res){
    model_comentario.findByIdAndRemove(req.body.id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo eliminar el comentario '});
            }else{
                res.json({success: true ,msg: 'El comentario se eliminó con éxito'}); 
            }
        }
    )
};