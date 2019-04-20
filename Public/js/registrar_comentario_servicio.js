'use strict';

let registrar_comentarios = (pcedulaJuridica, pcorreoUsuario, pcalificacion, pfecha, pcomentario, plikes,  p_id ) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_comentarios",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        correoUsuario: pcorreoUsuario,
        calificacion: pcalificacion,
        fecha: pfecha,
        comentario: pcomentario,
        likes: plikes,
        _id: p_id
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
    // bitacora(pcorreoUsuario, "Comentario", pcorreoUsuario + "agregó un comentario a" + pcedulaJuridica);
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





    let consultar_usuarios = ()=>{
      let lista_usuarios = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_padre",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_usuarios = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        // console.log("fail");
      });
    
      return lista_usuarios;
      
    };


    let getFotoUsuario = (correo) => {
      let foto = "";
      let lista = consultar_usuarios();

      for (let i = 0; i < lista.length; i++ ) {
        if (lista[i].emailUsuario == correo){
          foto = lista[i].fotoUsuario;
        }
      };

      return foto;
    }

    let getNombreUsuario = (correo) => {
      let nombre = "";
      let lista = consultar_usuarios();

      for (let i = 0; i < lista.length; i++ ) {
        if (lista[i].emailUsuario == correo){
          nombre = lista[i].nombreUsuario;
        }
      };

      return nombre;
    }

    let buscar_comentarios = (p_id) => {
      let comentarios = [];

      let request = $.ajax({
        url: "http://localhost:4000/api/buscar_comentarios",
        method: "POST",
        data: {
          id_comentarios: p_id
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });

      request.done(function (res) {
        comentarios = res;
        console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });

    return comentarios;
       
    }


  //   let eliminar = (pid) => {
  //     let request = $.ajax({
  //         url : 'http://localhost:4000/api/eliminar_comentario',
  //         method : "POST",
  //         data : {
  //             id : pid,
  //         },
  //         dataType : "json",
  //         contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  //     });
  
  //     request.done(function(res){
  //         if(res.success){
  //             swal.fire({
  //                 type : 'success',
  //                 title : 'Proceso realizado con éxito',
  //                 text : res.msg
  //             });
  //         }else{
  //             swal.fire({
  //                 type : 'Error',
  //                 title : 'Proceso realizado sin éxito',
  //                 text : res.msg
  //             });
  //         }
          
  
  //     });
  
  //     request.fail(function(res){
  //         swal.fire({
  //             type : 'error',
  //             title : 'Proceso no realizado',
  //             text : res.msg
  //         });
  
  //     });
  // };