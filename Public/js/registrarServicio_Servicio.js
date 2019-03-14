'use strict';

let registrar_servicio = (pimagen, ptitulo, pdescripcion) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_servicio",
      method: "POST",
      data: {
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
        title: 'La actividad fue enviada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La actividad no pudo ser enviada',
        text: 'Por favor inténtelo de nuevo'
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
    
    