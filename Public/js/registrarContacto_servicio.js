'use strict';

// let imgUrl = '';

// $(function() {
//     // Configure Cloudinary
//     // with credentials available on
//     // your Cloudinary account dashboard
//     $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});

//     // Upload button
//     let uploadButton = $('#btnSeleccionarImagen');

//     // Upload button event
//     uploadButton.on('click', function(e){
//         // Initiate upload
//         cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
//         function(error, result) {
//             if(error) console.log(error);
//             // If NO error, log image data to console
//             let id = result[0].public_id;
//             //  console.log(id);
            
//             imgUrl = processImage(id);
//             // console.log(imagenUrl);

//             imgUrl = imgUrl.replace('file', 'http');
//             document.querySelector('#imgFoto').src = imgUrl;
//             return imgUrl;
//         });
//     });
// })

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}

//Registro Contacto

let registrar_Contacto = (pnombreEncargado, pidEncargado, pemailEncargado, pdptoEncargado, ptelEncargado, pextEncargado, pfotoEncargado, pcentroEducativoId, pcedJuridica) => {
  debugger;
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_contacto",
    method: "POST",
    data: {
        nombreEncargado: pnombreEncargado,
        idEncargado: pidEncargado,
        emailEncargado: pemailEncargado,
        dptoEncargado: pdptoEncargado,
        telEncargado: ptelEncargado,
        extEncargado: pextEncargado,
        fotoEncargado: pfotoEncargado,
        centroEducativoId : pcentroEducativoId,
        cedulaJuridica : pcedJuridica
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El centro educativo fue registrado',
      text: 'Le estaremos enviando un código de verificación a su correo electrónico para que pueda iniciar sesión',
      onClose: () => {
        window.location.href = "http://localhost:3000/public/login.html";
      }
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El contacto no fue registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_Contactos = () => {
  let lista_Contactos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_contacto",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_Contactos = res.registrar_Contacto;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_Contactos;
 
};
