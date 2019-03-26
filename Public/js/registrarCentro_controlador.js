'use strict';

const input_NombreCentro = document.querySelector('#txt_NombreCentro');
const input_NombreComercial = document.querySelector('#txt_NombreComercial');
const input_CedJuridica = document.querySelector('#txt_CedJuridica');
const input_EmailCentro = document.querySelector('#txt_EmailCentro');
const input_TelCentro = document.querySelector('#txt_TelCentro');
const input_FaxCentro = document.querySelector('#txt_FaxCentro');
const input_AnnoCentro = document.querySelector('#txt_AnnoCentro');
const input_SitioWeb = document.querySelector('#txt_SitioWeb');
const input_ProvinciaCentro = document.querySelector('#slt_provincias');
const input_CantonCentro = document.querySelector('#slt_cantones');
const input_DistritoCentro = document.querySelector('#slt_distritos');
const input_DireccionCentro = document.querySelector('#txt_DireccionCentro');
const input_TipoCentro = document.querySelector('#slt_TipoCentro');
const input_GradoAcademico = document.querySelector('#slt_GradoAcademico');
const input_RefHistorica = document.querySelector('#txt_RefHistorica');
const input_Archivos = document.querySelector('#txt_Archivos');
const input_imagen = document.querySelector('#imgFoto');
const carga_imagen = document.querySelector('#cargarImagen');

const boton_RegistroCentro = document.querySelector('#btn_RegistrarCentro');

let validar = () => {
    let error = false;

    if (input_NombreCentro.value == '') {
        error = true;
        input_NombreCentro.classList.add('error_input');
    } else {
        input_NombreCentro.classList.remove('error_input');
    }

    if (input_NombreComercial.value == '') {
        error = true;
        input_NombreComercial.classList.add('error_input');
    } else {
        input_NombreComercial.classList.remove('error_input');
    }

    if (input_CedJuridica.value == '') {
        error = true;
        input_CedJuridica.classList.add('error_input');
    } else {
        input_CedJuridica.classList.remove('error_input');
    }

    if (input_EmailCentro.value == '') {
        error = true;
        input_EmailCentro.classList.add('error_input');
    } else {
        input_EmailCentro.classList.remove('error_input');
    }

    if (input_TelCentro.value == '') {
        error = true;
        input_TelCentro.classList.add('error_input');
    } else {
        input_TelCentro.classList.remove('error_input');
    }

    if (input_AnnoCentro.value == '') {
        error = true;
        input_AnnoCentro.classList.add('error_input');
    } else {
        input_AnnoCentro.classList.remove('error_input');
    }

    if (input_ProvinciaCentro.value == '') {
        error = true;
        input_ProvinciaCentro.classList.add('error_input');
    } else {
        input_ProvinciaCentro.classList.remove('error_input');
    }

    if (input_CantonCentro.value == '') {
        error = true;
        input_CantonCentro.classList.add('error_input');
    } else {
        input_CantonCentro.classList.remove('error_input');
    }

    if (input_DistritoCentro.value == '') {
        error = true;
        input_DistritoCentro.classList.add('error_input');
    } else {
        input_DistritoCentro.classList.remove('error_input');
    }

    if (input_DireccionCentro.value == '') {
        error = true;
        input_DireccionCentro.classList.add('error_input');
    } else {
        input_DireccionCentro.classList.remove('error_input');
    }

    if (input_TipoCentro.value == '') {
        error = true;
        input_TipoCentro.classList.add('error_input');
    } else {
        input_TipoCentro.classList.remove('error_input');
    }

    if (input_GradoAcademico.value == '') {
        error = true;
        input_GradoAcademico.classList.add('error_input');
    } else {
        input_GradoAcademico.classList.remove('error_input');
    }

    if (input_RefHistorica.value == '') {
        error = true;
        input_RefHistorica.classList.add('error_input');
    } else {
        input_RefHistorica.classList.remove('error_input');
    }

    return error;
};

let obtener_datosCentro = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let nombreCentro = input_NombreCentro.value;
        let nombreComercial = input_NombreComercial.value;
        let cedJuridica = input_CedJuridica.value;
        let emailCentro = input_EmailCentro.value;
        let telCentro = input_TelCentro.value;
        let faxCentro = input_FaxCentro.value;
        let annoFundCentro = input_AnnoCentro.value;
        let sitioWeb = input_SitioWeb.value;
        let provinciaCentro = input_ProvinciaCentro.value;
        let cantonCentro = input_CantonCentro.value;
        let distritoCentro = input_DistritoCentro.value;
        let direccionCentro = input_DireccionCentro.value;
        let tipoCentro = input_TipoCentro.value;
        let gradoAcademico = input_GradoAcademico.value;
        let referenciaHistorica = input_RefHistorica.value;
        let archivosCentro = input_Archivos.value;
        let fotoCentro = input_imagen.src;
     
        registrar_Centro(nombreCentro, nombreComercial, cedJuridica,  emailCentro, telCentro, faxCentro, annoFundCentro, sitioWeb, provinciaCentro, cantonCentro, distritoCentro, direccionCentro, tipoCentro, gradoAcademico, referenciaHistorica, archivosCentro, fotoCentro);
        
    } else {
        swal.fire({
            type: 'warning',
            title: 'El centro educativo no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};

boton_RegistroCentro.addEventListener('click', obtener_datosCentro);
