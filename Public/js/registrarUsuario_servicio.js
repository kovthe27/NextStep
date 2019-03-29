'use strict';

let imagenUrl = '';

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
            //  console.log(id);
            
            imagenUrl = processImage(id);
            // console.log(imagenUrl);

            imagenUrl = imagenUrl.replace('file', 'http');
            document.querySelector('#imgFoto').src = imagenUrl;
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}

//Registro Padre

let registrar_Padre = (pnombrePadre, papellidoPadre, papellidoDosPadre, pidPadre, pnacionPadre, pdireccionPadre, pemailPadre, ptelPadre, pcantHijos, pfotoPadre, pprovinciaPadre, pcantonPadre, pdistritoPadre) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_padre",
    method: "POST",
    data: {
        nombreUsuario: pnombrePadre,
        apellidoUsuario: papellidoPadre,
        seg_ApellidoUsuario: papellidoDosPadre,
        idUsuario: pidPadre,
        nacionUsuario: pnacionPadre,
        direccionUsuario: pdireccionPadre,
        emailUsuario: pemailPadre,
        telUsuario: ptelPadre,
        cantHijos: pcantHijos,
        fotoUsuario: pfotoPadre,
        provinciaUsuario : pprovinciaPadre,
        cantonUsuario : pcantonPadre,
        distritoUsuario : pdistritoPadre
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El usuario fue registrado',
      text: 'Le estaremos enviando un código de verificación a su coreo electrónico para que pueda iniciar sesión',
      onClose: () => {
        window.location.href = "http://localhost:3000/public/login.html";
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El usuario no fue registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_Padres = () => {
  let lista_Padres = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_padre",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_Padres = res.registrar_Padre;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_Padres;
 
};
