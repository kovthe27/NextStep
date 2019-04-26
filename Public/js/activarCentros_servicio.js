'use strict';

let consultar_listaCentrosAdmin = () => {
    let lista_etiquetasCentro = [];
  
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
      lista_etiquetasCentro = res;
      // console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      // console.log("fail");
    });
  
    return lista_etiquetasCentro; 
  };


  let actualizar_estado = (p_id, pestado) =>{
    let request = $.ajax({
        url : 'http://localhost:4000/api/cambiarEstado_centro',
        method : "POST",
        data : {
          id_centro: p_id,
          estado: pestado
        },
        dataType : "json",
        contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
    });

    request.done(function(res){
        swal({
            type : 'success',
            title : 'Proceso realizado con éxito',
            text : res.msg,
        }).then(function() {
          location.reload();
      })
    });

    request.fail(function(res){
        swal({
            type : 'error',
            title : 'Proceso no realizado',
            text : res.msg
        });

    });
};