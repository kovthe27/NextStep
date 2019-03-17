'use strict';

let getNombreLista = () => {
    let nombre;
    nombre = JSON.parse(localStorage.getItem('ListaNombre'));
    return nombre;
}

let getLista = () => {

    let lista_utilesAdmin = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_utilesAdmin",
        method: "GET",
        data: {        },
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

let crearArticulo = (pcantidad, particulo, pdescripcion) => {
    let nivel=getNombreLista();
    let cedula = "MEPAdmin1"
    let listaActual = getLista();

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_utilesAdmin",
        method: "POST",
        data: {
          cedula: cedula,
          cantidad : pcantidad,
          tipo: particulo,
          descripcion: pdescripcion,
          nivel: nivel
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
      refrescarLista();
      crearLista();
      request.done(function (msg) {
        swal.fire({
          type: 'success',
          title: 'El articulo se agrego con exito',
          text: 'Muchas gracias'
        });
      });
    
      request.fail(function (jqXHR, textStatus) {
        swal.fire({
          type: 'error',
          title: 'El articulo no pudo ser agregado',
          text: 'Por favor inténtelo de nuevo'
        });
      });
      return true;
}