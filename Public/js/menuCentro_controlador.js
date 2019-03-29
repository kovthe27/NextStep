'use strcit';

let crearMenuCentro = () => {
    //Obtiene el usuario del localStorage
    let usuario = JSON.parse(localStorage.getItem('centroEducativo'));
    if (usuario == "Notlogin") {
        window.location.assign("pages-error-404.html");
    } else {
        let listaUsuarios = consultar_listaCentrosAdmin();

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].cedJuridica == usuario) {
                document.querySelector("#imgPerfil").src = listaUsuarios[i].fotoCentro;
                document.querySelector("#nombrePerfil1").innerHTML = listaUsuarios[i].nombreCentro;
                document.querySelector("#nomCentro").innerHTML = listaUsuarios[i].nombreCentro;

                document.querySelector("#imgPerfil2").src = listaUsuarios[i].fotoCentro;
                document.querySelector("#nombrePerfil2").innerHTML = listaUsuarios[i].nombreCentro;
                document.querySelector("#correo").innerHTML = listaUsuarios[i].emailCentro;

            }
        }
    }

}

let cerrarSesion = () =>{
        localStorage.setItem('centroEducativo', JSON.stringify("Notlogin"));
        window.location.assign("landing_page.html");
}

crearMenuCentro();