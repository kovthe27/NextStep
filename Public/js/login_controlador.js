'use strict';

const input_usuario = document.querySelector("#txtUsuario");
const input_contrasena = document.querySelector("#txtContrasena");
const btn_ingresar = document.querySelector("#btnIngresar");

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

    if (validarInputs(usuario, contrasena) == false) {
        //Verifica si es usuario esta en la base de datos    
        if (verificarUsuario(usuario, contrasena) == true) {

            //Guarda el user validado en localstorage 
            localStorage.setItem('cliente', JSON.stringify(usuario));
            //Carga el menu dependiendo del tipo de usuario
            cargarUsuario(usuario);
        } else {
            //alerta de contrasena o usuario incorrecto
            swal("Su nombre de usuario o contrasena es incorrecta! Verifique la informacion e intente de nuevo");
        }
    } else {
        swal("Oops", "Por favor verifique los espacios en rojo", "error")
    }
};

//onload espera a que la pagina cargue completament
window.onload = () => {
    btn_ingresar.addEventListener('click', obtenerDatos);
}