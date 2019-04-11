'use strict';

const input_tituloMatricula = document.querySelector('#txt_tituloMatricula');
const input_descripcionMatricula = document.querySelector('#txt_descripcionMatricula');
const btn_enviarMatricula = document.querySelector('#btn_enviarMatricula');

let validarMatricula = () => {
    let error = false;

    if (input_tituloMatricula.value == '') {
        error = true;
        input_tituloMatricula.classList.add('error_input');
    } else {
        input_tituloMatricula.classList.remove('error_input');
    }

    if (input_descripcionMatricula.value == '') {
        error = true;
        input_descripcionMatricula.classList.add('error_input');
    } else {
        input_descripcionMatricula.classList.remove('error_input');
    }

    return error;
};

let obtener_datosMatricula = () => {
    // document.querySelector("#cardMatricula").innerHTML = "";

    if (validarMatricula() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let titulo = input_tituloMatricula.value;
        let descripcion = input_descripcionMatricula.value;
        let estado = "Activo"

        registrar_infoMatricula(cedulaJuridica, titulo, descripcion, estado);
    }

    window.location.reload();

    // mostrar_datosMatricula();

};


btn_enviarMatricula.addEventListener('click', obtener_datosMatricula);


const card_matricula = document.querySelector('#cardMatricula');

let mostrar_datosMatricula = () => {
    let matricula = consultar_infoMatricula();
    // console.log(servicio);

    for (let i = 0; i < matricula.length; i++) {
        if (matricula[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var card = "<div class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">" +
                "<div class=\"ribbon-wrapper border card\">" +
                "<div class=\"ribbon col-md-12 pr-0 float-left ribbon-default\">" + matricula[i].titulo + " "+
              
                "<div class=\"btn-group col-md-2 float-right\">" +
                "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
                "<i class=\"fas fa-ellipsis-v text-white\"></i>" +
                "</button>" +
                "<div class=\"dropdown-menu dropdown-menu-right\">" +
                "<a class=\"dropdown-item\" alt=\"default\"  id=\"editarInfo\"    href=\"javascript:construirModalinfoMatricula('"+ matricula[i]._id +"')\"  >Editar</a>" +
                "<a class=\"dropdown-item\" alt=\"default\"  id=\"eliminarInfoMatricula\"    href=\"javascript:eliminarInfoMatricula('"+ matricula[i]._id +"')\"  >Eliminar</a>" +
                "</div></div>" +
                
                "</div>" +
               

                "<p class=\"ribbon-content\">" + matricula[i].descripcion + "</p>" +
                "</div></div>";

            $("#cardMatricula").append(card);
        }
    };

};


mostrar_datosMatricula();



let construirModalinfoMatricula = (p_id) => {
    let infoMatr_Especifica = buscar_infoMatricula(p_id);
     let modal_infoMatricula =

    //  <div id="actualizarInfo" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="vcenter" style="display: block;" aria-modal="true">
     `<div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title" id="vcenter">Información de matrícula</h4>
                                           <a href="javascript:cerrarModalInfo()"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
                                        </div>
                                        <div class="modal-body">

                                            <div class="form-group">
                                                <input type="text" id="txt_actTituloMatricula" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte un título">
                                            </div>

                                            <div class="form-group">
                                                <div class="controls">
                                                    <textarea name="textarea" id="txt_actDescripcionMatricula" class="form-control" required="" placeholder="Escriba una descripción"></textarea>
                                                    <div class="help-block"></div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                        <div class="modal-footer">
                                        <button id="btn_actualizar_info" href="javascript:cerrarModalInfo()"  data-id="`+infoMatr_Especifica[0]._id+`" type="submit" class="btn btn-outline-warning waves-effect" data-dismiss="modal">Actualizar</button>

                                        </div>
                                    </div>
                                </div>`

 
                                     $("#actualizarInfo").append(modal_infoMatricula);
                                     document.querySelector("#actualizarInfo").style.display="block";
                                     document.querySelector("#actualizarInfo").classList.add('show');

                                     document.querySelector("#bkmodal").classList.add("modal-backdrop");
                                     document.querySelector("#bkmodal").classList.add('show');


                                     console.log(infoMatr_Especifica);
                                     matricula(infoMatr_Especifica[0].titulo, infoMatr_Especifica[0].descripcion);
 
                                    
 }

 let cerrarModalInfo = () => {
    document.querySelector("#actualizarInfo").innerHTML = " ";
    document.querySelector("#actualizarInfo").classList.remove('show');
    document.querySelector("#actualizarInfo").style.display="none";
    document.querySelector("#bkmodal").classList.remove("modal-backdrop");
    document.querySelector("#bkmodal").classList.remove('show');
 }
  
 let matricula = (ptitulo, pdescripcion) => {
     document.querySelector('#txt_actTituloMatricula').value = ptitulo;
     document.querySelector('#txt_actDescripcionMatricula').value = pdescripcion;
 }
 
 
 
 
 // Actualizar noticia--------------------------------------------------------------------------
 
 
 let obtener_datosActualizarInfo= (pid) =>{
     let titulo = document.querySelector('#txt_actTituloMatricula').value;
     let descripcion = document.querySelector('#txt_actDescripcionMatricula').value;
 
     actualizar_infoMatricula(titulo, descripcion, pid );
     console.log(pid);
     document.querySelector('#actualizarInfo').style.display="none";
     window.location.reload();
     
 };
 
 document.addEventListener('click', (e) => {
     if (e.target && e.target.id == 'btn_actualizar_info') {
         let idInfoMatrAct=document.querySelector('#btn_actualizar_info').getAttribute('data-id');
         obtener_datosActualizarInfo(idInfoMatrAct);
     }
 })
 


// eliminar

let eliminarInfoMatricula = (pid) =>{
    swal("¿Está seguro que desea eliminar la información de matrícula?", {
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
          eliminar_infoMatricula(pid, "Rechazado");
        }
      });
    
}