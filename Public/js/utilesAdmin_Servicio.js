'use strict'

// claudinary
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

// Consultar lista
let consultar_utilesAdmin = () =>{
    let lista_utilesAdmin = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_listaUtiles",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        lista_utilesAdmin = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return lista_utilesAdmin;
};

// Registrar lista
let nuevaLista = (pcedula, pnombre, pfecha, p_id) => {

    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_listaUtiles",
      method: "POST",
      data: {
        cedula: pcedula,
        nombre : pnombre,
        creada: pfecha,
        visible: false,
        _id: p_id
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'La lista ha sido agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La lista no pudo ser agregada',
        text: 'Por favor inténtelo de nuevo'
      });
    });
    return true;
  }


  let buscar_listaUtiles = (p_id) => {
    let listaUtiles = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/buscar_listaUtiles",
      method: "POST",
      data: {
        id_listaUtiles: p_id
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async : false
    });

    request.done(function (res) {
      listaUtiles = res;
      console.log("success");
      
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });

  return listaUtiles;
     
  }
  

let actualizar_listaUtiles = (pnombre, p_id) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/actualizar_listaUtiles',
        method : "POST",
        data : {
          nombre: pnombre,
          id_listaUtiles: p_id
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

let eliminar_listaUtiles = (p_id) => {
  let request = $.ajax({
    url : 'http://localhost:4000/api/eliminar_listaUtiles',
    method : "POST",
    data : {
      id_listaUtiles: p_id
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

    document.querySelector('#actualizarLista').innerHTML= "";
    construirTabla();

});

request.fail(function(res){
    swal({
        type : 'error',
        title : 'Proceso no realizado',
        text : res.msg
    });

});

};

  