'use strict';

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
    // document.querySelector("#cardMatricula").innerHTML = "";

    if (validarMatricula() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let titulo = input_tituloMatricula.value;
        let descripcion = input_descripcionMatricula.value;

        registrar_infoMatricula(cedulaJuridica, titulo, descripcion);
    }

    window.location.reload();

    // mostrar_datosMatricula();

};


btn_enviarMatricula.addEventListener('click', obtener_datosMatricula);


const card_matricula = document.querySelector('#cardMatricula');

let mostrar_datosMatricula = () => {
    let matricula = consultar_infoMatricula();
    // console.log(servicio);

    for (let i = 0; i < matricula.length; i++) {
        if (matricula[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var card = "<div class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">" +
                "<div class=\"ribbon-wrapper border card\">" +
                "<div class=\"ribbon ribbon-default\">" + matricula[i].titulo + "</div>" +
                // dropdown
                "<div class=\"btn-group float-left\">" +
                "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
                "<i class=\"fas fa-ellipsis-v\"></i>" +
                "</button>" +
                "<div class=\"dropdown-menu dropdown-menu-right\">" +
                "<a class=\"dropdown-item\" alt=\"default\" data-toggle=\"modal\" id=\"editarNoticia\"  data-target=\"#agregarNoticia\"  >Editar</a>" +
                "<a class=\"dropdown-item\" href=\"#\" >Eliminar</a>" +
                "</div></div>" +

                "<p class=\"ribbon-content\">" + matricula[i].descripcion + "</p>" +
                "</div></div>";

            $("#cardMatricula").append(card);
        }
    };

};


mostrar_datosMatricula();