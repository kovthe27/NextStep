'use strict';

let consultarUsuariosAdmin = () =>{
    let lista_utilesAdmin = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_padre",
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
}

let buscarUsuario = (pID) =>{
  let usuario = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_usuario",
    method: "POST",
    data: {
      id_usuario: pID
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    usuario = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return usuario;
}