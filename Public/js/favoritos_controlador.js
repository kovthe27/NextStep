'use strcit';

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
                    <div class="el-card-avatar el-overlay-1"> <img src="`+fotoCentro+`" alt="user">
                        <div class="el-overlay scrl-up">
                            <ul class="el-info">
                                <li><a class="btn default btn-outline image-popup-vertical-fit" href="`+fotoCentro+`"><i class="sl-icon-magnifier"></i></a></li>
                                <li><a class="btn default btn-outline" href="javascript:verPerfil(`+listaFavoritos[i].cedulaJuridica+`);"><i class=" fas fa-arrow-alt-circle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <h3 class="box-title">`+nombreCentro+`</h3> <small>`+correoCentro+`</small>
                        <br>
                        <hr class="orange">
                        <a href="#" class="text-warning text-small float-left">Eliminar de favoritos</a>
                            <p class="float-right"><i class="fas fa-heart"></i></p>
                    </div>
                        
                </div>
                </div>
        </div>`

            $(favoritosPadres).append(vcard);
        }
    }
}

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

let verPerfil = (cedulaJuridica) => {
    localStorage.setItem('centroEducativo', JSON.stringify(cedulaJuridica));
    window.open("perfil_Centro-padre.html",'_blank')
}

cargarFavoritos();
crearMenu();