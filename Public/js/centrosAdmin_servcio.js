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
    bitacora("MEPAdmin1", "Registro", "Se agregó la etiqueta: " + pnombre);
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

let listar_TodosContactos = () => {
  let lista_Contactos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_contacto",
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
 
};



let buscar_etiqueta = (p_id) => {
  let etiqueta = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_etiqueta",
    method: "POST",
    data: {
      id_etiqueta: p_id
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    etiqueta = res;
    console.log("success");
    
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

return etiqueta;
   
}


let actualizar_etiqueta = (pnombre, p_pid) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_etiqueta',
      method : "POST",
      data : {
        nombre: pnombre,
        id_etiqueta: p_pid
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

let eliminar_etiqueta = (p_id) => {
let request = $.ajax({
  url : 'http://localhost:4000/api/eliminar_etiqueta',
  method : "POST",
  data : {
    id_etiqueta: p_id
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

  document.querySelector('#actualizarEtiquetas').innerHTML= "";
  // construirTabla();
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

let consultar_calificaciones = () =>{
  let lista_Contactos = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_calificaciones",
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

let getNombreCentro = (cedula) =>{
  let centros = consultar_listaCentrosAdmin();
  let x =0;
  for(let i=0; i<centros.length; i++){
    if(centros[i].cedJuridica == cedula){
      x=centros[i].nombreCentro;
    }
  }
  return x;
}


let desactivar_centro = (p_id) => {
  let request = $.ajax({
    url : 'http://localhost:4000/api/cambiarEstado_centro',
    method : "POST",
    data : {
      id_centro: p_id,
      estado: "Desactivado"
    },
    dataType : "json",
    contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
});

request.done(function(res){
    swal({
        type : 'success',
        title : 'Proceso realizado con éxito',
        text : res.msg
    }).then(location.reload())

});

request.fail(function(res){
    swal({
        type : 'error',
        title : 'Proceso no realizado',
        text : res.msg
    }).then(location.reload())

});

};

let getIDCentro = (ced) =>{
  let lista = consultar_listaCentrosAdmin();
  let resultado;
  for(let i=0; i<lista.length;i++){
    if(lista[i].cedJuridica == ced){
      resultado=lista[i]._id;
    }
  }
  return resultado;
}