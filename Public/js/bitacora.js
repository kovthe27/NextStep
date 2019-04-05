'use strict';

//Registra las transacciones en la bitacora 

let bitacora = (pUsuario, pAccion, pDescripcion) => {
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

    RegistrarBitacora(pUsuario, pAccion, pDescripcion, fecha, tiempo);
}

let RegistrarBitacora = (pUsuario, pAccion, pDescripcion, fecha, tiempo) => {

    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_bitacora",
        method: "POST",
        data: {
            usuario: pUsuario,
            accion: pAccion,
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

// document.querySelector('#txt_search').onkeyup = function(){
//   filtrarTabla('#TablaBitacora2', this.value);
// }

// let filtrarTabla = (id, value) =>{
//   var rows = document.querySelectorAll(id + ' tbody tr');
  
//   for(var i = 0; i < rows.length; i++){
//       var showRow = false;
      
//       var row = rows[i];
//       row.style.display = 'none';
      
//       for(var x = 0; x < row.childElementCount; x++){
//           if(row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
//               showRow = true;
//               break;
//           }
//       }
      
//       if(showRow){
//           row.style.display = null;
//       }
//   }
// }