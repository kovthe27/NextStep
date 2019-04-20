'use strict';
const model_RegistroContacto = require('./registrar_contacto.model');


module.exports.registrar_Contacto = (req, res) =>{
    let registro_Contacto = new model_RegistroContacto(
        {
            nombreEncargado: req.body.nombreEncargado,
            idEncargado: req.body.idEncargado,
            dptoEncargado: req.body.dptoEncargado,
            telEncargado: req.body.telEncargado,
            extEncargado: req.body.extEncargado,
            emailEncargado: req.body.emailEncargado,
            fotoEncargado: req.body.fotoEncargado,
            centroEducativoId: req.body.centroEducativoId,
            cedulaJuridica : req.body.cedulaJuridica
        }
    );
    
    registro_Contacto.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo registrar su contacto, ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró su contacto de forma correcta`
                    }
                )
            }
        }

    );

};


module.exports.listar_TodosContactos = (req ,res) =>{
    model_RegistroContacto.find().then(
        function (contactos) {
            res.send(contactos)
        });
};

module.exports.buscar_contacto = (req ,res) => {
    model_RegistroContacto.find(
     {cedulaJuridica: req.body.cedulaJuridica}
    ).then (
        function(contacto){
            res.send(contacto);
        }
    );
  }
  
  module.exports.actualizar_contacto = function(req, res){
    model_RegistroContacto.findByIdAndUpdate(req.body.id, { $set: req.body },
        function (error){
            if(error){
                res.json({success : false , msg : 'No se pudo actualizar el contacto'});
            }else{
                res.json({success: true , msg : 'El contacto se actualizó con éxito'});
            }
        }
    
    );
  }
