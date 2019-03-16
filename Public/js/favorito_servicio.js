'use strict';

let registrar_servicio = (pcedulaJuridica, pcorreo) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_favorito",
      method: "POST",
      data: {
        cedulaJuridica: pcedulaJuridica,
        correo: pcorreo,
        
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal({
        type: 'success',
        title: 'El centro educativo marcado como favorito a sido agregado',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal({
        type: 'error',
        title: 'El centro educativo marcado como favorito a sido agregado',
        text: 'Por favor inténtelo de nuevo'
      });
    });
  };
  


let consultar_favoritos = () => {
    let lista_favoritos = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_favoritos",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_favoritos = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_favoritos;
      
    };
    