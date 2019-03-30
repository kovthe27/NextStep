'use strict';
const model_RegistroPadre = require('./registrar_usuario.model');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'specta.grupo@gmail.com',
      pass: 'specta123'
    }
});

module.exports.registrar_Padre = (req, res) =>{
    let registro_Padre = new model_RegistroPadre(
        {
            nombreUsuario: req.body.nombreUsuario,
            apellidoUsuario: req.body.apellidoUsuario,
            seg_ApellidoUsuario: req.body.seg_ApellidoUsuario,
            idUsuario: req.body.idUsuario,
            nacionUsuario: req.body.nacionUsuario,
            direccionUsuario: req.body.direccionUsuario,
            emailUsuario: req.body.emailUsuario,
            telUsuario: req.body.telUsuario,
            cantHijos: req.body.cantHijos,
            fotoUsuario: req.body.fotoUsuario,
            provinciaUsuario: req.body.provinciaUsuario,
            cantonUsuario: req.body.cantonUsuario,
            distritoUsuario: req.body.distritoUsuario,
            contrasenaUsuario: GeneratedGui(),
            estadoUsuario: req.body.estadoUsuario,
            tipo: req.body.tipo,
            registroCompletado:req.body.registroCompletado
        }
    );
    
    registro_Padre.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo registrar su usuario, ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'specta.grupo@gmail.com',
                    to: registro_Padre.emailUsuario,
                    subject: 'Código de inicio de sesión Next Step',
                    html: `<h1 style="color:#6F1E51;">Saludos ${registro_Padre.nombreUsuario} </h1>
                    <p>Bienvenido(a) a Next Steps!</p>
                    <p>Este es tu código temporal ${registro_Padre.contrasenaUsuario}</p>
                    <p>Ingresa a la aplicación y digita el código temporal al iniciar sesión</p>
                    `
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
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

// GUI - generated User Identifier
function GeneratedGui(){
    var min=0; 
    var max=9;  
    var guiLen = 6;
    var generatedGui = "";
    for(var i=0; i<guiLen; i++){
        generatedGui += parseInt(Math.random() * (max - min) + min);
    }
    return generatedGui;
}

module.exports.actualizarcontrasena_Padre = (req, res) => {
    model_RegistroPadre.findOneAndUpdate(
        {emailUsuario:req.body.email}, 
        {contrasenaUsuario:req.body.contrasena, registroCompletado:true},
        {new:true}, 
        function(error, usuarioActualizado){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo actualizar la contraseña`
                    }
                )
            }else {
                res.json(
                    {
                        success : true,
                        msg : `Contraseña ha sido actualizada`,
                        usuario: usuarioActualizado
                    }
                )
            }
    });
}


module.exports.listar_TodosPadres = (req ,res) =>{
    model_RegistroPadre.find().then(
        function(padres){
            res.send(padres)
        }

    )
};
