'use strict';

// import { registrar_infoComentario, consultar_infoComentario } from "../../API/componentes/registrar_infoComentario/registrar_infoComentario.api";

// const input_nombreUsuario = document.querySelector('#txt_nombreUsuario');
// const input_correoUsuario = document.querySelector('#txt_correoUsuario');
// const input_cedulaJuridica = document.querySelector('#txt_cedulaJuridica');
const input_calificacion = document.querySelector('#txt_calificacion');
const input_comentario = document.querySelector('#txt_comentario');
const btn_enviarComentario = document.querySelector('#btn_enviarComentario');

let validarComentario = () => {
    let error = false;

    if (input_calificacion.value == '') {
        error = true;
        input_calificacion.classList.add('error_input');
    } else {
        input_calificacion.classList.remove('error_input');
    }

    if (input_comentario.value == '') {
        error = true;
        input_comentario.classList.add('error_input');
    } else {
        input_comentario.classList.remove('error_input');
    }

    return error;
};

let obtener_datosComentario = () => {

    if (validarComentario() == false) {
        // Se ejecuta solo si la validación no da error
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let correoUsuario = JSON.parse(localStorage.getItem('cliente'));
        let calificacion = input_calificacion.value;
        let fecha = '';
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        fecha = dd + '/' + mm + '/' + yyyy;
        let comentario = input_comentario.value;
        let likes = 0;

        registrar_comentarios(cedulaJuridica, correoUsuario, calificacion, fecha, comentario,likes);
    }
};


btn_enviarComentario.addEventListener('click', obtener_datosComentario);


const card_Comentario = document.querySelector('#cardComentarios');

let mostrar_datosComentario = () =>{
    let Comentario = consultar_comentarios();
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));

    for(let i = Comentario.length -1; i > Comentario.length  -5; i--){

        if (Comentario[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {

        if (Comentario[i].cedulaJuridica == cedulaJuridica ) {
        let nombreUsuario = getNombreUsuario(Comentario[i].correoUsuario);
        let fotoUsuario =  getFotoUsuario(Comentario[i].correoUsuario);
        var card = 
        // let i = noticia.length - 1; i > noticia.length - 5; i--
        "<div class=\"d-flex flex-row comment-row mb-3 bg-light\">"+
        "<div class=\"p-2\"><span class=\"round\"><img src=\"" + fotoUsuario + "\"   alt=\"user\"  width=\"50\"></span></div>"+
        "<div class=\"comment-text w-100\">"+
            "<h5>"+ nombreUsuario+ "</h5><div class=\"float-right text-warning\"><span>"+Comentario[i].calificacion +"</span><i class=\"ti-star text-warning\"></i></div>"+
            "<div class=\"comment-footer\">"+
                "<span class=\"date\">" + Comentario[i].fecha + "</span>"+
            "</div>"+
            "<p class=\"m-b-5 m-t-10\">" + Comentario[i].comentario + "</p><hr class= \"mb-2 mt-2\">"+
        "<div id=\"mostrarLikes\" class=\"clearfix\"></div><button type=\"button\" class=\"btn btn-warning btn-sm mr-2 btn-circle\"><i class=\"fa fa-heart \"></i></button>" + Comentario[i].likes + " likes" 
        "</div>"+
       
       "</div>"


        $("#cardComentarios").append(card);
    };
};
};
};



mostrar_datosComentario();



