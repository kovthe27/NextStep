'use strcit';

const select_provincias = document.querySelector('#slt_provincias');
const select_cantones = document.querySelector('#slt_cantones');
const select_distritos = document.querySelector('#slt_distritos');


let llenar_provincias = () => {

    for (let i = 0; i < provincias.length; i++) {
        let nuevaOpcion = new Option(provincias[i]['nombre']);
        nuevaOpcion.value = provincias[i]['idProvincia'];
        select_provincias.appendChild(nuevaOpcion);
    }
};

let llenar_cantones = () => {
    let provincia = select_provincias.value;
    select_cantones.innerHTML = '';

    for (let i = 0; i < cantones.length; i++) {
        if (provincia == cantones[i]['Provincia_idProvincia']) {
            let nuevaOpcion = new Option(cantones[i]['nombre']);
            nuevaOpcion.value = cantones[i]['idCanton'];
            select_cantones.appendChild(nuevaOpcion);
        }

    }
};

let llenar_distritos = () => {
    let cantones = select_cantones.value;
    select_distritos.innerHTML = '';

    for (let i = 0; i < distritos.length; i++) {
        if (cantones == distritos[i]['Canton_idCanton']) {
            let nuevaOpcion = new Option(distritos[i]['nombre']);
            nuevaOpcion.value = distritos[i]['nombre'];
            select_distritos.appendChild(nuevaOpcion);
        }

    }
};

select_provincias.addEventListener('change', llenar_cantones);
select_cantones.addEventListener('change', llenar_distritos);

llenar_provincias();

let crearMenu = () => {
    //Obtiene el usuario del localStorage
    let usuario = getUsuario();
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

}

let cerrarSesion = () => {
    localStorage.setItem('cliente', JSON.stringify("Notlogin"));
    window.location.assign("landing_page.html");
}
let crearFavoritos = () => {
    window.location.assign("favoritos.html");
}

let cargarCentros = () => {
    let listaCentros = consultarListaCentrosPadres();

    for (let i = 0; i < listaCentros.length; i++) {

        let cardCentro =
        `<div class="col-lg-3 mt-4 col-md-6">
        <div class="card">
            <div class="el-card-item bounce animated">
                <div class="el-card-avatar el-overlay-1"> <img src="`+ listaCentros[i].fotoCentro + `" alt="user" width=100%>
                    <div class="el-overlay scrl-up">
                        <ul class="el-info">
                            <li><a class="btn default btn-outline image-popup-vertical-fit" href="`+ listaCentros[i].fotoCentro + `"><i class="sl-icon-magnifier"></i></a></li>
                            <li><a class="btn default btn-outline" href="javascript:verPerfil(`+ listaCentros[i].cedJuridica + `)"><i class=" fas fa-arrow-alt-circle-right"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="box-title">`+ listaCentros[i].nombreCentro + `</h3> <small>` + listaCentros[i].emailCentro + `</small>
                    <br>
                    <hr class="orange">
                    <a href="javascript:agregarFavorito(`+listaCentros[i].cedJuridica+`)" class="text-warning text-small float-left">Agregar a favoritos</a>
                        <p class="float-right"><i class="fas fa-heart"></i></p>
                </div>
                    
            </div>
            </div>
    </div>`


        $(CentrosUser).append(cardCentro);
        console.log(listaCentros[0].nombreCentro);
    }
}

let cargarFavoritos = () => {
    let listaFavoritos = consultarListaFavoritosPadres();
    let usuario = getUsuario();

    for (let i = 0; i < listaFavoritos.length; i++) {
        if (listaFavoritos[i].correo == usuario) {
            let fotoCentro = getFotoCentro(listaFavoritos[i].cedulaJuridica);
            let nombreCentro = getNombreCentro(listaFavoritos[i].cedulaJuridica);
            let correoCentro = getCorreoCentro(listaFavoritos[i].cedulaJuridica);

            let vcard =
                `<div class="col-lg-3 mt-4 col-md-6">
            <div class="card">
                <div class="el-card-item">
                    <div class="el-card-avatar el-overlay-1"> <img src="`+ fotoCentro + `" alt="user">
                        <div class="el-overlay scrl-up">
                            <ul class="el-info">
                                <li><a class="btn default btn-outline image-popup-vertical-fit" href="`+ fotoCentro + `"><i class="sl-icon-magnifier"></i></a></li>
                                <li><a class="btn default btn-outline" href="javascript:void(0);"><i class="sl-icon-link"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="el-card-content">
                        <h3 class="box-title">`+ nombreCentro + `</h3> <small>` + correoCentro + `</small>
                        <br> </div>
                </div>
            </div>
        </div>`

            $(favoritosPadres).append(vcard);
        }
    }
}

let verPerfilCentro = (cedulaJuridica) => {
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.location.assign("perfil_Centro-padre.html");;

}

let agregarFavorito = (cedulaJuridica) => {
    let usuario = getUsuario();
    registrarFavorito(usuario, cedulaJuridica);
}

//Se construye el menu automaticamente con el usuasio en el local storage
crearMenu();
cargarCentros();



let filtrar = () => {
    let listafiltrada = [];
    // Grado 
    if (document.querySelector("#customCheck1").checked) {
        let nueva2 = filtroGrado("Primaria");
        for (let i = 0; i < nueva2.length; i++) {
            listafiltrada.push(nueva2[i]);
        }
    }
    if (document.querySelector("#customCheck2").checked) {
        let nueva2 = filtroGrado("Secundaria");
        for (let i = 0; i < nueva2.length; i++) {
            listafiltrada.push(nueva2[i]);
        }
    }
    if (document.querySelector("#customCheck3").checked) {
        let nueva2 = filtroGrado("Prescolar");
        for (let i = 0; i < nueva2.length; i++) {
            listafiltrada.push(nueva2[i]);
        }
    }
    if (document.querySelector("#customCheck3").checked == false) {
        if (document.querySelector("#customCheck2").checked == false) {
            if (document.querySelector("#customCheck1").checked == false) {
                listafiltrada = consultarListaCentrosPadres();
            }
        }
    }

    //Tipo
    let listaTipos = [];
    if (document.querySelector("#publica").checked) {
        let nueva2 = filtroTipo(listafiltrada, "Público");
        for (let i = 0; i < nueva2.length; i++) {
            listaTipos.push(nueva2[i]);
        }
    }
    if (document.querySelector("#privada").checked) {
        let nueva2 = filtroTipo(listafiltrada, "Privado");
        for (let i = 0; i < nueva2.length; i++) {
            listaTipos.push(nueva2[i]);
        }
    }
    if (document.querySelector("#científico").checked) {
        let nueva2 = filtroTipo(listafiltrada, "Científico");
        for (let i = 0; i < nueva2.length; i++) {
            listaTipos.push(nueva2[i]);
        }
    }
    if (document.querySelector("#tecnico").checked) {
        let nueva2 = filtroTipo(listafiltrada, "Técnico");
        for (let i = 0; i < nueva2.length; i++) {
            listaTipos.push(nueva2[i]);
        }
    }
    if (document.querySelector("#semi").checked) {
        let nueva2 = filtroTipo(listafiltrada, "Semi-Privado");
        for (let i = 0; i < nueva2.length; i++) {
            listaTipos.push(nueva2[i]);
        }
    }
    if (document.querySelector("#publica").checked == false) {
        if (document.querySelector("#privada").checked == false) {
            if (document.querySelector("#científico").checked == false) {
                if (document.querySelector("#tecnico").checked == false) {
                    if (document.querySelector("#semi").checked == false) {
                        listaTipos = listafiltrada;
                    }
                }
            }
        }
    }
    //Provincia
    if (document.querySelector("#slt_provincias").value == "") {
        return listaTipos;
    } else {
        let filtroProvincia = filtrarProvincia(listaTipos, document.querySelector("#slt_provincias").value);

        //Canton
        let filtroCanton = [];
        if (document.querySelector("#slt_cantones").value == "") {
            filtroCanton = filtroProvincia
        } else {
            filtroCanton = filtrarCanton(filtroProvincia, document.querySelector("#slt_cantones").value);
            let filtroDistrito = filtrarDistritos(filtroCanton, document.querySelector("#slt_distritos").value);
            return filtroDistrito;
        }
    }

}

let filtroFinal = () => {
    document.querySelector("#CentrosUser").innerHTML = "";
    let listaFiltrada = filtrar();

    for (let i = 0; i < listaFiltrada.length; i++) {
        console.log(listaFiltrada);
        console.log(listaFiltrada[i].nombreCentro);

        let vcard =
            `<div class="col-lg-3 mt-4 col-md-6">
            <div class="card">
                <div class="el-card-item bounce animated">
                    <div class="el-card-avatar el-overlay-1"> <img src="`+ listaFiltrada[i].fotoCentro + `" alt="user" width=100%>
                        <div class="el-overlay scrl-up">
                            <ul class="el-info">
                                <li><a class="btn default btn-outline image-popup-vertical-fit" href="`+ listaFiltrada[i].fotoCentro + `"><i class="sl-icon-magnifier"></i></a></li>
                                <li><a class="btn default btn-outline" href="javascript:verPerfil(`+ listaFiltrada[i].cedJuridica + `);"><i class=" fas fa-arrow-alt-circle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="box-title">`+ listaFiltrada[i].nombreCentro + `</h3> <small>` + listaFiltrada[i].nombreCentro + `</small>
                        <br>
                        <hr class="orange">
                        <a href="javascript:agregarFavorito(`+listaFiltrada[i].cedJuridica+`)" class="text-warning text-small float-left">Agregar a favoritos</a>
                            <p class="float-right"><i class="fas fa-heart"></i></p>
                    </div>
                        
                </div>
                </div>
        </div>`

        $(CentrosUser).append(vcard);
    }
}

let verPerfil = (cedulaJuridica) => {
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.open("perfil_Centro-padre.html",'_blank')
}

document.querySelector("#btnFiltrar").addEventListener('click', filtroFinal)