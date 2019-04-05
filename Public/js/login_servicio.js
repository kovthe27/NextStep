'use strict'
let ubicacionUsuario;

let verificarUsuario = (pUsuario, pContrasena) => {
    let success = false;
    let usuario = null;
    let usuarios = consultar_listaUsuario();
    let centros = consultar_listaCentros();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].emailUsuario == pUsuario) {
            if (usuarios[i].contrasenaUsuario == pContrasena) {
                success = true;
                usuario = usuarios[i];
            }
        }
    }
    if(success == false){
        for (let i = 0; i < centros.length; i++) {
            if (centros[i].emailCentro == pUsuario) {
                if (centros[i].contrasenaCentro == pContrasena) {
                    success = true;
                    usuario = centros[i];
                }
            }
        }
    }
    return usuario;
}

let obtenerUsuario = (pUsuario) => {
    let success = false;
    let usuario = null;
    let usuarios = consultar_listaUsuario();
    let centros = consultar_listaCentros();

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].emailUsuario == pUsuario) {
            success = true;
            usuario = usuarios[i];
        }
    }
    if(success == false){
        for (let i = 0; i < centros.length; i++) {
            if (centros[i].emailCentro == pUsuario) {
                success = true;
                usuario = centros[i];
            }
        }
    }
    return usuario;
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

let consultar_listaCentros = () => {
    let lista_usuarios = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/consultar_centro",
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

let redireccionarUsuario = (pinfoUsuario) => {
    
    if (pinfoUsuario.tipo == "Padre") {
        bitacora(pinfoUsuario.emailUsuario, "Inicio de sesión", "Sistema operativo: " + navigator.platform);
        window.location.assign("principal_padres.html");
    } else {
        if (pinfoUsuario.tipo == "Administrador") {
            bitacora(pinfoUsuario.emailUsuario, "Inicio de sesión", "Sistema operativo: " + navigator.platform);
            window.location.assign("principal_administrador.html");
        } else {
            bitacora(pinfoUsuario.emailCentro, "Inicio de sesión", "Sistema operativo: " + navigator.platform);
            localStorage.setItem('centroEducativo', JSON.stringify(pinfoUsuario.cedJuridica));
            window.location.assign("principal_CentroEducativo.html");
        }
    }

}

let reestablecerContrasena_Padre = (pemail, pcontrasena) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizarcontrasena_Padre",
        method: "POST",
        data: {
            email : pemail,
            contrasena : pcontrasena
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });

      request.done(function (res) {
        swal.fire({
          type: 'success',
          title: 'La contraseña ha sido reestablecida',
          onClose: () => {
            redireccionarUsuario(res.usuario);
          }
        });
      });
}

let reestablecerContrasena_Centro = (pemail, pcontrasena) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/actualizarcontrasena_Centro",
        method: "POST",
        data: {
            email : pemail,
            contrasena : pcontrasena
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
      });

      request.done(function (res) {
        swal.fire({
          type: 'success',
          title: 'La contraseña ha sido reestablecida',
          onClose: () => {
            redireccionarUsuario(res.usuario);
          }
        });
      });
}



