'use strict';


const inputNombreForm = document.querySelector("#txt_nombreFormulario");
const inputPeriodoForm = document.querySelector("#txt_periodoFormulario");
const btnCrearFormulario = document.querySelector("#btn_crearFormulario"); 

let verFormulario = () => {

    localStorage.setItem('nombreFormulario', JSON.stringify(inputNombreForm.value));
    localStorage.setItem('periodoFormulario', JSON.stringify(inputPeriodoForm.value));
    window.location.assign("calificaciones_administrador.html");
}

let mostrarFormularios = () => {
    let listaFormularios = consultar_formulario();
    let listaNombres = [];
    let listaFiltrada = [];
    for(let i =0; i<listaFormularios.length; i++){
        listaNombres.push(listaFormularios[i].nombre);
    }
    listaFiltrada = [...new Set(listaNombres)];
    
    for(let j =0; j<listaFiltrada.length; j++){
        let formulario= 
        `<tr>
            <td class="title">
                <a class="link text-themecolor" id="lista`+ j + `" href="javascript:construirFormulario('` + listaFiltrada[j] + `')">`+listaFiltrada[j]+`</a>
            </td>
            <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+getPeriodo(listaFiltrada[j])+` </td> 
            <td>

            <a id="editarFormulario"  href="javascript:construirModalformulario('`+ listaFiltrada[j] +`')"><button type="button" class="btn btn-sm btn-success mr-1 btn-circle"><i class="fas fa-edit"></i></button></a>
            <a id="eliminarFormulario"  href="javascript:eliminarlFormulario('`+ listaFiltrada[j] +`')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
            </td>
        </tr>`

    $("#tablaFormularios").append(formulario);
        
    }
}

let getPeriodo = (nombrel) =>{
    let listaFormularios = consultar_formulario(); 
    let peiriodox;
    for(let i =0; i<listaFormularios.length; i++){
        if(listaFormularios[i].nombre == nombrel){
            peiriodox = listaFormularios[i].periodo
        }
    }
    return peiriodox;
}

btnCrearFormulario.addEventListener('click', verFormulario);

mostrarFormularios();

let construirFormulario = (pnombre) => {
   
    // if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        localStorage.setItem('nombreFormulario', JSON.stringify(pnombre));
        window.location.assign("./ver_formulario.html")
    // }
        
}



let construirModalformulario = (pnombre) => {
    let listaFormularios = consultar_formulario();
    let formularioEspecifico;

    for (let i = 0; i < listaFormularios.length; i++){
        if(listaFormularios[i].nombre == pnombre){
            formularioEspecifico = buscar_formulario(listaFormularios[i]._id);
        }
    }
    let modalformulario =

     ` <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="vcenter">Editar formulario</h4>
            <a href="javascript:cerrarModalformulario()" data-id="`+formularioEspecifico[0]._id+`"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
         </div>
         <div class="modal-body">

             <div class="form-group">
                 <input type="text" id="txt_nombreFormularioAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Ingrese el nombre del formulario">
             </div>
             <div class="form-group">
                 <input type="text" id="txt_periodoFormularioAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Ingrese periodo lectivo">
             </div>

         </div>
         <div class="modal-footer">
             <button id="btn_actualizarFormulario" type="submit" href="javascript:cerrarModalformulario()" data-id="`+formularioEspecifico[0]._id+`" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>

         </div>
     </div>
 </div>`


                        $("#actualizarformulario").append(modalformulario);
                        document.querySelector("#actualizarformulario").style.display="block";
                        document.querySelector("#actualizarformulario").classList.add('show');

                        document.querySelector("#bgmodal").classList.add("modal-backdrop");
                        document.querySelector("#bgmodal").classList.add('show');

                        formularioAct(formularioEspecifico[0].nombre, formularioEspecifico[0].periodo);
        

}

let cerrarModalformulario = () => {
    document.querySelector("#actualizarformulario").innerHTML = " ";
    document.querySelector("#actualizarformulario").classList.remove('show');
    document.querySelector("#actualizarformulario").style.display="none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
 }

 
let formularioAct = (pnombre, pperiodo) => {
    document.querySelector('#txt_nombreFormularioAct').value = pnombre;
    document.querySelector('#txt_periodoFormularioAct').value = pperiodo;
}




// Actualizar formulario--------------------------------------------------------------------------


let obtener_datosActualizarformulario = (pid) =>{
    let nombre = document.querySelector('#txt_nombreFormularioAct').value;
    let periodo = document.querySelector('#txt_periodoFormularioAct').value;

    actualizar_formulario(nombre, periodo, pid );
    document.querySelector('#actualizarformulario').style.display="none";
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarFormulario') {
        let idformularioAct=document.querySelector('#btn_actualizarFormulario').getAttribute('data-id');
        obtener_datosActualizarformulario(idformularioAct);
    }
})


// eliminar

let eliminarlFormulario = (pnombre) =>{
    let listaFormularios = consultar_formulario();
    let formularioEspecifico;

    for (let i = 0; i < listaFormularios.length; i++){
        if(listaFormularios[i].nombre == pnombre){
            formularioEspecifico = buscar_formulario(listaFormularios[i]._id);
        }
    }

    swal("¿Está seguro que desea eliminar el formulario?", {
        buttons: {
          No: "Cancelar",
          Si: "Aceptar",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "No":
            break;
       
          default:
          eliminar_formulario(formularioEspecifico[0]._id);
        }
      });
    
}

