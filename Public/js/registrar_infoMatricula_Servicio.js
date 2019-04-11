'use strict';

let registrar_infoMatricula = (pcedulaJuridica, ptitulo, pdescripcion, p_id) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_infoMatricula",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
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
    // bitacora(pcedulaJuridica, + "Matrícula",  pcedulaJuridica +  "agregó información de matrícula");
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


    let buscar_infoMatricula = (p_id) => {
      let infoMatricula = [];

      let request = $.ajax({
        url: "http://localhost:4000/api/buscar_infoMatricula",
        method: "POST",
        data: {
          id_infoMatricula: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });

      request.done(function (res) {
        infoMatricula = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });

    return infoMatricula;
       
    }
    
  
  let actualizar_infoMatricula = (ptitulo, pdescripcion, p_id) =>{
      let request = $.ajax({
          url : 'http://localhost:4000/api/actualizar_infoMatricula',
          method : "POST",
          data : {
            titulo: ptitulo,
            descripcion: pdescripcion,
            id_infoMatricula: p_id
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


  let eliminar_infoMatricula = (p_id) => {
    let request = $.ajax({
      url : 'http://localhost:4000/api/eliminar_infoMatricula',
      method : "POST",
      data : {
        id_infoMatricula: p_id
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

      document.querySelector('#cardMatricula').innerHTML= "";
      mostrar_datosMatricula();

  });

  request.fail(function(res){
      swal({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};