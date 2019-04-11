'use strict';
const input_tituloNoticia = document.querySelector('#txt_tituloNoticia');
const input_descripcionNoticia = document.querySelector('#txt_descripcionNoticia');
const btn_enviarNoticia = document.querySelector('#btn_enviarNoticia1');


let validarNoticia = () => {
    let error = false;

    if (input_tituloNoticia.value == '') {
        error = true;
        input_tituloNoticia.classList.add('error_input');
    } else {
        input_tituloNoticia.classList.remove('error_input');
    }

    if (input_descripcionNoticia.value == '') {
        error = true;
        input_descripcionNoticia.classList.add('error_input');
    } else {
        input_descripcionNoticia.classList.remove('error_input');
    }

    return error;
};

let obtener_datosNoticia = () => {
    document.querySelector("#cargaNoticias").innerHTML = "";

    if (validarNoticia() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let titulo = input_tituloNoticia.value;
        let fecha = '';
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        fecha = dd + '/' + mm + '/' + yyyy;
        let estado = "Activo";
        let descripcion = input_descripcionNoticia.value;

        registrar_noticia(cedulaJuridica, titulo, fecha, descripcion, estado );

    } 
    mostrar_datosNoticia();
};


btn_enviarNoticia.addEventListener('click', obtener_datosNoticia);


let mostrar_datosNoticia = () => {
    let noticiasCentro = consultar_noticia();
    let noticia = [];
    for (let i = 0; i < noticiasCentro.length; i++) {
        if (noticiasCentro[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            noticia.push(noticiasCentro[i]);
        }
    }
    for (let i = 0; i < noticia.length; i++) {

        var cardNoticia =
            "<div class=\"card-body img-thumbnail mb-2\">" +
            // dropdown
            "<div class=\"btn-group float-right\">" +
            "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
            "<i class=\"fas fa-ellipsis-v\"></i>" +
            "</button>" +
            "<div class=\"dropdown-menu dropdown-menu-right\">" +
            "<a class=\"dropdown-item\" alt=\"default\"  id=\"editarNoticia\"    href=\"javascript:construirModalNoticia('"+ noticia[i]._id +"')\"  >Editar</a>" +
            "<a class=\"dropdown-item\" alt=\"default\"  id=\"eliminarNoticia\"    href=\"javascript:eliminarNoticia('"+ noticia[i]._id +"')\"  >Eliminar</a>" +
            "</div></div>" +
           
            "<h4  class=\"card-title text-themecolor\">" + noticia[i].titulo + "</h4>" +
            "<h6  class=\"card-subtitle mb-2 text-muted\">" + noticia[i].fecha + "</h6>" +
            "<p class=\"card-text\">" + noticia[i].descripcion + "</p>" +
            "</div>";
        // </div>"


        $("#cargaNoticias").append(cardNoticia) // Append <li> to <ul> with id="myList"


    };

};

mostrar_datosNoticia();


let construirModalNoticia = (p_id) => {
   let noticiaEspecifica = buscar_noticia(p_id);
    let modalNoticia =


    // <div id="actualizarNoticia" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="vcenter" style="display: block;" aria-modal="true">
                                       ` <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title" id="vcenter">Creación de noticia</h4>
                                                   <a href="javascript:cerrarModalNoticia()"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> </a>
                                                </div>
                                                <div class="modal-body">

                                                    <div class="form-group">
                                                        <input type="text" id="txt_tituloNoticiaEspecifica" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false">
                                                    </div>

                                                    <div class="form-group">
                                                        <div class="controls">
                                                            <textarea name="textarea" id="txt_descripcionNoticiaEspecifica" class="form-control" required="" placeholder="Escriba una descripción"></textarea>
                                                            <div class="help-block"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">

                                                        <button id="btn_actualizarNoticia" href="javascript:cerrarModalNoticia()" data-id="`+noticiaEspecifica[0]._id+`" type="submit" class="btn btn-outline-warning waves-effect" data-dismiss="modal">Actualizar</button>

                                                </div>
                                            </div>
                                    </div>`

                                    $("#actualizarNoticia").append(modalNoticia);
                                    document.querySelector("#actualizarNoticia").style.display="block";
                                    document.querySelector("#actualizarNoticia").classList.add('show');

                                    document.querySelector("#bkmodal").classList.add("modal-backdrop");
                                    document.querySelector("#bkmodal").classList.add('show');


                                    // console.log(noticiaEspecifica);
                                    prueba(noticiaEspecifica[0].titulo, noticiaEspecifica[0].descripcion);

                                   
}

let cerrarModalNoticia = () => {
    document.querySelector("#actualizarNoticia").innerHTML = " ";
    document.querySelector("#actualizarNoticia").classList.remove('show');
    document.querySelector("#actualizarNoticia").style.display="none";
    document.querySelector("#bkmodal").classList.remove("modal-backdrop");
    document.querySelector("#bkmodal").classList.remove('show');
 }

 
let prueba = (ptitulo, pdescripcion) => {
    document.querySelector('#txt_tituloNoticiaEspecifica').value = ptitulo;
    document.querySelector('#txt_descripcionNoticiaEspecifica').value = pdescripcion;
}




// Actualizar noticia--------------------------------------------------------------------------


let obtener_datosActualizar = (pid) =>{
    let titulo = document.querySelector('#txt_tituloNoticiaEspecifica').value;
    let fecha = '';
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    fecha = dd + '/' + mm + '/' + yyyy;
    let descripcion = document.querySelector('#txt_descripcionNoticiaEspecifica').value;

    actualizar_noticia(titulo, fecha, descripcion, pid );
    console.log(pid);
    document.querySelector('#actualizarNoticia').style.display="none";
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarNoticia') {
        let idNoticiaAct=document.querySelector('#btn_actualizarNoticia').getAttribute('data-id');
        obtener_datosActualizar(idNoticiaAct);
    }
})


// eliminar

let eliminarNoticia = (pid) =>{
    swal("¿Está seguro que desea eliminar la noticia?", {
        buttons: {
          No: "Cancelar",
          Si: "Aceptar",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "No":
            break;
       
          case "Aceptar":
            swal("Gotcha!", "Pikachu was caught!", "success");
            break;
       
          default:
          eliminar_noticia(pid, "Rechazado");
        }
      });
    
}