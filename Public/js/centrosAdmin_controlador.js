'use strict';
const input_nombreEtiqueta = document.querySelector("#txt_nombreEtiqueta");
const btn_registrarEtiqueta = document.querySelector("#btn_registrarEtiqueta");

// TAB-> CENTROS

let mostrarTablaCentrosAdmin = () => {
    let listaCentros = consultar_listaCentrosAdmin();

    for (let i = 0; i < listaCentros.length; i++) {
        let nuevoCentro =
            `<tr>
            <td class="title"><a class="link" href="javascript:void(0)">` + listaCentros[i].nombreCentro + `</a></td>
            <td class="tablesaw-priority-3">` + listaCentros[i].cedJuridica + `</td>
            <td class="tablesaw-priority-1">` + listaCentros[i].emailCentro + `</td>
            <td class="tablesaw-priority-1">` + listaCentros[i].gradoAcademico + `</td>
            
            <td class="tablesaw-priority-1">
            <button type="button" onclick="location.href='javascript:verPerfilCentro(` + listaCentros[i].cedJuridica + `)'" class="btn btn-sm btn-info mr-1 btn-circle">
                <i class="fas fa-info" ></i>
            </button>
            <button type="button" onclick="location.href='javascript:calificarCentro(` + listaCentros[i].cedJuridica + `)'"class="btn btn-sm btn-success mr-1 btn-circle">
            <i class="fa fa-star"></i>
            </button>
            <button type="button" onclick="location.href='javascript:EliminarCentro(` + listaCentros[i].cedJuridica + `)'" class="btn btn-sm btn-danger mr-1 btn-circle">
                <i class="fas fa-trash"></i>
            </button>

                
            </td>
        </tr>`
        $("#tablaListaCentrosAdmin").append(nuevoCentro);


    }
}

// crear página más info--------------------------------------------


let mostrarCardInfo = () => {
    let listaCard = consultar_listaCentrosAdmin();

    for (let j = 0; j < listaCard.length; j++) {
        if (listaCard[j].cedJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            let masInfo =

                "<div class=\"card-body text-center\">" +
                "  <center class=\"m-t-30\"> <img src=\"" + listaCard[j].fotoCentro + "\" class=\"img-circle\" width=\"200\" height=\"200\">" +
                "     <h4 class=\"card-title mt-5\">" + listaCard[j].nombreCentro + "</h4>" +
                "</center>" +
                "  </div>" +
                "  <div>" +
                "     <hr> </div>" +
                "   <div class=\"card-body text-center\"> <small class=\"text-muted\">" + listaCard[j].nombreCentro + "</small>" +
                "     <h6>" + listaCard[j].emailCentro + "</h6> <small class=\"text-muted p-t-10 db\">Teléfono</small>" +
                "      <h6>" + listaCard[j].telCentro + "</h6> <small class=\"text-muted p-t-10 db\">Dirección</small>" +
                "<div class=\"text-center\" style=\"display: inline-block\">" +
                "     <h6 class=\"float-left\">" + listaCard[j].provinciaCentro + "</h6>, " +
                " <h6 class=\"float-left\">" + listaCard[j].cantonCentro + "</h6>," +
                " <h6 class=\"float-left\">" + listaCard[j].distritoCentro + "</h6>" +
                "</div>" +
                "    <br>" +
                "   <button class=\"btn btn-circle btn-secondary mb-3\" onclick=\"location.href='" + listaCard[j].sitioWeb + "'\" ><i class=\"ti-world\"></i></button>" +
                "  </div>"

            $("#infoGeneral").append(masInfo);


            let infoExtra =
                "<small class=\"text-muted p-t-10 db\">Nombre comercial</small>" +
                "<p>" + listaCard[j].nombreComercial + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Dirección del centro</small>" +
                "<p>" + listaCard[j].direccionCentro + "</p>" +
                // "<hr>" +
                // "<small class=\"text-muted p-t-10 db\">Dirección del centro</small>" +
                // "<p>" + listaCard[j].direccionCentro + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Fax</small>" +
                "<p>" + listaCard[j].faxCentro + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Tipo de centro</small>" +
                "<p>" + listaCard[j].tipoCentro + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Grado académico</small>" +
                "<p>" + listaCard[j].gradoAcademico + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Año de fundación</small>" +
                "<p>" + listaCard[j].annoFundCentro + "</p>"

            $("#textoInformativo").append(infoExtra);


            let permisos =
                "<div class=\"float-left\">" +
                "<a class=\"nav-link text-themecolor font-15\" href=\"" + listaCard[j].archivosCentro + "\" role=\"tab\"><i class=\"ti-zip\"></i>Permiso</a>" +
                // "<h5>Permiso</h5>" +
                "</div>"

            $("#permisos").append(permisos);
        }
    }
}

// Información de encargado

let mostrarEncargado = () => {
    let listaEncargados = listar_TodosContactos();
    console.log(listaEncargados);
    console.log(listaEncargados[0].cedulaJuridica);
    for (let k = 0; k < listaEncargados.length; k++) {

        if (listaEncargados[k].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            let infoEncargado =
                "<small class=\"text-muted p-t-10 db\">Nombre comercial</small>" +
                "<p>" + listaEncargados[k].nombreEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Dirección del centro</small>" +
                "<p>" + listaEncargados[k].idEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Dirección del centro</small>" +
                "<p>" + listaEncargados[k].dptoEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Dirección del centro</small>" +
                "<p>" + listaEncargados[k].telEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Extensión</small>" +
                "<p>" + listaEncargados[k].extEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Grado académico</small>" +
                "<p>" + listaEncargados[k].emailEncargado + "</p>" +
                "<hr>" +
                "<small class=\"text-muted p-t-10 db\">Año de fundación</small>" +
                "<p>" + listaEncargados[k].annoFundCentro + "</p>"

            $("#infoEncargado").append(infoEncargado);
        }
    }
}


let EliminarCentro = (ced) =>{
    let id=getIDCentro(ced)
    swal("¿Está seguro que desea desactivar a este centro educativo?", {
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
          desactivar_centro(id);
        }
      });
}

// TAB -> ETIQUETAS
let mostrarTablaEtiquetas = () => {
    let listaEtiquetas = consultar_etiquetasAdmin();

    for (let i = 0; i < listaEtiquetas.length; i++) {
        let nuevaEtiqueta =
            `<tr>
        <td class="title"><a class="link" href="javascript:void(0)">` + listaEtiquetas[i].nombre + `</a></td>
        <td class="tablesaw-priority-3">` + listaEtiquetas[i].fecha + `</td>
        <td class="tablesaw-priority-2">` + listaEtiquetas[i].usuarios + `</td>
        <td class="tablesaw-priority-1">
        <a id="editaretiqueta"  href="javascript:construirModaletiqueta('`+ listaEtiquetas[i]._id + `')"><button type="button" class="btn btn-sm btn-success mr-1 btn-circle"><i class="fas fa-edit"></i></button></a>
        <a id="eliminaretiqueta"  href="javascript:eliminaretiqueta('`+ listaEtiquetas[i]._id + `')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
                </td>
    </tr>`
        $("#tbodyEtiquetas").append(nuevaEtiqueta);

        // mostrar etiqueta en Centro educativo
        let nuevaEtiquetaCentro =
            "<option class=\"text-small\" value=\'" + listaEtiquetas[i].nombre + "\'> " + listaEtiquetas[i].nombre + " </option>"
        $("#etiquetaCentro1").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro2").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro3").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro4").append(nuevaEtiquetaCentro);
    }
}

let refrescarTablaEtiquetas = () => {
    let listaEtiquetas = consultar_etiquetasAdmin();
    for (let i = listaEtiquetas.length - 1; i > 0; i--) {
        $("#tbodyEtiquetas tr").remove(0);
    }
}

let crearEtiqueta = () => {
    let nombreEtiqueta = input_nombreEtiqueta.value;
    let usuarios = 0;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;
    if (registrarEtiqueta(nombreEtiqueta, fecha, usuarios)) {
        refrescarTablaEtiquetas();
        mostrarTablaEtiquetas();
    };
};

let mostrarCalificaciones = () => {
    let listaCalificaciones = consultar_calificaciones();

    for (let i = 0; i < listaCalificaciones.length; i++) {
        let nombreCentro = getNombreCentro(listaCalificaciones[i].cedulaJuridica);
        let nuevaCalificacion =
            `<tr>
        <td class="title"><a class="link" href="javascript:void(0)">` + nombreCentro + `</a></td>
        <td class="tablesaw-priority-3">` + listaCalificaciones[i].fecha + `</td>
        <td class="tablesaw-priority-2">` + listaCalificaciones[i].calificacion + `</td>
        <td class="tablesaw-priority-1">
        <a id="eliminarcalificacion"  href="javascript:eliminarcalific('`+ listaCalificaciones[i]._id + `')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
                </td>
    </tr>`
        $("#tbodyCalificaciones").append(nuevaCalificacion);
    }
}



// Eventos
mostrarTablaEtiquetas();
mostrarTablaCentrosAdmin();
mostrarCardInfo();
mostrarEncargado();
mostrarCalificaciones();

let verPerfilCentro = (cedulaJuridica) => {
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.location.assign("masInfoCentros_admin.html");
}

btn_registrarEtiqueta.addEventListener('click', crearEtiqueta);





let construirModaletiqueta = (p_id) => {
    let etiquetaEspecifica = buscar_etiqueta(p_id);
    let modaletiqueta =


        ` <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="vcenter">Editar etiqueta</h4>
                                               <a href="javascript:cerrarModaletiqueta()"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
                                            </div>
                                            <div class="modal-body">
        
                                                <div class="form-group">
                                                    <input type="text" id="txt_nombreEtiquetaAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Ingrese el nombre de la etiqueta">
                                                </div>
        
                                            </div>
                                            <div class="modal-footer">
                                            <button id="btn_actualizarEtiqueta"  href="javascript:cerrarModaletiqueta()" data-id="`+ etiquetaEspecifica[0]._id + `" type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>        
                                            </div>
                                        </div>
                                    </div>`

    $("#actualizarEtiquetas").append(modaletiqueta);
    document.querySelector("#actualizarEtiquetas").style.display = "block";
    document.querySelector("#actualizarEtiquetas").classList.add('show');

    document.querySelector("#bgmodal").classList.add("modal-backdrop");
    document.querySelector("#bgmodal").classList.add('show');


    // console.log(etiquetaEspecifica);
    pruebaEti(etiquetaEspecifica[0].nombre);


}

let cerrarModaletiqueta = () => {
    document.querySelector("#actualizarEtiquetas").innerHTML = " ";
    document.querySelector("#actualizarEtiquetas").classList.remove('show');
    document.querySelector("#actualizarEtiquetas").style.display = "none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
}


let pruebaEti = (pnombre) => {
    document.querySelector('#txt_nombreEtiquetaAct').value = pnombre;
}


// eliminar

let eliminarcalific = (pid) =>{
    swal("¿Está seguro que desea eliminar la calificacion?", {
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
          eliminarcalificacion(pid, "Rechazado");
        }
      });
    
}



// Actualizar etiqueta--------------------------------------------------------------------------


let obtener_datosActualizarEtiqueta = (pid) => {
    let nombre = document.querySelector('#txt_nombreEtiquetaAct').value;
    actualizar_etiqueta(nombre, pid);
    console.log(pid);
    document.querySelector('#actualizarEtiquetas').style.display = "none";
    //  window.location.reload();

};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarEtiqueta') {
        let idetiquetaAct = document.querySelector('#btn_actualizarEtiqueta').getAttribute('data-id');
        obtener_datosActualizarEtiqueta(idetiquetaAct);
    }
})


// eliminar

let eliminaretiqueta = (pid) => {
    swal("¿Está seguro que desea eliminar la etiqueta?", {
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
                    eliminar_etiqueta(pid, "Rechazado");
            }
        });

}

let calificarCentro = (cedulaJuridica) => {
    let modal =
        `<div id="agregarMatricula" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="vcenter" style="display: block; padding-right: 17px;" aria-modal="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="vcenter">Calificar centro</h4>
                    <a href="javascript:cerrarModalCalificar()"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
                </div>
                <div class="modal-body">
                    <div class="form-group col-md-12">
                    <label for="selectForms"> Seleccione el tipo de centro a calificar
                        <select id="selectForms" class="mt-3 form-control custom-select">
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button id="btn_crearForm" data-id="`+ cedulaJuridica +`"  type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Añadir</button>

                    </div>
                </div>
            </div>
        </div>`
    $("#main").append(modal);

    document.querySelector("#main").style.display="block";
    document.querySelector("#main").classList.add('show');

    document.querySelector("#bgmodal").classList.add("modal-backdrop");
    document.querySelector("#bgmodal").classList.add('show');


    let listaFormularios = consultar_formulario();
    let listaNombres = [];
    let listaFiltrada = [];
    for(let i =0; i<listaFormularios.length; i++){
        listaNombres.push(listaFormularios[i].nombre);
    }
    listaFiltrada = [...new Set(listaNombres)];
    for(let i=0; i<listaFiltrada.length; i++){
        let option=
        `<option value="`+listaFiltrada[i]+`">`+listaFiltrada[i]+`</option>`
        $("#selectForms").append(option);
    }
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));

}

let crearForm = () =>{
    let nombreform = document.querySelector("#selectForms").value;
    localStorage.setItem('nombreFormulario', JSON.stringify(nombreform));
    window.location = "calificar_centro.html";
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_crearForm') {
        crearForm();
    }
})


let cerrarModalCalificar= () => {
    document.querySelector("#agregarMatricula").innerHTML = " ";
    document.querySelector("#agregarMatricula").classList.remove('show');
    document.querySelector("#agregarMatricula").style.display="none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
 }