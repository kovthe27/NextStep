'use strict';


let registrar_servicio = (pimagen, ptitulo, pdescripcion) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_servicio",
    method: "POST",
    data: {
      imagen: pimagen,
      titulo: ptitulo,
      descripcion: pdescripcion
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal({
      type: 'success',
      title: 'La actividad fue enviada',
      text: 'Muchas gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal({
      type: 'error',
      title: 'La actividad no pudo ser enviada',
      text: 'Por favor inténtelo de nuevo'
    });
  });
};





// const card_servicio = document.querySelector('#card_servicio card-body');

// let mostrar_datos = () =>{
//     let servicio = consultar_servicio();
//     for(let i = 0; i < servicio.length; i++){
//         let fila = tabla.insertRow(); //Crea el tr de la tabla
//         fila.insertCell().innerHTML = actividad[i]['actividad']
//         fila.insertCell().innerHTML = actividad[i]['prioridad']
//         fila.insertCell().innerHTML = actividad[i]['precio']
//     };

// };


// mostrar_datos();

