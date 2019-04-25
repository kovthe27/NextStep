'use strict';
const input_calificacion = document.querySelector('#txt_calificacion');
const input_comentario = document.querySelector('#txt_comentario');
const btn_enviarComentario = document.querySelector('#btn_enviarComentario1');




// Servicios -> listo

let validarComentario = () => {
    let error = false;

    if (input_calificacion.value == '') {
        error = true;
        input_calificacion.classList.add('error_input');
    } else {
        input_calificacion.classList.remove('error_input');
    }

    if (input_comentario.value == '') {
        error = true;
        input_comentario.classList.add('error_input');
    } else {
        input_comentario.classList.remove('error_input');
    }

    return error;
};

let obtener_datosComentario = () => {

    if (validarComentario() == false) {
        // Se ejecuta solo si la validación no da error
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let correoUsuario = JSON.parse(localStorage.getItem('cliente'));
        let calificacion = input_calificacion.value;
        let fecha = '';
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        fecha = dd + '/' + mm + '/' + yyyy;
        let comentario = input_comentario.value;
        let likes = 0;

        registrar_comentarios(cedulaJuridica, correoUsuario, calificacion, fecha, comentario, likes);
    }

    mostrar_datosComentario();
    window.location.reload();
};

btn_enviarComentario.addEventListener('click', obtener_datosComentario);


let mostrar_datosServicio = () => {
    let servicio = consultar_servicio();
    let c1 = 0;
    for (let i = 0; i < servicio.length; i++) {
        if (servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo')) & c1 < 3) {
            var card =

                "<div class=\"col-lg-4 col-md-6 float-left\">" +
                "<div class=\"card\">" +
                "<div class=\"el-card-item card-body\">" +
                "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
                "<div class=\"image\">" +
                "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
                "</div>" +
                "<div class=\"el-card-content\">" +
                "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
                "<br>" +
                "</div>" +

                "</div> </div> </div>"

            $("#carousel").append(card)
            c1++;
        } else {
            if (servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo')) & c1 >= 3 & c1 < 6) {
                var card =

                    "<div class=\"col-lg-4 col-md-6 float-left\">" +
                    "<div class=\"card\">" +
                    "<div class=\"el-card-item card-body\">" +
                    "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +

                    "<div class=\"image\">" +
                    "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
                    "</div>" +
                    "<div class=\"el-card-content\">" +
                    "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
                    "<br>" +
                    "</div>" +

                    "</div> </div> </div>"

                $("#carousel2").append(card)
                c1++;
            } else {
                if (servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo')) & c1 >= 6 & c1 < 9) {
                    var card =

                        "<div class=\"col-lg-4 col-md-6 float-left\">" +
                        "<div class=\"card\">" +
                        "<div class=\"el-card-item card-body\">" +
                        "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
                        "<div class=\"image\">" +
                        "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
                        "</div>" +
                        "<div class=\"el-card-content\">" +
                        "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
                        "<br>" +
                        "</div>" +

                        "</div> </div> </div>"

                    $("#carousel3").append(card)
                    c1++;
                }
            }
        }
    }

};
mostrar_datosServicio();

// Noticias -> listo
let mostrar_datosNoticia = () => {
    let noticia = consultar_noticia();
    let max = 5;
    // console.log(noticia);

    for (let i = noticia.length - 1; i > 0; i--) {
        if (noticia[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo')) & max > 0) {
            var cardNoticia =
                // "<div class=\"card col-md-3 float-left \">" +
                "<div class=\"card-body img-thumbnail mb-2\">" +
                "<h4  class=\"card-title text-themecolor\">" + noticia[i].titulo + "</h4>" +
                "<h6  class=\"card-subtitle mb-2 text-muted\">" + noticia[i].fecha + "</h6>" +
                "<p class=\"card-text\">" + noticia[i].descripcion + "</p>" +
                "</div>";
            // </div>"


            $("#cargaNoticias").append(cardNoticia) // Append <li> to <ul> with id="myList"
            max--;

        };
    }
}
mostrar_datosNoticia();

// Datos de MAtricula -> listo
let mostrar_datosMatricula = () => {
    let matricula = consultar_infoMatricula();
    // console.log(servicio);

    for (let i = 0; i < matricula.length; i++) {
        if (matricula[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var card = "<div class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">" +
                "<div class=\"ribbon-wrapper border card\">" +
                "<div class=\"ribbon ribbon-default\">" + matricula[i].titulo + "</div>" +
                "<p class=\"ribbon-content\">" + matricula[i].descripcion + "</p>" +
                "</div></div>";

            $("#cardMatricula").append(card);
        }
    };


};
mostrar_datosMatricula();

//Acerca de nosotros -> listo  
let mostrar_infoCentro = () => {
    let acercaNosotros = consultar_acercaNosotros();

    for (let i = 0; i < acercaNosotros.length; i++) {
        if (acercaNosotros[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var card_acercaNosotros =
                "<div class=\"clearfix\"></div>" +
                "<div class=\"col-md-8 float-left\">" +
                "<p class=\"card-text\">" + acercaNosotros[i].descripcionCentro + "</p><br>" +
                "<button class=\"btn btn-themecolor mr-1\" data-toggle=\"modal\" data-target=\"#registrarComentario\">Calificar centro</button>" +
                "<button class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" data-target=\"#registrarCita\">Agendar cita</button>" +
                "<button id=\"btn_SolicitarInfo\" class=\"btn btn-secondary mr-1\">Solicitar información</button>" +
                "</div>" +
                "<div class=\"linea float-left\"></div>" +
                "<div class=\"col-md-4 float-left información\">" +
                "<p><i class=\"sl-icon-location-pin\"></i> Ubicación: <span>" + acercaNosotros[i].ubicacion + "</span></p>" +
                "<p><i class=\"sl-icon-user\"></i> Contacto: <span>" + acercaNosotros[i].encargado + "</span></p>" +
                "<p><i class=\"sl-icon-envelope-open\"></i> Correo: <span>" + acercaNosotros[i].correo + "</span></p>" +
                "<p><i class=\"sl-icon-phone\"></i> Teléfono: <span>" + acercaNosotros[i].telefono + "</span></p>" +
                "<a href= " + "'" + acercaNosotros[i].facebook + "'" + " class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-facebook\"></i></a>" +
                "<a href= " + "'" + acercaNosotros[i].instagram + "'" + " class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-instagram\"></i></a>" +
                "<a href= " + "'" + acercaNosotros[i].twitter + "'" + "  class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-twitter\"></i></a>" +
                "<a href= " + "'" + acercaNosotros[i].pagina + "'" + " class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-world\"></i></a>"
            "</div>"

            $("#cardInfo").append(card_acercaNosotros)
        };
    }

};

mostrar_infoCentro();


// btn_enviarCita.addEventListener('click', obtener_datosCita);

// Etiquetas -> listo
let mostrar_datosEtiquetas = () => {
    let etiqueta = consultar_etiquetasCentro();

    for (let i = 0; i < etiqueta.length; i++) {
        if (etiqueta[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var etiquetaCentro =
                "<small class=\"text-white\">" + etiqueta[i].etiqueta1 + "</small> | " +
                "<small class=\"text-white\">" + etiqueta[i].etiqueta2 + "</small> | " +
                "<small class=\"text-white\">" + etiqueta[i].etiqueta3 + "</small> | " +
                "<small class=\"text-white\">" + etiqueta[i].etiqueta4 + "</small> "

            $("#creacionEtiquetas").append(etiquetaCentro);
        };

    }
};
mostrar_datosEtiquetas();

// Comentarios - >
let mostrar_datosComentario = () => {
    let Comentario = consultar_comentarios();
    // let Usuarios = consultar_usuarios ();
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
    // JSON.parse(localStorage.getItem('centro'));
    document.querySelector("#cardComentarios").innerHTML = "";

    for (let i = Comentario.length - 1; i > Comentario.length - 5; i--) {

        if (Comentario[i].cedulaJuridica == cedulaJuridica) {
            let nombreUsuario = getNombreUsuario(Comentario[i].correoUsuario);
            let fotoUsuario = getFotoUsuario(Comentario[i].correoUsuario);
            var card =
                // let i = noticia.length - 1; i > noticia.length - 5; i--
                "<div class=\"d-flex flex-row comment-row mb-3 bg-light\">" +
                "<div class=\"p-2\"><span class=\"round\"><img src=\"" + fotoUsuario + "\"   alt=\"user\"  width=\"50\" height=\"50\"></span></div>" +
                "<div class=\"comment-text w-100\">" +
                "<h5>" + nombreUsuario + "</h5><div class=\"float-right text-warning\"><span>" + Comentario[i].calificacion + "</span><i class=\"ti-star text-warning\"></i></div>" +
                "<div class=\"comment-footer\">" +
                "<span class=\"date\">" + Comentario[i].fecha + "</span>" +
                "</div>" +
                "<p class=\"m-b-5 m-t-10\">" + Comentario[i].comentario + "</p>" +
                // "<div id=\"mostrarLikes\" class=\"clearfix\"></div><button type=\"button\" class=\"btn btn-warning btn-sm mr-2 btn-circle\"><i class=\"fa fa-heart \"></i></button>" + Comentario[i].likes + " likes"
            "</div>" +

                "</div>"


            $("#cardComentarios").append(card);
        };
    };
};

mostrar_datosComentario();

let consultarListaMenuPadre = () => {
    let listaUsuarios = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_padre",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        listaUsuarios = res;
        console.log("success");

    });

    request.fail(function (jqXHR, textStatus) {
        console.log("fail");
    });

    return listaUsuarios;
}

let crearFavoritos = () => {
    window.location.assign("favoritos.html");
}
let crearMenu = () => {
    //Obtiene el usuario del localStorage
    let usuario = JSON.parse(localStorage.getItem('cliente'));
    if (usuario == "Notlogin") {
        window.location.assign("pages-error-404.html");
    } else {
        let listaUsuarios = consultarListaMenuPadre();

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].emailUsuario == usuario) {
                document.querySelector("#imgPerfil").src = listaUsuarios[i].fotoUsuario;
                document.querySelector("#nombrePerfil1").innerHTML = listaUsuarios[i].nombreUsuario + " " + listaUsuarios[i].apellidoUsuario;

                document.querySelector("#imgPerfil2").src = listaUsuarios[i].fotoUsuario;
                document.querySelector("#nombrePerfil2").innerHTML = listaUsuarios[i].nombreUsuario + " " + listaUsuarios[i].apellidoUsuario;
                document.querySelector("#correo").innerHTML = listaUsuarios[i].emailUsuario;

            }
        }
    }
    let listaCentros = consultar_listaCentrosAdmin();
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
    for (let i = 0; i < listaCentros.length; i++) {
        if (listaCentros[i].cedJuridica == cedulaJuridica) {
            document.querySelector("#nomCentro").innerHTML = listaCentros[i].nombreCentro;
        }
    }

}

let enviarBoletin = () => {
    //Obtiene el usuario del localStorage
    let usuario = JSON.parse(localStorage.getItem('cliente'));
    //Obtener centro
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));

    //Obtener boletín
    let boletines = consultar_boletin();
    let boletin;
    for (let i = 0; i < boletines.length; i++) {
        if (boletines[i].cedulaJuridica == cedulaJuridica) {
            boletin = boletines[i];

            enviar_MailBoletin(boletin.boletin, usuario);
        }
    }

}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_SolicitarInfo') {
        enviarBoletin();
    }
})

// cita
const input_nombre = document.querySelector('#txt_nombre');
const input_fechaCita = document.querySelector('#txt_fechaCita');
const input_horaCita = document.querySelector('#txt_horaCita');
const input_correoUsuario = document.querySelector('#txt_correoUsuario');
const btn_enviarCita = document.querySelector('#btn_enviarCita');


let validarCita = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_fechaCita.value == '') {
        error = true;
        input_fechaCita.classList.add('error_input');
    } else {
        input_fechaCita.classList.remove('error_input');
    }

    if (input_horaCita.value == '') {
        error = true;
        input_horaCita.classList.add('error_input');
    } else {
        input_horaCita.classList.remove('error_input');
    }

    if (input_correoUsuario.value == '') {
        error = true;
        input_correoUsuario.classList.add('error_input');
    } else {
        input_correoUsuario.classList.remove('error_input');
    }

    return error;
};

let obtener_datosCita = () => {

    if (validarCita() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let nombre = input_nombre.value;
        let fechaCita = input_fechaCita.value;
        let horaCita = input_horaCita.value;
        let correoUsuario = input_correoUsuario.value;

        registrar_cita(cedulaJuridica, nombre, fechaCita, horaCita, correoUsuario);

    }

};


btn_enviarCita.addEventListener('click', obtener_datosCita);

let mostrar_utilesAdministrador = () => {
    let lista_utilesAdmin = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_listaUtiles",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_utilesAdmin = res;
        // console.log("success");

    });

    request.fail(function (jqXHR, textStatus) {
        // console.log("fail");
    });

    return lista_utilesAdmin;
};

let getListaLanding = () => {

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

let crearListaLanding = (nombre) => {
    // let nombreLista = getNombreListaLanding();
    // let listaTipos = getListaTiposLanding();
    let user = JSON.parse(localStorage.getItem('centroEducativo'));
    let lista = getListaLanding();
    // document.querySelector("#txt_titulo").innerHTML = "Lista: " + nombreLista;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == user) {
            if (lista[i].nivel == nombre) {
                let nuevalista =
                    `<tr>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].cantidad + `</p>
                </td>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].tipo + `</p>
                </td>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].descripcion + `</p>
                </td>
                </tr>`

                $("#TblUtiles_" + nombre + "").append(nuevalista)
            }
        }
    }
}



let mostrarListaLanding = () => {
    let lista = mostrar_utilesAdministrador();
    let user = JSON.parse(localStorage.getItem('centroEducativo'));
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == user) {
            let listaLanding =
                "<div class=\"col-lg-3 col-md-6 float-left\">" +
                "<div class=\"card\">" +
                "<div class=\"el-card-content\">" +
                "<h3 class=\"box-title\">" + lista[i].nombre + "</h3>" +
                "<a class=\"btn waves-effect waves-light btn-rounded btn-sm btn-warning image-popup-vertical-fit\ alt=\"default\" data-toggle=\"modal\" data-target=\"#nombreLista" + lista[i].nombre + "\" href=\"#\"><i class=\"sl-icon-magnifier\"></i>Ver</a>" +
                "<br>" +
                "</div>" +
                "</div>" +
                "</div>" +


                "<div id=\"nombreLista" + lista[i].nombre + "\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"vcenter\" aria-hidden=\"true\" style=\"display: none;\">" +
                "<div class=\"modal-dialog modal-dialog-centered\">" +
                "<div class=\"modal-content\">" +
                " <div class=\"modal-header\">" +
                "   <h4 class=\"modal-title\" id=\"vcenter\">Lista de útiles</h4>" +
                "   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>" +
                " </div>" +

                "<div class=\"modal-body pt-0\" id=\"nombreLista" + lista[i].nombre + "\">" +
                "<div class=\"card-body\">" +
                " <table class=\"tablesaw table-striped table-hover table-bordered table tablesaw-columntoggle\" data-tablesaw-mode=\"columntoggle\" id=\"tablesaw-1093\">" +
                "<thead>" +
                " <tr>" +
                "   <th>Cantidad</th>" +
                "  <th>Artículo</th>" +
                "  <th>Descripción</th>" +

                "   </tr>" +
                " </thead>" +
                "  <tbody id=\"TblUtiles_" + lista[i].nombre + "\">" +
                " </tbody>" +
                "  </table>" +
                "  </div>" +
                " </div>" +
                "</div></div></div>"


            $("#cardLista").append(listaLanding);
            crearListaLanding(lista[i].nombre);


        };
    }
};

let cerrarSesion = () => {
    localStorage.setItem('cliente', JSON.stringify("Notlogin"));
    window.location.assign("landing_page.html");
}



mostrarListaLanding();

crearMenu();
