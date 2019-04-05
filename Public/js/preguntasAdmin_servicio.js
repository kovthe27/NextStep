'use strict';


//Consultar preguntas
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

//Registrar pregunta
let registrarPregunta = (pNumero, pPregunta, pRespuesta) => {

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_PreguntaAdmin",
    method: "POST",
    data: {
      numero: pNumero,
      pregunta: pPregunta,
      respuesta: pRespuesta
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La pregunta ha sido agregada',
      text: 'Muchas gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La pregunta no pudo ser agregada',
      text: 'Por favor inténtelo de nuevo'
    });
  });
  return true;
}
