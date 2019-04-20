'use strict';

let agregarItem = (pcedulaJuridica, pnombreFormulario, pinputID, pinputSelect, pperiodo) =>{
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_formulario",
        method: "POST",
        data: {
          cedulaJuridica: pcedulaJuridica,
          nombre: pnombreFormulario,
          item: pinputID,
          select: pinputSelect,
          periodo: pperiodo
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });
    
      request.done(function (msg) {
        swal.fire({
          type: 'success',
          title: 'El formulario se guardo con exito',
          text: 'Muchas gracias'
        })
        .then(window.location.href = 'formularios_administrador.html');
      });
    
      request.fail(function (jqXHR, textStatus) {
        swal.fire({
          type: 'error',
          title: 'El formulario no fue guardado',
          text: 'Por favor inténtelo de nuevo'
        });
      });
}

let consultar_formulario = () =>{
  let lista_utilesAdmin = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_formulario",
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



let buscar_formulario = (p_id) => {
  let formulario = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_formulario",
    method: "POST",
    data: {
      id_formulario: p_id
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    formulario = res;
    console.log("success");
    
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

return formulario;
   
}


let actualizar_formulario = (pnombre, pperiodo, p_id) =>{
  let request = $.ajax({
      url : 'http://localhost:4000/api/actualizar_formulario',
      method : "POST",
      data : {
        nombre: pnombre,
        periodo: pperiodo,
        id_formulario: p_id
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      swal.fire({
          type : 'success',
          title : 'Proceso realizado con éxito',
          text : res.msg
      });

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });

};

let eliminar_formulario = (p_id) => {
let request = $.ajax({
  url : 'http://localhost:4000/api/eliminar_formulario',
  method : "POST",
  data : {
    id_formulario: p_id
  },
  dataType : "json",
  contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
});

request.done(function(res){
  swal({
      type : 'success',
      title : 'Proceso realizado con éxito',
      text : res.msg
  })
  // .then(window.location.reload()) ;

  // document.querySelector('#actualizarformulario').innerHTML= "";
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
