let consultar_etiquetasAdmin = () => {
  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_etiqueta",
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

let registrarEtiqueta = (pnombre, pfecha, pusuarios) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_etiqueta",
    method: "POST",
    data: {
      nombre: pnombre,
      fecha: pfecha,
      usuarios: pusuarios
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'La etiqueta ha sido agregada',
      text: 'Muchas gracias'
    });
    bitacora("MEPAdmin1", "Registro", "Se agrego la etiqueta: " + pnombre);
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'La etiqueta no pudo ser agregada',
      text: 'Por favor inténtelo de nuevo'
    });
  });
  return true;

};

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