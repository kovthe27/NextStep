'use strict';
'use strict';

let registrar_etiquetasCentro = (pcedulajuridica, petiqueta1, petiqueta2, petiqueta3, petiqueta4) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_etiquetasCentro",
    method: "POST",
    data: {
      cedulaJuridica: pcedulajuridica,
      etiqueta1: petiqueta1,
      etiqueta2: petiqueta2,
      etiqueta3: petiqueta3,
      etiqueta4: petiqueta4,
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'Las etiquetas fueron agregadas',
      text: 'Muchas gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'Las etiquetas no fueron guardadas',
      text: 'Por favor inténtelo de nuevo'
    });
  });
};



let consultar_etiquetasCentro = () => {
  let lista_etiquetasCentro = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_etiquetasCentro",
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