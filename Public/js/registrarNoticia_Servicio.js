'use strict';

let registrar_noticia = (pcedulaJuridica, ptitulo, pfecha, pdescripcion, p_id) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_noticia",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        titulo: ptitulo,
        fecha: pfecha,
        descripcion: pdescripcion,
        _id: p_id
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal({
        type: 'success',
        title: 'La noticia fue agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal({
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


    let buscar_noticia = (p_id) => {
      let noticia = [];

      let request = $.ajax({
        url: "http://localhost:4000/api/buscar_noticia",
        method: "POST",
        data: {
          id_noticia: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });

      request.done(function (res) {
        noticia = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });

    return noticia;
       
    }
    
  
  let actualizar_noticia = (ptitulo, pfecha, pdescripcion, p_id) =>{
      let request = $.ajax({
          url : 'http://localhost:4000/api/actualizar_noticia',
          method : "POST",
          data : {
            titulo: ptitulo,
            fecha: pfecha,
            descripcion: pdescripcion,
            id_noticia: p_id
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

  let eliminar_noticia = (p_id) => {
    let request = $.ajax({
      url : 'http://localhost:4000/api/eliminar_noticia',
      method : "POST",
      data : {
        id_noticia: p_id
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

      document.querySelector('#cargaNoticias').innerHTML= "";
      mostrar_datosNoticia();

  });

  request.fail(function(res){
      swal({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};
