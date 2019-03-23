'use strict';
const model_RegistroContacto = require('./registrar_contacto.model');


module.exports.registrar_Contacto = (req, res) =>{
    let registro_Contacto = new model_RegistroContacto(
        {
            nombreEncargado: req.body.nombreUsuario,
            idEncargado: req.body.idEncargado,
            dptoEncargado: req.body.dptoEncargado,
            telEncargado: req.body.telEncargado,
            extEncargado: req.body.extEncargado,
            emailEncargado: req.body.emailEncargado,
            fotoEncargado: req.body.fotoEncargado
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
        function(contactos){
            if(contactos.length > 0){
                res.json(
                    {
                        success: true,
                        contactos: contactos
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        contactos: 'No se encontraron contactos registrados'
                    }
                )
            }
        }

    )
};
