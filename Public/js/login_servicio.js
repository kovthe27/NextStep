'use strict'

let verificarUsuario = (pUsuario, pContrasena) => {
    let success = false;
    let usuarios = consultar_listaUsuario();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].emailUsuario == pUsuario) {
            if (usuarios[i].contrasenaUsuario == pContrasena) {
                success = true;
            }
        }
    }
    return success;
}

let consultar_listaUsuario = () => {
    let lista_usuarios = [];

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
        lista_usuarios = res;
        console.log("success");

    });

    request.fail(function (jqXHR, textStatus) {
        console.log("fail");
    });

    return lista_usuarios;
}

let cargarUsuario = (pUsuario) => {
    let usuarios = consultar_listaUsuario();
    let tipo;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].emailUsuario == pUsuario) {
            tipo = usuarios[i].tipo;
        }
    }
    if (tipo == "Padre") {
        window.location.assign("principal_padres.html");
    } else {
        if (tipo == "Administrador") {
            window.location.assign("principal_administrador.html");
        } else {
            if (tipo == "Centro") {
                window.location.assign("principal_CentroEducativo.html");
            }
        }
    }

}