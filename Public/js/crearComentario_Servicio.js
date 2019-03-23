'use strict';

let crear_comentario = (prate,pcedulaJuridica, pcorreo ,pnombre, pfecha, pcomentario, plikes) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/crear_comentario",
      method: "POST",
      data: {
        rate : prate,
        cedulaJuridica: pcedulaJuridica,
        correo: pcorreo,
        nombre: pnombre,
        fecha: pfecha,
        comentario: pcomentario,
        likes: plikes
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal({
        type: 'success',
        title: 'El comentario fue registrado',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal({
        type: 'error',
        title: 'El comentario no pudo ser registrado',
        text: 'Por favor inténtelo de nuevo'
      });
    });
  };
  


let consultar_comentario = () => {
    let lista_comentarios = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_comentario",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_comentarios = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_comentarios;
      
    };
    
    