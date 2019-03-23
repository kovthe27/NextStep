'use strict';

let registrar_noticia = (pcedulaJuridica, ptitulo, pfecha, pdescripcion) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_noticia",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        titulo: ptitulo,
        fecha: pfecha,
        descripcion: pdescripcion
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'La noticia fue agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La noticia no pudo ser registrada',
        text: 'Por favor inténtelo de nuevo'
      });
    });
  };
  


let consultar_noticia = () => {
    let lista_noticias = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_noticia",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_noticias = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_noticias;
      
    };
    
    