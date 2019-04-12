'use strict';

const inputNombre = document.querySelector("#txt_nombre");
const card = document.querySelector("#TblUtiles");
const btnRegistrar = document.querySelector("#btn_registrar");

let construirTabla = () => {
    let cedulaJuridica;
    if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        cedulaJuridica = "MEPAdmin1";
    }else{
        cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
    }
    let lista = consultar_utilesAdmin();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == cedulaJuridica) {
            let nombre = lista[i].nombre;
            let nuevalista =
                `<tr>
                <td class="title">
                    <a class="link" id="lista`+ i + `" href="javascript:construirLista('` + nombre + `')">` + lista[i].nombre + `</a>
                </td>
                <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+ lista[i].creada + `</td>
                <td>
                <div class="custom-control custom-checkbox">
                     <input type="checkbox" class="custom-control-input" id="customCheck`+ i + `">
                     <label class="custom-control-label" for="customCheck`+ i + `"></label>
                 </div>
                </td>    
                <td>

                    <a id="editarLista"  href="javascript:construirModalLista('`+ lista[i]._id +`')"><button type="button" class="btn btn-sm btn-success mr-1 btn-circle"><i class="fas fa-edit"></i></button></a>
                    <a id="eliminarLista"  href="javascript:eliminarlListaUtiles('`+ lista[i]._id +`')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
                </td>
            </tr>`

            $("#TblUtiles").append(nuevalista);
        }
    }
};

let construirLista = (pnombre) => {
    if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        localStorage.setItem('ListaNombre', JSON.stringify(pnombre));
        window.location.assign("./listas.html")
    }else{
        localStorage.setItem('ListaNombre', JSON.stringify(pnombre));
        window.location.assign("./listas_CentroEducativo.html")
    }
}

let registrarLista = () => {
    let cedula;
    if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        cedula = "MEPAdmin1";
    }else{
        cedula = JSON.parse(localStorage.getItem('centroEducativo'));
    }
    let nombre = inputNombre.value;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;

    nuevaLista(cedula, nombre, fecha);

    window.location.reload();
};

construirTabla();
btnRegistrar.addEventListener('click', registrarLista);


let construirModalLista = (p_id) => {
    console.log("hello");
    let listaEspecifica = buscar_listaUtiles(p_id);
    let modalLista =

     ` <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="vcenter">Editar lista</h4>
                               <ahref="javascript:cerrarModalLista()"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a> 
                            </div>
                            <div class="modal-body">

                                <div class="form-group">
                                    <input type="text" id="txt_nombreAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Ingrese el nombre de la lista">
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button id="btn_actualizarlistaUtiles"  href="javascript:cerrarModalLista()" data-id="`+listaEspecifica[0]._id+`" type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>

                            </div>
                            </div>
                        </div>`

                        $("#actualizarLista").append(modalLista);
                        document.querySelector("#actualizarLista").style.display="block";
                        document.querySelector("#actualizarLista").classList.add('show');

                        document.querySelector("#bgmodal").classList.add("modal-backdrop");
                        document.querySelector("#bgmodal").classList.add('show');

                        listaAct(listaEspecifica[0].nombre);
};
 

let cerrarModalLista = () => {
    document.querySelector("#actualizarLista").innerHTML = " ";
    document.querySelector("#actualizarLista").classList.remove('show');
    document.querySelector("#actualizarLista").style.display="none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
 }

 
let listaAct = (pnombre) => {
    document.querySelector('#txt_nombreAct').value = pnombre;
}




// Actualizar noticia--------------------------------------------------------------------------


let obtener_datosActualizarLista = (pid) =>{
    let nombre = document.querySelector('#txt_nombreAct').value;

    actualizar_listaUtiles(nombre, pid );
    document.querySelector('#actualizarLista').style.display="none";
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarlistaUtiles') {
        let idlistaUtilesAct=document.querySelector('#btn_actualizarlistaUtiles').getAttribute('data-id');
        obtener_datosActualizarLista(idlistaUtilesAct);
    }
})


// eliminar

let eliminarlListaUtiles = (pid) =>{
    swal("¿Está seguro que desea eliminar la lista de útiles?", {
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
          eliminar_listaUtiles(pid, "Rechazado");
        }
      });
    
}
