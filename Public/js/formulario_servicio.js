'use strict';

let agregarItem = (pcedulaJuridica, pnombreFormulario, pinputID, pinputSelect, pperiodo) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_formulario",
        method: "POST",
        data: {
          cedulaJuridica: pcedulaJuridica,
          nombre: pnombreFormulario,
          item: pinputID,
          select: pinputSelect,
          periodo: pperiodo
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
    
      request.done(function (msg) {
        swal.fire({
          type: 'success',
          title: 'El formulario se guardo con exito',
          text: 'Muchas gracias'
        });
      });
    
      request.fail(function (jqXHR, textStatus) {
        swal.fire({
          type: 'error',
          title: 'El formulario no fue guardado',
          text: 'Por favor inténtelo de nuevo'
        });
      });
}

let consultar_formulario = () =>{
  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_formulario",
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
};