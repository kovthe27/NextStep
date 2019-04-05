'use strict';

let crearMenu = () => {
    //Obtiene el usuario del localStorage
    let usuario = getUsuario();
    if (usuario == "Notlogin") {
        window.location.assign("pages-error-404.html");
    } else {
        let listaUsuarios = consultarListaMenuAdmin();

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].emailUsuario == usuario) {
                document.querySelector("#imgPerfil").src = listaUsuarios[i].fotoUsuario;
                document.querySelector("#nombrePerfil1").innerHTML = listaUsuarios[i].nombreUsuario;

                document.querySelector("#imgPerfil2").src = listaUsuarios[i].fotoUsuario;
                document.querySelector("#nombrePerfil2").innerHTML = "MEP Costa Rica";
                document.querySelector("#correo").innerHTML = listaUsuarios[i].emailUsuario;

            }
        }
    }

}

let cerrarSesion = () => {
    localStorage.setItem('cliente', JSON.stringify("Notlogin"));
    window.location.assign("landing_page.html");
}

//Se construye el menu automaticamente con el usuasio en el local storage
crearMenu();