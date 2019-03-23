'use strict';
const model_RegistroPadre = require('./registrar_usuario.model');
const model_RegistroCentro = require('./registrar_usuario.model');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
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
            contrasenaUsuario: '1234',
            estadoUsuario:  'activo' 
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
                    <p>Bienvenido a Next Steps!</p>
                    <p>Este es tu código temporal ${GeneratedGui()}</p>
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

//GUI - generated User Identifier
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

