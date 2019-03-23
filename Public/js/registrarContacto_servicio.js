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

//Registro Contacto

let registrar_Contacto = (pnombreEncargado, pidEncargado, pemailEncargado, pdptoEncargado, ptelEncargado, pextEncargado, pfotoEncargado) => {
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
        fotoEncargado: pfotoEncargado
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El contacto fue registrado'
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
