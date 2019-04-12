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



let buscar_pregunta = (p_id) => {
  let pregunta = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_pregunta",
    method: "POST",
    data: {
      id_pregunta: p_id
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    pregunta = res;
    console.log("success");
    
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

return pregunta;
   
}


let actualizar_pregunta = (ppregunta, prespuesta, p_id) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_pregunta',
      method : "POST",
      data : {
        pregunta: ppregunta,
        respuesta: prespuesta,
        id_pregunta: p_id
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      swal.fire({
          type : 'success',
          title : 'Proceso realizado con éxito',
          text : res.msg
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};

let eliminar_pregunta = (p_id) => {
let request = $.ajax({
  url : 'http://localhost:4000/api/eliminar_pregunta',
  method : "POST",
  data : {
    id_pregunta: p_id
  },
  dataType : "json",
  contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
});

request.done(function(res){
  swal({
      type : 'success',
      title : 'Proceso realizado con éxito',
      text : res.msg
  });

  document.querySelector('#actualizarpregunta').innerHTML= "";
  window.location.reload();

});

request.fail(function(res){
  swal({
      type : 'error',
      title : 'Proceso no realizado',
      text : res.msg
  });

});

};


