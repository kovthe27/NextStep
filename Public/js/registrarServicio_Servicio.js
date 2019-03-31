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



let registrar_servicio = (pCedulaJuridica, pimagen, ptitulo, pdescripcion) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_servicio",
      method: "POST",
      data: {
        cedulaJuridica: pCedulaJuridica,
        imagen: pimagen,
        titulo: ptitulo,
        descripcion: pdescripcion
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'El servicio fue registrado',
        text: 'Muchas gracias'
      });
      window.location.reload();
    });
  
    // request.fail(function (jqXHR, textStatus) {
    //   swal.fire({
    //     type: 'error',
    //     title: 'La actividad no pudo ser enviada',
    //     text: 'Por favor inténtelo de nuevo'
    //   });
    // });
    // bitacora(pCedulaJuridica, "Servicio", pcedulaJuridica + "Registró un servicio" );
  };
  


let consultar_servicio = () => {
    let lista_servicios = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_servicio",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_servicios = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_servicios;
      
    };
    
    