'use strict';

let registrar_cita = (pcedulaJuridica, pnombre, pfechaCita, phoraCita, pcorreoUsuario) => {
    let request = $.ajax({
      url: "http://localhost:4000/api/registrar_cita",
      method: "POST",
      data: {
        cedulaJuridica : pcedulaJuridica,
        nombre: pnombre,
        fecha: pfechaCita,
        hora: phoraCita,
        correo : pcorreoUsuario
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
  
    request.done(function (msg) {
      swal.fire({
        type: 'success',
        title: 'La cita fue agregada',
        text: 'Muchas gracias'
      });
    });
  
    request.fail(function (jqXHR, textStatus) {
      swal.fire({
        type: 'error',
        title: 'La cita no pudo ser registrada',
        text: 'Por favor inténtelo de nuevo'
      });
    });
    // bitacora(pnombre, "Cita", "Registró una cita con" + pcedulaJuridica);
  };
  


let consultar_cita = () => {
    let lista_citas = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_cita",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_citas = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_citas;
      
    };
    
    