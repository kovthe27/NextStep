'use strict';

let getUsuario = () => {
    let usuario;
    usuario = JSON.parse(localStorage.getItem('cliente'));
    return usuario;
}