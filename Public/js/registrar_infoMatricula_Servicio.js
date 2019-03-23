'use strict';

let registrar_infoMatricula = (pcedulaJuridica, ptitulo, pdescripcion) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_infoMatricula",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        titulo: ptitulo,
        descripcion: pdescripcion
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'La información de matrícula fue agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La información de matrícula no pudo ser registrada',
        text: 'Por favor inténtelo de nuevo'
      });
    });
  };
  


let consultar_infoMatricula= () => {
    let lista_infoMatricula = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_infoMatricula",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_infoMatricula = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        // console.log("fail");
      });
    
      return lista_infoMatricula;
      
    };