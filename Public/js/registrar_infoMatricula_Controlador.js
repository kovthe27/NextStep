'use strict';

// import { registrar_infoMatricula, consultar_infoMatricula } from "../../API/componentes/registrar_infoMatricula/registrar_infoMatricula.api";

const input_tituloMatricula = document.querySelector('#txt_tituloMatricula');
const input_descripcionMatricula = document.querySelector('#txt_descripcionMatricula');
const btn_enviarMatricula = document.querySelector('#btn_enviarMatricula');

let validarMatricula = () => {
    let error = false;

    if (input_tituloMatricula.value == '') {
        error = true;
        input_tituloMatricula.classList.add('error_input');
    } else {
        input_tituloMatricula.classList.remove('error_input');
    }

    if (input_descripcionMatricula.value == '') {
        error = true;
        input_descripcionMatricula.classList.add('error_input');
    } else {
        input_descripcionMatricula.classList.remove('error_input');
    }

    return error;
};

let obtener_datosMatricula = () => {

    if (validarMatricula() == false) {
        // Se ejecuta solo si la validación no da error
        let titulo = input_tituloMatricula.value;
        let descripcion = input_descripcionMatricula.value;

        swal.fire({
            type: 'success',
            title: 'La información de matrícula fue creada',
            text: 'Muchas gracias'
        });

        registrar_infoMatricula(titulo, descripcion);
        window.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'La información de matrícula no fue creada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_enviarMatricula.addEventListener('click', obtener_datosMatricula);


const card_matricula = document.querySelector('#cardMatricula');

let mostrar_datosMatricula = () =>{
    let matricula = consultar_infoMatricula();
    // console.log(servicio);

    for(let i = 0; i < matricula.length; i++){
        var card = "<div class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">"+
        "<div class=\"ribbon-wrapper card\">"+
            "<div class=\"ribbon ribbon-warning\">"+matricula[i].titulo+"</div>"+
            "<p class=\"ribbon-content\">"+matricula[i].descripcion+"</p>"+
        "</div></div>";

        $("#cardMatricula").append(card);
        matricula.reverse();
    };
    
    
};


mostrar_datosMatricula();



