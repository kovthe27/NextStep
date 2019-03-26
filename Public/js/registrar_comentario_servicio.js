'use strict';

let registrar_comentarios = (pcedulaJuridica, pnombreUsuario, pfotoUsuario,  pcorreoUsuario, pcalificacion, pfecha, pcomentario ) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_comentarios",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        nombreUsuario: pnombreUsuario,
        fotoUsuario: pfotoUsuario,
        correoUsuario: pcorreoUsuario,
        calificacion: pcalificacion,
        fecha: pfecha,
        comentario: pcomentario,

      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'El comentario fue agregado',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'El comentario no pudo ser registrado',
        text: 'Por favor inténtelo de nuevo'
      });
    });
  };
  


let consultar_comentarios= () => {
    let lista_comentario = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_comentarios",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_comentario = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        // console.log("fail");
      });
    
      return lista_comentario;
      
    };