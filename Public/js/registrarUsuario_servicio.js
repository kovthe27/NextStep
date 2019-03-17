'use strict';


let registrar_Padre = (pnombrePadre, pidPadre, pnacionPadre, pdireccionPadre, pemailPadre, ptelPadre, pcantHijos, pfotoPadre) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_padre",
    method: "POST",
    data: {
        nombrePadre: pnombrePadre,
        idPadre: pidPadre,
        nacionPadre: pnacionPadre,
        direccionPadre: pdireccionPadre,
        emailPadre: pemailPadre,
        telPadre: ptelPadre,
        cantHijos: pcantHijos,
        fotoPadre: pfotoPadre
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El usuario fue registrado',
      text: 'Le estaremos enviando un código de verificación a su coreo electrónico para que pueda iniciar sesión'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El usuario no fue registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_Padres = () => {
  let lista_Padres = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_padre",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_Padres = res.registroPadreFamilia;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_Padres;
 
};