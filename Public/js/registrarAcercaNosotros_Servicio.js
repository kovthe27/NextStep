'use strict';

let registrar_acercaNosotros = (pcedulaJuridica, pdescripcion, pubicacion, pencargado, pcorreo, ptelefono, pfacebook, pinstagram, ptwitter, ppagina) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_acercaNosotros",
      method: "POST",
      data: {
        cedulaJuridica: pcedulaJuridica,
        descripcionCentro: pdescripcion,
        ubicacion : pubicacion,
        encargado: pencargado,
        correo: pcorreo,
        telefono : ptelefono,
        facebook : pfacebook, 
        instagram : pinstagram,
        twitter : ptwitter,
        pagina : ppagina
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'La información fue agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La información no pudo ser registrada',
        text: 'Por favor inténtelo de nuevo'
      });
    });

    // bitacora(pcedulaJuridica, + "Acerca nosotros", pcedulaJuridica +  "agregó información del centro");
  };
  


let consultar_acercaNosotros = () => {
    let lista_acercaNosotros = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_acercaNosotros",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_acercaNosotros = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_acercaNosotros;
      
    };
    
    