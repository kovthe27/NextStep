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
const input_imagen = document.querySelector('#imgFoto');
const carga_imagen = document.querySelector('#cargarImagen');
const boton_ActualizarCentro = document.querySelector('#btn_ActualizarCentro');

let usuario_logueado_id = JSON.parse(localStorage.getItem('centroEducativo'));
let centro = buscar_centro(usuario_logueado_id);
let mostrar_datos = () =>{
    console.log(usuario_logueado_id);
    console.log(centro);
    input_NombreCentro.value = centro[0].nombreCentro;
    input_NombreComercial.value = centro[0].nombreComercial;
    input_CedJuridica.value = centro[0].cedJuridica;
    input_EmailCentro.value = centro[0].emailCentro;
    input_TelCentro.value = centro[0].telCentro;
    input_FaxCentro.value = centro[0].faxCentro;
    input_AnnoCentro.value = centro[0].annoFundCentro;
    input_SitioWeb.value = centro[0].sitioWeb;
    input_DireccionCentro.value = centro[0].direccionCentro;
    input_TipoCentro.value = centro[0].tipoCentro;
    input_GradoAcademico.value = centro[0].gradoAcademico;
    input_RefHistorica.value = centro[0].referenciaHistorica;
    input_imagen.src = centro[0].fotoCentro;

    let opciones_provincias = document.querySelectorAll('#slt_provincias option');

    for(let i = 0; i < opciones_provincias.length; i++){
        
        if(opciones_provincias[i].textContent == centro['provinciaCentro']){
            opciones_provincias[i].selected = true;
            llenar_cantones();
        }
    }

    let opciones_cantones = document.querySelectorAll('#slt_cantones option');

    for(let i = 0; i < opciones_cantones.length; i++){
        if(opciones_cantones[i].textContent == centro['cantonCentro']){
            opciones_cantones[i].selected = true;
            llenar_distritos();
        }
    }

    let opciones_distritos = document.querySelectorAll('#slt_distritos option');

    for(let i = 0; i < opciones_distritos.length; i++){
        if(opciones_distritos[i].textContent == centro['distritoCentro']){
            opciones_distritos[i].selected = true;
            
        }
    }

    let opciones_grado = document.querySelectorAll('#slt_GradoAcademico option');

    for(let i = 0; i < opciones_grado.length; i++){
        if(opciones_grado[i].textContent == centro['gradoAcademico']){
            opciones_grado[i].selected = true;
        }
    }

    let opciones_TipoCentro = document.querySelectorAll('#slt_TipoCentro option');

    for(let i = 0; i < opciones_grado.length; i++){
        if(opciones_TipoCentro[i].textContent == centro['tipoCentro']){
            opciones_TipoCentro[i].selected = true;
        }
    }
};

mostrar_datos();

let obtener_datos = () =>{
    let nombreCentro = input_NombreCentro.value;
    let nombreComercial = input_NombreComercial.value;
    let cedJuridica = input_CedJuridica.value;
    let emailCentro = input_EmailCentro.value;
    let telCentro = input_TelCentro.value;
    let faxCentro = input_FaxCentro.value;
    let annoFundCentro = input_AnnoCentro.value;
    let sitioWeb = input_SitioWeb.value;
    let tipoCentro = input_TipoCentro.selectedOptions[0].textContent;
    let gradoAcademico = input_GradoAcademico.selectedOptions[0].textContent;
    let referenciaHistorica = input_RefHistorica.value;
    let provinciaCentro = input_ProvinciaCentro.selectedOptions[0].textContent;
    let cantonCentro = input_CantonCentro.selectedOptions[0].textContent;
    let distritoCentro = input_DistritoCentro.selectedOptions[0].textContent;
    let direccionCentro = input_DireccionCentro.value
    let fotoCentro = input_imagen.src;
    let archivo = pdfUrl;

    console.log(centro[0]._id);

    actualizar_centro(nombreCentro, nombreComercial, cedJuridica,  emailCentro, telCentro, faxCentro, annoFundCentro, sitioWeb, provinciaCentro, cantonCentro, distritoCentro, direccionCentro, tipoCentro, gradoAcademico, referenciaHistorica, fotoCentro, archivo, centro[0]._id);
    
};

boton_ActualizarCentro.addEventListener('click', obtener_datos);

