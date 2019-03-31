'use strict';
const model_boletin = require('./registrar_boletin.model');
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

module.exports.registrar_boletin = (req, res) => {
    let boletin_nuevo = new model_boletin({
        cedulaJuridica: req.body.cedulaJuridica,
        boletin: req.body.boletin,
        nombre: req.body.nombre
    });
    console.log(boletin_nuevo);

    boletin_nuevo.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar el boletin, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `El boletin fue guardado con éxito`
            });
        };
    });
};

module.exports.consultar_boletin = function(req, res) {
    model_boletin.find().then(
        function (boletin) {
            res.send(boletin)
        });
};


module.exports.enviar_MailBoletin = function(req, res) {
    let mailOptions = {
        from: 'specta.grupo@gmail.com',
        to: req.body.usuario,
        subject: 'Boletín Informativo',
        html: `<h1 style="color:#6F1E51;">Saludos!</h1>
        <p>Este es el boletín informativo del centro educativo ${req.body.boletin}</p>
        `
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.json({
                success: false,
                msg: `El boletin no fue enviado`
            });
        } else {
            res.json({
                success: true,
                msg: `El boletin fue enviado con éxito`
            });
        }
      });
      
};
