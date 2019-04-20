'use strict';

let getNombreLista = () => {
  let nombre;
  nombre = JSON.parse(localStorage.getItem('ListaNombre'));
  return nombre;
}

let getLista = () => {

  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_utilesAdmin",
    method: "GET",
    data: {},
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

let getListaTipos = () => {
  let lista_tipos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_tipoArticulo",
    method: "GET",
    data: {},
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    lista_tipos = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return lista_tipos;
}

let crearArticulo = (pcedula, pcantidad, particulo, pdescripcion) => {
  let nivel = getNombreLista();
  let listaActual = getLista();

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_utilesAdmin",
    method: "POST",
    data: {
      cedula: pcedula,
      cantidad: pcantidad,
      tipo: particulo,
      descripcion: pdescripcion,
      nivel: nivel
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });
  refrescarLista();
  // crearLista();
  // request.done(function (msg) {
  //   swal.fire({
  //     type: 'success',
  //     title: 'El articulo se agregó con exito',
  //     text: 'Muchas gracias'
  //   });
  // });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El artículo no pudo ser agregado',
      text: 'Por favor inténtelo de nuevo'
    });
  });
  return true;
}

let crearTipo = (pNombre) => {
  let nivel = getNombreLista();
  let cedula = "MEPAdmin1"
  let listaActual = getLista();

  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_tipoArticulo",
    method: "POST",
    data: {
      nombre: pNombre,
      
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  let tipos =
            `<option value="` + pNombre + `">` + pNombre + `</option>`

        $("#slt_articulos").append(tipos)


  request.done(function (msg) {
    swal.fire({
      type: 'success',
      title: 'El artículo se agregó con exito',
      text: 'Muchas gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El artículo no pudo ser agregado',
      text: 'Por favor inténtelo de nuevo'
    });
  });
  return true;
}


let buscar_utilesAdmin = (p_id) => {
  let utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_utilesAdmin",
    method: "POST",
    data: {
      id_utilesAdmin: p_id
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    utilesAdmin = res;
    console.log("success");
    
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

return utilesAdmin;
   
}


let actualizar_utilesAdmin = (pcantidad, particulo, pdescripcion, p_id) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_utilesAdmin',
      method : "POST",
      data : {
        cantidad: pcantidad,
        articulo: particulo,
        descripcion :pdescripcion,
        id_utilesAdmin: p_id
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

  });

  request.fail(function(res){
      swal({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};

let eliminar_utilesAdmin = (p_id) => {
let request = $.ajax({
  url : 'http://localhost:4000/api/eliminar_utilesAdmin',
  method : "POST",
  data : {
    id_utilesAdmin: p_id
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

  document.querySelector('#actualizarUtilesAdmin').innerHTML= "";
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

