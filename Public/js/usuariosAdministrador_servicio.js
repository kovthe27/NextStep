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
    url: "http://localhost:4000/api/buscar_Padre",
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

let desactivar_usuario = (p_id) => {
  let request = $.ajax({
    url : 'http://localhost:4000/api/eliminar_padre',
    method : "POST",
    data : {
      id: p_id
    },
    dataType : "json",
    contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
});

request.done(function(res){
    swal({
        type : 'success',
        title : 'Proceso realizado con éxito',
        text : res.msg
    }).then(location.reload())

});

request.fail(function(res){
    swal({
        type : 'error',
        title : 'Proceso no realizado',
        text : res.msg
    }).then(location.reload())

});

};