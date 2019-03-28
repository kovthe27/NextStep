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

let verPerfilCentro = (cedulaJuridica) =>{
    localStorage.setItem('centroEducativo_admin', JSON.stringify(cedulaJuridica));
    window.location.assign("perfil_CentroEducativo.html");;

}

//Se construye el menu automaticamente con el usuasio en el local storage
crearMenu();
cargarCentros();