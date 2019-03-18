'use strict';
const input_cedulaJuridica = document.querySelector('#txt_cedulaJuridica');
const input_descripcionCentro = document.querySelector('#txt_descripcionCentro');
const input_ubicacion = document.querySelector('#txt_ubicacion');
const input_contacto = document.querySelector('#txt_contacto');
const input_correo = document.querySelector('#txt_correo');
const input_telefono = document.querySelector('#txt_telefono');
const input_facebook = document.querySelector('#txt_facebook');
const input_instagram = document.querySelector('#txt_instagram');
const input_twitter = document.querySelector('#txt_twitter');
const input_pagina = document.querySelector('#txt_pagina');
const btn_enviarInfoCentro = document.querySelector('#btn-enviarInfo');

let validarInfo_centro = () => {
    let error = false;

    if (input_cedulaJuridica.value == '') {
        error = true;
        input_cedulaJuridica.classList.add('error_input');
    } else {
        input_cedulaJuridica.classList.remove('error_input');
    }

    if (input_descripcionCentro.value == '') {
        error = true;
        input_descripcionCentro.classList.add('error_input');
    } else {
        input_descripcionCentro.classList.remove('error_input');
    }

    if (input_ubicacion.value == '') {
        error = true;
        input_ubicacion.classList.add('error_input');
    } else {
        input_ubicacion.classList.remove('error_input');
    }

    if (input_encargado.value == '') {
        error = true;
        input_encargado.classList.add('error_input');
    } else {
        input_encargado.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }


    return error;
};

let obtener_datosCentro = () => {

    if (validarInfo_centro() == false) {
        let cedulaJuridica = input_cedulaJuridica.value;
        let descripcionCentro = input_descripcionCentro.value;
        let ubicacion = input_ubicacion.value;
        let contacto = input_contacto.value;
        let correo = input_correo.value;
        let telefono = input_telefono.value;
        let facebook = input_facebook.value;
        let instagram = input_instagram.value;
        let twitter = input_twitter.value;
        let pagina = input_pagina.value;

        registrar_acercaNosotros(cedulaJuridica, descripcionCentro, ubicacion, contacto, correo, telefono, facebook, instagram, twitter, pagina);
        swal.fire({
            type: 'warning',
            title: 'La información ha sido añadida',
            text: 'Muchas gracias'
        });

        window.location.reload();
        // $('#btn_enviarNoticia').click();

    } else {
        swal.fire({
            type: 'warning',
            title: 'La información no pudo ser añadida',
            text: 'Por favor revise los campos resaltados'
        });

    }

};


btn_enviarInfoCentro.addEventListener('click', obtener_datosCentro);




const card_acercaNosotros = document.querySelector('#cardInfo');

let mostrar_infoCentro = () => {
    let acercaNosotros = consultar_acercaNosotros();

    for (let i = 0; i < 1; i++) {
        var card_acercaNosotros = 

        // "<div id=\"cardInfo\" class=\"card-body col-md-6 float-left\">"+
        // "<h4 class=\"card-title float-left\">Acerca de nosotros</h4>"+
        "<div class=\"clearfix\"></div>"+
        "<div class=\"col-md-7 float-left\">"+
        // "<p id=\"txt_cedulaJuridica\" class=\"card-text\">"+acercaNosotros[i].cedulaJuridica+"</p><br>"+
        "<p id=\"txt_descripcionCentro\" class=\"card-text\">"+acercaNosotros[i].descripcionCentro+"</p><br>"+
            "<button class=\"btn btn-themecolor\">Agendar cita</button>"+
            "<button class=\"btn text-themecolor\">Solicitar información</button>"+
        "</div>"+
        "<div class=\"linea float-left\"></div>"+
        "<div class=\"col-md-4 float-left información\">"+
           "<p><i class=\"sl-icon-location-pin\"></i> Ubicación: <span id=\"txt_ubicacion\">"+acercaNosotros[i].ubicacion+ "</span></p>"+
            "<p><i class=\"sl-icon-user\"></i> Contacto: <span id=\"txt_contacto\">" + acercaNosotros[i].contacto + "</span></p>"+
            "<p><i class=\"sl-icon-envelope-open\"></i> Correo: <span id=\"txt_correo\">" + acercaNosotros[i].correo + "</span></p>" +
            "<p><i class=\"sl-icon-phone\"></i> Teléfono: <span id=\"txt_telefono\">" + acercaNosotros[i].telefono + "</span></p>" +
            "<a href= "+"'"+acercaNosotros[i].facebook+"'"+" id=\"txt_facebook\" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-facebook\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].instagram+"'"+" id=\"txt_instagram\" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-instagram\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].twitter+"'"+" id=\"txt_twitter\" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-twitter\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].pagina+"'"+" id=\"txt_pagina\" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-world\"></i></a>"
        "</div>"

        $("#cardInfo").append(card_acercaNosotros)
    };

};


mostrar_infoCentro();