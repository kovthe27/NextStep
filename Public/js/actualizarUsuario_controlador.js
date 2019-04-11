'use strict';

const input_NombrePadre = document.querySelector('#txt_NombrePadre');
const input_ApellidoPadre = document.querySelector('#txt_1ApellidoPadre');
const input_SegApellidoPadre = document.querySelector('#txt_2ApellidoPadre');
const input_IdPadre = document.querySelector('#txt_IdPadre');
const input_NacionPadre = document.querySelector('#txt_NacionPadre');
const input_DireccionPadre = document.querySelector('#txt_DireccionPadre');
const input_EmailPadre = document.querySelector('#txt_EmailPadre');
const input_TelPadre = document.querySelector('#txt_TelPadre');
const input_CantHijos = document.querySelector('#txt_CantHijos');
const input_imagen = document.querySelector('#imgFoto');
const carga_imagen = document.querySelector('#cargarImagen');
const input_ProvinciaPadre = document.querySelector('#slt_provincias');
const input_CantonPadre = document.querySelector('#slt_cantones');
const input_DistritoPadre = document.querySelector('#slt_distritos');
const boton_actualizarPadre = document.querySelector('#btn_ActualizarPadre');

let usuario_logueado_id = JSON.parse(localStorage.getItem('usuario_logueado_id'));
let padre = buscar_Padre(usuario_logueado_id);
let mostrar_datos = () =>{
    input_NombrePadre.value = padre['nombreUsuario'];
    input_ApellidoPadre.value = padre['apellidoUsuario'];
    input_SegApellidoPadre.value = padre['seg_ApellidoUsuario'];
    input_IdPadre.value = padre['idUsuario'];
    input_NacionPadre.value = padre['nacionUsuario'];
    input_DireccionPadre.value = padre['direccionUsuario'];
    input_EmailPadre.value = padre['emailUsuario'];
    input_TelPadre.value = padre['telUsuario'];
    input_CantHijos.value = padre['cantHijos'];
    input_imagen.src = padre['fotoUsuario'];

    let opciones_provincias = document.querySelectorAll('#slt_provincias option');

    for(let i = 0; i < opciones_provincias.length; i++){
        
        if(opciones_provincias[i].textContent == padre['provinciaUsuario']){
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_cantones = document.querySelectorAll('#slt_cantones option');

    for(let i = 0; i < opciones_cantones.length; i++){
        if(opciones_cantones[i].textContent == padre['cantonUsuario']){
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
    }

    let opciones_distritos = document.querySelectorAll('#slt_distritos option');

    for(let i = 0; i < opciones_distritos.length; i++){
        if(opciones_distritos[i].textContent == padre['distritoUsuario']){
            opciones_distritos[i].selected = true;
            
        }
    }
};

if(padre){
    mostrar_datos();
}

let obtener_datos = () =>{

    let nombrePadre = input_NombrePadre.value;
    let apellidoPadre = input_ApellidoPadre.value;
    let seg_ApellidoPadre = input_SegApellidoPadre.value;
    let idPadre = input_IdPadre.value;
    let nacionPadre = input_NacionPadre.value;
    let direccionPadre = input_DireccionPadre.value;
    let emailPadre = input_EmailPadre.value;
    let telPadre = input_TelPadre.value;
    let cantHijos = input_CantHijos.value;
    let fotoPadre = input_imagen.src;
    let provinciaUsuario = input_ProvinciaPadre.selectedOptions[0].textContent;
    let cantonUsuario = input_CantonPadre.selectedOptions[0].textContent;
    let distritoUsuario = input_DistritoPadre.selectedOptions[0].textContent;

    actualizar_padre(nombrePadre, apellidoPadre, seg_ApellidoPadre, idPadre, nacionPadre, direccionPadre, emailPadre, telPadre, cantHijos, fotoPadre, provinciaUsuario,cantonUsuario, distritoUsuario, usuario_logueado_id);
    
};

boton_actualizarPadre.addEventListener('click', obtener_datos);