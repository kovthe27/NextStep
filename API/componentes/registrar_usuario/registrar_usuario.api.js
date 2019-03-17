'use strict';
const model_RegistroPadre = require('./registro_usuario.model');

module.exports.registrar_Padre = (req, res) =>{
    let registro_Padre = new model_RegistroPadre(
        {
            nombre: req.body.nombre,
            id: req.body.id,
            nacionalidad: req.body.nacionalidad,
            direccion: req.body.direccion,
            email: req.body.email,
            telefono: req.body.telefono,
            cantHijos: req.body.cantHijos,
            foto: req.body.foto
        }
    );
    
    padre_Nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo registrar su usuario, ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                res.json(
                    {
                        success : true,
                        msg : `Se registró su usuario de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_TodosPadres = (req ,res) =>{
    model_RegistroPadre.find().then(
        function(padres){
            if(padres.length > 0){
                res.json(
                    {
                        success: true,
                        padres: padres
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        padres: 'No se encontraron padres registrados'
                    }
                )
            }
        }

    )
};