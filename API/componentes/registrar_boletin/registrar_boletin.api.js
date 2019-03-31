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
                                          <span>Gracias por su interés y solicitar más información del centro educativo.</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="middle" style="padding:16px 24px 12px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#7d7d7d;vertical-align:middle;">
                                          <span>A continuación le adjuntamos el boletín con la información requerida ${req.body.boletin}</span>
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
