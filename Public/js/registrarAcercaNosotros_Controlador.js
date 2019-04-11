'use strict';
const input_cedulaJuridica = document.querySelector('#txt_cedulaJuridica');
const input_descripcionCentro = document.querySelector('#txt_descripcionCentro');
const input_ubicacion = document.querySelector('#txt_ubicacion');
const input_encargado = document.querySelector('#txt_contacto');
const input_correo = document.querySelector('#txt_correo');
const input_telefono = document.querySelector('#txt_telefono');
const input_facebook = document.querySelector('#txt_facebook');
const input_instagram = document.querySelector('#txt_instagram');
const input_twitter = document.querySelector('#txt_twitter');
const input_pagina = document.querySelector('#txt_pagina');
const btn_enviarInfoCentro = document.querySelector('#btn-enviarInfo');

let validarInfo_centro = () => {
    let error = false;

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
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let descripcionCentro = input_descripcionCentro.value;
        let ubicacion = input_ubicacion.value;
        let encargado = input_encargado.value;
        let correo = input_correo.value;
        let telefono = input_telefono.value;
        let facebook = input_facebook.value;
        let instagram = input_instagram.value;
        let twitter = input_twitter.value;
        let pagina = input_pagina.value;
        let estado = "Activo";

        registrar_acercaNosotros(cedulaJuridica, descripcionCentro, ubicacion, encargado, correo, telefono, facebook, instagram, twitter, pagina, estado);
        window.location.reload();
    } 
    
};


btn_enviarInfoCentro.addEventListener('click', obtener_datosCentro);




const card_acercaNosotros = document.querySelector('#cardInfo');

let mostrar_infoCentro = () => {
    let acercaNosotros = consultar_acercaNosotros();
    // let acercaEspecifico = buscar_acercaNosotros(p_id);

    for (let i = 0; i < acercaNosotros.length; i++) {
        if (acercaNosotros[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        var card_acercaNosotros = 
        "<div class=\"clearfix\"></div>"+
        "<div class=\"col-md-7 float-left\">"+
        "<p class=\"card-text\">"+acercaNosotros[i].descripcionCentro+"</p><br>"+
            // "<button class=\"btn btn-themecolor mr-1\" data-toggle=\"modal\" data-target=\"#registrarComentario\">Calificar centro</button>"+
            // "<button class=\"btn btn-secondary mr-1\" data-toggle=\"modal\" data-target=\"#registrarCita\">Agendar cita</button>"+
            // "<button class=\"btn btn-secondary mr-1\">Solicitar información</button>"+
        "</div>"+
        "<div class=\"linea float-left\"></div>"+
        "<div class=\"col-md-4 float-left información\">"+
           "<p><i class=\"sl-icon-location-pin\"></i> Ubicación: <span>"+acercaNosotros[i].ubicacion+ "</span></p>"+
            "<p><i class=\"sl-icon-user\"></i> Contacto: <span>" + acercaNosotros[i].encargado + "</span></p>"+
            "<p><i class=\"sl-icon-envelope-open\"></i> Correo: <span>" + acercaNosotros[i].correo + "</span></p>" +
            "<p><i class=\"sl-icon-phone\"></i> Teléfono: <span>" + acercaNosotros[i].telefono + "</span></p>" +
            "<a href= "+"'"+acercaNosotros[i].facebook+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-facebook\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].instagram+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-instagram\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].twitter+"'"+"  class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-twitter\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].pagina+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-world\"></i></a>"
        "</div>"

        $("#cardInfo").append(card_acercaNosotros)
        // info(acercaEspecifico[0].descripcionCentro, acercaEspecifico[0].ubicacion, acercaEspecifico[0].encargado, acercaEspecifico[0].correo, acercaEspecifico[0].telefono, acercaEspecifico[0].facebook,acercaEspecifico[0].instagram, acercaEspecifico[0].twitter, acercaEspecifico[0].pagina);
    };
};
};


mostrar_infoCentro();


// Actualizar noticia--------------------------------------------------------------------------


// let obtener_datosActualizarInfo = (pid) =>{
//     let descripcionCentro = document.querySelector('#txt_descripcionCentro_act').value; 
//     let ubicacion = document.querySelector('#txt_ubicacion_act').value; 
//     let encargado = document.querySelector('#txt_contacto_act').value; 
//     let correo = document.querySelector('#txt_correo_act').value; 
//     let telefono = document.querySelector('#txt_telefono_act').value; 
//     let facebook = document.querySelector('#txt_facebook_act').value; 
//     let instagram = document.querySelector('#txt_instagram_act').value; 
//     let twitter = document.querySelector('#txt_twitter_act').value; 
//     let pagina = document.querySelector('#txt_pagina_act').value; 
//     let estado = "Activo";

//     actualizar_acercaNosotros(descripcionCentro, ubicacion, encargado, correo, telefono, facebook, instagram, twitter, pagina, estado, pid );
//     window.location.reload();
    
// };

// document.addEventListener('click', (e) => {
//     if (e.target && e.target.id == 'btn-enviarInfo_act') {
//         let idacercaNosotrosAct=document.querySelector('#btn-enviarInfo_act').getAttribute('data-id');
//         obtener_datosActualizarInfo(idacercaNosotrosAct);
//     }
// })
