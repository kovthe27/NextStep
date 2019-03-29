'use strict';

let pdfUrl = '';

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});

    // Upload button
    let uploadButton = $('#btnSeleccionarBoletin');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
            //  console.log(id);
            
            pdfUrl = processImage(id);
            // console.log(pdfUrl);

            pdfUrl = pdfUrl.replace('file', 'http');
            document.querySelector('#pdfBoletin').href = pdfUrl;
            return pdfUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}



let registrar_boletin = (pcedulaJuridica, pboletin, pnombre) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_boletin",
      method: "POST",
      data: {
        cedulaJuridica: pcedulaJuridica,
        boletin: pboletin,
        nombre: pnombre
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'El boletín fue cargado',
        text: 'Muchas gracias'
      });
    });
    bitacora(pcedulaJuridica, "Boletín",  pcedulaJuridica +  "agregó boletín informativo");
  };
  


let consultar_boletin = () => {
    let lista_boletines = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_boletin",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_boletines = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_boletines;
      
    };
    
    