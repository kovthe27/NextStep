'use strcit';

let getFormulario = () =>{
    let lista_Contactos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_formulario",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_Contactos = res;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_Contactos;
}

let registrarCalificacion = (pcedulaJuridica, pcalificacion, pfecha) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_calificaciones",
        method: "POST",
        data: {
            cedulaJuridica: pcedulaJuridica,
            calificacion: pcalificacion,
            fecha: pfecha
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
    
      request.done(function (msg) {
        swal({
          type: 'success',
          title: "La calificación es: " + pcalificacion,
          text: 'Muchas gracias'
        }).then(function() {
          window.location = "centros_Administrador.html";
      });
    });
      request.fail(function (jqXHR, textStatus) {
        swal({
          type: 'error',
          title: 'La etiqueta no pudo ser agregada',
          text: 'Por favor inténtelo de nuevo'
        });
      });
      return true;

}