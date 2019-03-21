'use strict';

//Registra las transacciones en la bitacora 

let bitacora = (pUsuario, pDescripcion) => {
    let usuario = pUsuario;
    let descripcion = pDescripcion;
    let fecha;
    let tiempo = "";

    //Pulea y asigna la fecha de hoy
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    fecha = dd + '/' + mm + '/' + yyyy;

    //Pulea y asigna la hora
    let hora = String(today.getHours()).padStart(2, '0');
    let minutos = String(today.getMinutes()).padStart(2, '0');
    let segundos = String(today.getSeconds()).padStart(2, '0');
    tiempo = hora + ":" + minutos + ":" + segundos;

    RegistrarBitacora(pUsuario, pDescripcion, fecha, tiempo);
}

let RegistrarBitacora = (pUsuario, pDescripcion, fecha, tiempo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_bitacora",
        method: "POST",
        data: {
            usuario: pUsuario,
            descripcion: pDescripcion,
            fecha: fecha,
            hora: tiempo
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
}

let consultarBitacora = () =>{
    let lista_bitacora = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_bitacora",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        lista_bitacora = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return lista_bitacora;
};
