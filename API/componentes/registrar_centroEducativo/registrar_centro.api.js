'use strict';
const model_RegistroCentro = require('./registrar_centro.model');
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

module.exports.registrar_Centro = (req, res) =>{
    let registro_Centro = new model_RegistroCentro(
        {
            nombreCentro: req.body.nombreCentro,
            nombreComercial: req.body.nombreComercial,
            cedJuridica: req.body.cedJuridica,
            provinciaCentro: req.body.provinciaCentro,
            cantonCentro: req.body.cantonCentro,
            distritoCentro: req.body.distritoCentro,
            direccionCentro: req.body.direccionCentro,
            emailCentro: req.body.emailCentro,
            contrasenaCentro: GeneratedGui(),
            telCentro: req.body.telCentro,
            faxCentro: req.body.faxCentro,
            fotoCentro: req.body.fotoCentro,
            sitioWeb: req.body.sitioWeb,
            tipoCentro: req.body.tipoCentro,
            gradoAcademico: req.body.gradoAcademico,
            annoFundCentro: req.body.annoFundCentro,
            referenciaHistorica: req.body.referenciaHistorica,
            archivosCentro: req.body.archivosCentro
        }
    );
    
    registro_Centro.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo registrar el centro educativo, ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'specta.grupo@gmail.com',
                    to: registro_Centro.emailCentro,
                    subject: 'Código de inicio de sesión Next Step',
                    html: `<h1 style="color:#6F1E51;">Saludos ${registro_Centro.nombreCentro} </h1>
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
                        msg : `Se registró el centro educativo de forma correcta`
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


module.exports.listar_TodosCentros = (req ,res) =>{
    model_RegistroCentro.find().then(
        function(centros){
            if(centros.length > 0){
                res.json(
                    {
                        success: true,
                        centros: centros
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        centros: 'No se encontraron centros registrados'
                    }
                )
            }
        }

    )
};
