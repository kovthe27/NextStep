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
            registroCompletado:req.body.registroCompletado,
            estadoCuenta: 'Activo'
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
                                                      Saludos ${registro_Padre.nombreUsuario}
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
                                                      <span>Este es tu código temporal ${registro_Padre.contrasenaUsuario}</span>
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


module.exports.buscar_Padre = (req ,res) => {
  model_RegistroPadre.find(
   {"_id": req.body.id_Usuario}
  ).then (
    function(padre) {
      res.json(
        {
            success : false,
            msg : `No se pudo actualizar la contraseña`, 
            padre : padre
        }
    )
    }
  )
}

module.exports.actualizar_padre = function(req, res){
  model_RegistroPadre.findByIdAndUpdate(req.body.id, { $set: req.body },
      function (error){
          if(error){
              res.json({success : false , msg : 'No se pudo actualizar el registro'});
          }else{
              res.json({success: true , msg : 'El registro se actualizó con éxito'});
          }
      }
  
  );
}

