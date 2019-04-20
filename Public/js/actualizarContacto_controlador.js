'use strict';

const input_NombreContacto = document.querySelector('#txt_NombreContacto');
const input_IdContacto = document.querySelector('#txt_IdContacto');
const input_EmailContacto = document.querySelector('#txt_EmailContacto');
const input_DptoContacto = document.querySelector('#txt_DptoContacto');
const input_TelContacto = document.querySelector('#txt_TelContacto');
const input_ExtContacto = document.querySelector('#txt_ExtContacto');

let centro_logueado_id = JSON.parse(localStorage.getItem('centroEducativoId'));
debugger;
let contacto = buscar_contacto(centro_logueado_id);
let mostrar_datosContacto = () =>{
    console.log(centro_logueado_id);
    console.log(contacto);
    input_NombreContacto.value = contacto[0].nombreEncargado;
    input_IdContacto.value = contacto[0].idEncargado;
    input_EmailContacto.value = contacto[0].emailEncargado;
    input_DptoContacto.value = contacto[0].dptoEncargado;
    input_TelContacto.value = contacto[0].telEncargado;
    input_ExtContacto.value = contacto[0].extEncargado;
};

mostrar_datosContacto();


let obtener_datosContacto = (centro_id, pcedJuridica) =>{
    let nombreEncargado = input_NombreContacto.value;
    let idEncargado = input_IdContacto.value;
    let emailEncargado = input_EmailContacto.value;
    let dptoEncargado = input_DptoContacto.value;
    let telEncargado = input_TelContacto.value;
    let extEncargado = input_ExtContacto.value;
    let centroEducativoId = centro_id;


    actualizar_contacto(nombreEncargado, idEncargado, emailEncargado, dptoEncargado, telEncargado, extEncargado,centroEducativoId, pcedJuridica);
    
};