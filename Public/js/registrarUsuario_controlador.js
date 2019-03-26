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
const boton_RegistroPadre = document.querySelector('#btn_RegistrarPadre');

let validar = () => {
    let error = false;

    if (input_NombrePadre.value == '') {
        error = true;
        input_NombrePadre.classList.add('error_input');
    } else {
        input_NombrePadre.classList.remove('error_input');
    }

    if (input_ApellidoPadre.value == '') {
        error = true;
        input_ApellidoPadre.classList.add('error_input');
    } else {
        input_ApellidoPadre.classList.remove('error_input');
    }

    if (input_IdPadre.value == '') {
        error = true;
        input_IdPadre.classList.add('error_input');
    } else {
        input_IdPadre.classList.remove('error_input');
    }

    if (input_NacionPadre.value == '') {
        error = true;
        input_NacionPadre.classList.add('error_input');
    } else {
        input_NacionPadre.classList.remove('error_input');
    }

    if (input_DireccionPadre.value == '') {
        error = true;
        input_DireccionPadre.classList.add('error_input');
    } else {
        input_DireccionPadre.classList.remove('error_input');
    }

    if (input_EmailPadre.value == '') {
        error = true;
        input_EmailPadre.classList.add('error_input');
    } else {
        input_EmailPadre.classList.remove('error_input');
    }

    if (input_TelPadre.value == '') {
        error = true;
        input_TelPadre.classList.add('error_input');
    } else {
        input_TelPadre.classList.remove('error_input');
    }

    if (input_ProvinciaPadre.value == '') {
        error = true;
        input_ProvinciaPadre.classList.add('error_input');
    } else {
        input_ProvinciaPadre.classList.remove('error_input');
    }

    if (input_CantonPadre.value == '') {
        error = true;
        input_CantonPadre.classList.add('error_input');
    } else {
        input_CantonPadre.classList.remove('error_input');
    }

    if (input_DistritoPadre.value == '') {
        error = true;
        input_DistritoPadre.classList.add('error_input');
    } else {
        input_DistritoPadre.classList.remove('error_input');
    }



    return error;
};

let obtener_datosPadre = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
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

     
        registrar_Padre(nombrePadre, apellidoPadre, seg_ApellidoPadre,  idPadre, nacionPadre, direccionPadre, emailPadre, telPadre, cantHijos, fotoPadre);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'El usuario no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_RegistroPadre.addEventListener('click', obtener_datosPadre);