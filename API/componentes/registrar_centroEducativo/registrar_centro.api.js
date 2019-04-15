'use strict';
const model_RegistroCentro = require('./registrar_centro.model');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'specta.grupo@gmail.com',
      pass: 'specta123'
    }
});

function fecha(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;
    return fecha;
}

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
            archivosCentro: req.body.archivosCentro,
            registroCompletado: false,
            estado: "Pendiente",
            fechaRegistro: fecha()
        }
    );
    
    registro_Centro.save(
        function(error, centro){
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
                                                      Saludos ${registro_Centro.nombreCentro}
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" valign="middle" style="padding:16px 24px 12px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:18px;font-weight:bold;line-height:20px;color:#000000;vertical-align:middle;">
                                                        <p>Bienvenido(a) a Next Steps!</p>
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
                                                      <span>Este es tu código temporal 
                                                      ${registro_Centro.contrasenaCentro}</span>
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                    <td align="center" valign="middle" style="padding:16px 24px 12px;font-family:-apple-system,Calibri,Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;color:#7d7d7d;vertical-align:middle;">
                                                      <p>Ingresa a la aplicación y digita el código temporal al iniciar sesión</p>
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
                                                      <a style="font-size: 16px;color:#ffffff;text-decoration:none;" id="" href="http://localhost:3000/public/login.html">Ir a la aplicación</a>
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
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                res.json(
                    {
                        success : true,
                        centro : centro,
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

module.exports.actualizarcontrasena_Centro = (req, res) => {
    model_RegistroCentro.findOneAndUpdate(
        {emailCentro:req.body.email}, 
        {contrasenaCentro:req.body.contrasena, registroCompletado:true},
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

module.exports.listar_TodosCentros = (req ,res) =>{
    model_RegistroCentro.find().then(
        function(centros){
            res.send(centros)
        });
};

module.exports.CambiarEstado = function(req, res){
   
  model_RegistroCentro.findByIdAndUpdate(req.body.id_centro, { $set: {estado : req.body.estado} },
      // model_noticia.findByIdAndUpdate(req.body.id_noticia, { $set:{descripcion:req.body.descripcion}},
      function (error, noticia){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar el estado'});
          }else{
              res.json({success: true , msg : 'El estado se actualizó con éxito'}
              
              );

          }
      }
  
  );
}

module.exports.buscar_centro = (req ,res) => {
  model_RegistroCentro.find(
   {cedJuridica: req.body.cedJuridica}
  ).then (
    function(centro){
      res.send(centro);
    }
  );
}

module.exports.actualizar_centro = function(req, res){
  model_RegistroCentro.findByIdAndUpdate(req.body.id, { $set: req.body },
      function (error){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar el centro'});
          }else{
              res.json({success: true , msg : 'El centro se actualizó con éxito'});
          }
      }
  
  );
}

module.exports.eliminar_centro = function(req, res){
  model_RegistroCentro.findByIdAndRemove(req.body.id,
      function(error){
          if(error){
              res.json({success: false ,msg: 'No se pudo eliminar la cuenta'});
          }else{
              res.json({success: true ,msg: 'La cuenta se eliminó con éxito'}); 
          }
      }
  )
};