'use strict';
const model_cita = require('./registrar_cita.model');
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

module.exports.registrar_cita = (req, res) => {
    let cita_nueva = new model_cita({
        cedulaJuridica: req.body.cedulaJuridica,
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        hora: req.body.hora,
        correo: req.body.correo
    });
    console.log(cita_nueva);

    cita_nueva.save(function (error) {
        if (error) {
            res.json({
                success: false,
                msg: `No se pudo guardar la cita, por favor vuelva a intentarlo`
            });

        } else {
            res.json({
                success: true,
                msg: `La cita fue creada con éxito`
            });
        };
    });
};

module.exports.consultar_cita = function(req, res) {
    model_cita.find().then(
        function (cita) {
            res.send(cita)
        });
};


module.exports.enviar_MailCita = function(req, res) {
    let mailOptions = {
        from: 'specta.grupo@gmail.com',
        to: req.body.usuario,
        subject: 'Cita denegada',
        html: `<table class="w100m" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="background-color:#fff;">
            <table class="w100m" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="background-color:#282b29;">
                          <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td align="center">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                  <tr>
                                    <td align="center">
                                      <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tr>
                                          <td align="center" valign="middle" style="padding:0 24px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:12px;color:#fff;">
                                              <img src="http://img.fenixzone.net/i/a12RvZL.png" width=150>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="background-color:#fff;">
            <table class="w100m" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="background-color:#fff;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                  <td align="center" style="padding-bottom:5px;">
                                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                      <tr>
                                        <td align="center" valign="middle" style="padding:16px 24px 0;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:20px;color:#54B56B;font-weight:bold;">
                                          Saludos!
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td align="center" style="background-color:#fff;">
            <table class="w100m" width="600" align="center" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" style="background-color:#fff;">
                        <table width="100%" align="center" border="0" cellspacing="0" cellpadding="0">
                          <tr>
                            <td align="center">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                                <tr>
                                  <td align="center" style="padding-bottom:5px;">
                                    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                      <tr>
                                        <td align="center" valign="middle" style="padding:16px 24px 12px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#7d7d7d;vertical-align:middle;">
                                          <span>La cita que tenía agendada con el centro educativo ha sido denegada .</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="middle" style="padding:16px 24px 12px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#7d7d7d;vertical-align:middle;">
                                          <span>La persona encargada estará fuera del centro, por lo cual le solicitamos agendar de nuevo su cita.</span>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td align="center" valign="top" style="padding: 6px 0 16px 0">
                                    <table class="email-cta" width="52%" style="margin-bottom: 5px;" cellpadding="0" cellspacing="0" border="0">
                                      <tr>
                                        <td align="center" style="background-color:#00b96b;padding: 18px 16px;font-size: 16px;font-weight: bold;font-family:Helvetica, sans-serif;">
                                          <a style="font-size: 16px;color:#ffffff;text-decoration:none;" id="" href="http://localhost:3000/public/landing_page.html">Ir a la aplicación</a>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
        `
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.json({
                success: false,
                msg: `El correo electrónico no fue enviado`
            });
        } else {
            res.json({
                success: true,
                msg: `El correo electrónico fue enviado con éxito`
            });
        }
      });
      
};
