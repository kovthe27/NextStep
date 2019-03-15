'use strict';

let consultar_preguntaAdmin = () => {
  let lista_preguntaAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_preguntaAdmin",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    lista_preguntaAdmin = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return lista_preguntaAdmin;

};
