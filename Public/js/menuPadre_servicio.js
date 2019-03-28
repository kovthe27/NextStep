'use strcit';

let getUsuario = () => {
    let usuario;
    usuario = JSON.parse(localStorage.getItem('cliente'));
    return usuario;
}

let consultarListaMenuPadre = () => {
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

let consultarListaCentrosPadres = () => {
    let listaCentrosPadres = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_centro",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        listaCentrosPadres = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return listaCentrosPadres;
}
