'use strcit';

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

let cargarCentros = () => {
    let listaCentros = consultarListaCentrosPadres();

    for (let i = 0; i<listaCentros.length; i++) {

        let cardCentro =
            `<div class="col-lg-3 col-md-6 float-left">
            <div class="card">
                <div class="card-body">
                    <div class="el-card-item">
                        <div class="image mb-3 mt-4">
                            <img src="`+listaCentros[i].fotoCentro+`" width=100%>
                        </div>
                        <div class="el-card-content mb-3">
                            <h4 class="box-title"><a href=javascript:verPerfilCentro(`+listaCentros[i].cedJuridica+`)>`+listaCentros[i].nombreCentro+`</a></h4> <small>`+listaCentros[i].emailCentro+`</small>
                            <br>
                        </div>
                        <hr class="orange">
                        <div class="mb-3 botones">
                            <a href="#" class="text-warning text-small float-left">Agregar a favoritos</a>
                            <p class="float-right"><i class="fa fa-star"></i> 3</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>`

        $(inicioPadres).append(cardCentro);
        console.log(listaCentros[0].nombreCentro);
    }
}

<<<<<<< HEAD
<<<<<<< HEAD
let verPerfilCentro = (cedulaJuridica) =>{
    localStorage.setItem('centroEducativo_admin', JSON.stringify(cedulaJuridica));
    window.location.assign("perfil_CentroEducativo.html");;

=======
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
=======
let verPerfilCentro = (cedulaJuridica) =>{
>>>>>>> parent of ff7e3a6... merge development branch en branch confirmarCuenta
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.location.assign("perfil_CentroEducativo.html");;

}

<<<<<<< HEAD
let agregarFavorito = (cedulaJuridica) => {
    let usuario = getUsuario();
    registrarFavorito(usuario, cedulaJuridica);
>>>>>>> parent of 469c5f3... Merge pull request #38 from kovthe27/cargarMasInfoCentro
}

=======
>>>>>>> parent of ff7e3a6... merge development branch en branch confirmarCuenta
//Se construye el menu automaticamente con el usuasio en el local storage
crearMenu();
cargarCentros();