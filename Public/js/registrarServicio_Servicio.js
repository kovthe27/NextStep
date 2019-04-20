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



// actualizarImagen


let imagenUrl_act = '';

// $(function() {
//     $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});


//     let uploadButton = $('#btnActualizarImagen');


//     uploadButton.on('click', function(e){

//         cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
//         function(error, result) {
//             if(error) console.log(error);
       
//             let id = result[0].public_id;
//             imagenUrl_act = processImage(id);

//             imagenUrl_act = imagenUrl_act.replace('file', 'http');
//             document.querySelector('#imgFotoAct').src = imagenUrl_act;
//             return imagenUrl_act;
//         });
//     });
// })

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}




let registrar_servicio = (pCedulaJuridica, pimagen, ptitulo, pdescripcion, p_id) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_servicio",
      method: "POST",
      data: {
        cedulaJuridica: pCedulaJuridica,
        imagen: pimagen,
        titulo: ptitulo,
        descripcion: pdescripcion,
        _id: p_id
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
      
    });
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


    let buscar_servicio = (p_id) => {
      let servicio = [];

      let request = $.ajax({
        url: "http://localhost:4000/api/buscar_servicio",
        method: "POST",
        data: {
          id_servicio: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });

      request.done(function (res) {
        servicio = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });

    return servicio;
       
    }
    
  
  let actualizar_servicio = (pimagen, ptitulo, pdescripcion, p_id) =>{
      let request = $.ajax({
          url : 'http://localhost:4000/api/actualizar_servicio',
          method : "POST",
          data : {
            imagen: pimagen,
            titulo: ptitulo,
            descripcion: pdescripcion,
            id_servicio: p_id
          },
          dataType : "json",
          contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
      });
  
      request.done(function(res){
          swal.fire({
              type : 'success',
              title : 'Proceso realizado con éxito',
              text : res.msg
          });
  
      });
  
      request.fail(function(res){
          swal.fire({
              type : 'error',
              title : 'Proceso no realizado',
              text : res.msg
          });
  
      });
  
  };
    

  let eliminar_servicio = (p_id) => {
    let request = $.ajax({
      url : 'http://localhost:4000/api/eliminar_servicio',
      method : "POST",
      data : {
        id_servicio: p_id
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      swal({
          type : 'success',
          title : 'Proceso realizado con éxito',
          text : res.msg
      });

      window.location.reload();

  });

  request.fail(function(res){
      swal({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};
    