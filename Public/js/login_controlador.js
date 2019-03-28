'use strict';

const input_usuario = document.querySelector("#txtUsuario");
const input_contrasena = document.querySelector("#txtContrasena");
const btn_ingresar = document.querySelector("#btnIngresar");
const input_emailUsuario = document.querySelector("#txtUsuarioReestablecer"); 
const input_contrasenaNueva = document.querySelector("#txtContrasenaNueva");
const input_cotrasenaConfirmada = document.querySelector("#txtConfirmarContrasena");
const btn_reestablecer = document.querySelector("#btnReestablecerContrasena");

//Valida que ingresaron datos en los fields de usuario y contrasena
let validarInputs = (pUsuario, pContrasena) => {
    let error = false;
    if (pUsuario == '') {
        input_usuario.classList.add('error_input');
        error = true;
    } else {
        input_usuario.classList.remove('error_input')
    }
    if (pContrasena == '') {
        input_contrasena.classList.add('error_input');
        error = true;
    } else {
        input_contrasena.classList.remove('error_input')
    }
    return error;
}

//Lee la information del login
let obtenerDatos = () => {
    let usuario = input_usuario.value;
    let contrasena = input_contrasena.value;
    let infoUsuario;

    if (validarInputs(usuario, contrasena) == false) {
        //Verifica si es usuario esta en la base de datos 
        infoUsuario = verificarUsuario(usuario, contrasena);
        if (infoUsuario) {
            //Guarda el user validado en localstorage 
            localStorage.setItem('cliente', JSON.stringify(usuario));
            //Carga el menu dependiendo del tipo de usuario
            //cargarUsuario(usuario);
            if(infoUsuario.registroCompletado) {
                redireccionarUsuario(infoUsuario);
            } else {
                window.location.assign("reestablecer_contrasena.html");
            }
            
        } else {
            //alerta de contrasena o usuario incorrecto
            swal("Su nombre de usuario o contraseña es incorrecta! Verifique la informacion e intente de nuevo");
        }
    } else {
        swal("Oops", "Por favor verifique los espacios en rojo", "error")
    }
};

let validarContrasenas = () => {
    let regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8}$/;
    let emailUsuario = input_emailUsuario.value;
    let contrasenaReestablecida = input_contrasenaNueva.value;
    let contrasenaConfirmada = input_cotrasenaConfirmada.value;
    if(regex.exec(contrasenaReestablecida)) {
        if(contrasenaReestablecida == contrasenaConfirmada) {
            let infoUsuario = obtenerUsuario(emailUsuario);
            if(infoUsuario.type === "Padre" && infoUsuario.type === "Administrador"){
                reestablecerContrasena_Padre(emailUsuario,contrasenaReestablecida);
            }else{
                reestablecerContrasena_Centro(emailUsuario,contrasenaReestablecida);
            }
        }
    }else{
        document.getElementById("msgError").style.display = "block";
    }
    
}


//onload espera a que la pagina cargue completament
if(btn_ingresar) {
    btn_ingresar.addEventListener('click', obtenerDatos);
}

if(btn_reestablecer) {
    btn_reestablecer.addEventListener('click', validarContrasenas);
}
