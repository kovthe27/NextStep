'use strict';

const input_NombreContacto = document.querySelector('#txt_NombreContacto');
const input_IdContacto = document.querySelector('#txt_IdContacto');
const input_EmailContacto = document.querySelector('#txt_EmailContacto');
const input_DptoContacto = document.querySelector('#txt_DptoContacto');
const input_TelContacto = document.querySelector('#txt_TelContacto');
const input_ExtContacto = document.querySelector('#txt_ExtContacto');
const input_img = document.querySelector('#imgFoto');
const carga_img = document.querySelector('#cargarImagen');

//const boton_RegistroCentro = document.querySelector('#btn_RegistrarCentro');

let validarContacto = () => {
    let error = false;

    if (input_NombreContacto.value == '') {
        error = true;
        input_NombreContacto.classList.add('error_input');
    } else {
        input_NombreContacto.classList.remove('error_input');
    }

    if (input_IdContacto.value == '') {
        error = true;
        input_IdContacto.classList.add('error_input');
    } else {
        input_IdContacto.classList.remove('error_input');
    }

    if (input_EmailContacto.value == '') {
        error = true;
        input_EmailContacto.classList.add('error_input');
    } else {
        input_EmailContacto.classList.remove('error_input');
    }

    if (input_DptoContacto.value == '') {
        error = true;
        input_DptoContacto.classList.add('error_input');
    } else {
        input_DptoContacto.classList.remove('error_input');
    }

    if (input_TelContacto.value == '') {
        error = true;
        input_TelContacto.classList.add('error_input');
    } else {
        input_TelContacto.classList.remove('error_input');
    }

    return error;
};

let obtener_datosContacto = (centro_id) => {

    if (validarContacto() == false) {
        // Se ejecuta solo si la validación no da error
        let nombreEncargado = input_NombreContacto.value;
        let idEncargado = input_IdContacto.value;
        let emailEncargado = input_EmailContacto.value;
        let dptoEncargado = input_DptoContacto.value;
        let telEncargado = input_TelContacto.value;
        let extEncargado = input_ExtContacto.value;
        let fotoEncargado = input_imagen.src;
        let centroEducativoId = centro_id;
        debugger;
        registrar_Contacto(nombreEncargado, idEncargado, emailEncargado,  dptoEncargado, telEncargado, extEncargado,fotoEncargado, centroEducativoId);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'El contacto no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

//boton_RegistroCentro.addEventListener('click', obtener_datosContacto);