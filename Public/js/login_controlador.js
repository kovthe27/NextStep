'use strict';

const input_usuario = document.querySelector("txtUsuario");
const input_contrasena = document.querySelector("txtContrasena");
const btn_ingresar = document.querySelector("btnIngresar");

let obtenerDatos = () => {
    let usuario = input_usuario.value;
    let contrasena = input_contrasena.value;

    if(verificarUsuario(usuario, contrasena)==true){

    }else{
        
    }
}
