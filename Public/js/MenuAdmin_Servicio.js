'use strict';

let getUsuario = () => {
    let usuario;
    usuario = JSON.parse(localStorage.getItem('cliente'));
    return usuario;
}

let getNombreUsuario = () => {
    let nombre;
//Conectar al api
    return nombre;
}

let getApeliidoUsuario = () =>{
    let apellido;
//Conectar al api
    return apellido;
}

let consultarListaMenuAdmin = () => {
    let listaUsuarios = [];

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
        listaUsuarios = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return listaUsuarios;
}