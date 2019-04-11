'use strict';
const model_acercaNosotros = require('./registrar_acercaNosotros.model');

module.exports.registrar_acercaNosotros = (req, res) => {
    let acercaNosotros_nuevo = new model_acercaNosotros({
        cedulaJuridica: req.body.cedulaJuridica,
        descripcionCentro: req.body.descripcionCentro,
        ubicacion : req.body.ubicacion,
        encargado : req.body.encargado,
        correo : req.body.correo,
        telefono : req.body.telefono,
        facebook : req.body.facebook,
        instagram : req.body.instagram,
        twitter : req.body.twitter,
        pagina : req.body.pagina,
        estado: 'activo'
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

module.exports.consultar_acercaNosotros = function(req, res) {
    model_acercaNosotros.find().then(
        function (acercaNosotros) {
            res.send(acercaNosotros)
        });
};

module.exports.buscar_acercaNosotros = (req, res) =>{
    model_acercaNosotros.find(
        {_id :req.body.id_acercaNosotros}
    ) .then(
        function(acercaNosotros){
            res.send (acercaNosotros)
        }
    )
};

// Actualizar

module.exports.actualizar = function(req, res){
   
    model_acercaNosotros.findByIdAndUpdate(req.body.id_acercaNosotros, { $set: req.body },
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


