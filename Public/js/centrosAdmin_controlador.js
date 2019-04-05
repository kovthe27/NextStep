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
            <td class="tablesaw-priority-2">01/01/0001</td>
            <td class="tablesaw-priority-1">` + listaCentros[i].emailCentro + `</td>
            <td class="tablesaw-priority-1">Desconocido</td>
            
            <td class="tablesaw-priority-1">
            <button type="button" onclick="location.href='javascript:verPerfilCentro(` + listaCentros[i].cedJuridica + `)'" class="btn btn-sm btn-themecolor mr-1 btn-circle">
            <i class="fas fa-info" ></i>
        </button>

                <button type="button" class="btn btn-sm btn-danger mr-1 btn-circle">
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
        
        if (listaEncargados[k].cedulaJuridica== JSON.parse(localStorage.getItem('centroEducativo'))) {
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
                "<p>" + listaEncargados[k].annoFundCentro+ "</p>"

            $("#infoEncargado").append(infoEncargado);
        }
    }
}


// permisos

// let mostrarPermisos = () => {
//     let listaPermisos = consultar_listaCentrosAdmin();

//     for (let j = 0; j < listaPermisos; j++) {
//         let permisos =
//             "<div class=\"float-left\">" +
//             "<a class=\"nav-link text-themecolor font-20\" data-toggle=\"tab\" href=\"" + listaPermisos[i].archivosCentro + "\" role=\"tab\"><i class=\"ti-zip\"></i></a>" +
//             "<h5>Permiso</h5>" +
//             "</div>"

//         $("#permisos").append(permisos);
//     }
// }

// Termina página de "Más información"
// --------------------------------------------------------





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
                    <button type="button" id="btnEtiquetasAdmin` + i + `"
                        class="btn btn-sm btn-success mr-1 btn-circle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger mr-1 btn-circle">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
    </tr>`
        $("#tbodyEtiquetas").append(nuevaEtiqueta);

        // mostrar etiqueta en Centro educativo
        let nuevaEtiquetaCentro =
            "<option class=\"text-small\" value='" + listaEtiquetas[i].nombre + "'> " + listaEtiquetas[i].nombre + " </option>"
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



// Eventos
mostrarTablaEtiquetas();
mostrarTablaCentrosAdmin();
mostrarCardInfo();
mostrarEncargado();

let verPerfilCentro = (cedulaJuridica) => {
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.location.assign("masInfoCentros_admin.html");
}

btn_registrarEtiqueta.addEventListener('click', crearEtiqueta);