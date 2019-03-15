'use strict';

let crearMenu = () =>{
    //Obtiene el usuario del localStorage
    let usuario = getUsuario();

    //Obtiene el nombre y apellido del usuario    
    let nombreUsuario = getNombreUsuario(usuario);
    let apellidoUsuario = getApeliidoUsuario(usuario);

    //Setea el nombre del usuario en el perfil
    document.querySelector("#txtUsuario").innerHTML = nombreUsuario + " " +apellidoUsuario
}


//Se construye el menu automaticamente con el usuasio en el local storage
crearMenu();