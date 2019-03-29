'use strict';

// Consultar lista
let mostrar_utilesAdministrador = () =>{
  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_listaUtiles",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
      lista_utilesAdmin = res;
    // console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    // console.log("fail");
  });

  return lista_utilesAdmin;
};

    

// lista de utiles


let getNombreListaLanding = () => {
  let nombre;
  nombre = JSON.parse(localStorage.getItem('ListaNombre'));
  return nombre;
}

let getListaLanding = () => {

  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_utilesAdmin",
    method: "GET",
    data: {},
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

let getListaTiposLanding = () => {
  let lista_tipos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_tipoArticulo",
    method: "GET",
    data: {},
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    lista_tipos = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return lista_tipos;
}