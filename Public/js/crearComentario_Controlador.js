'use strict';
// const input_titulo = document.querySelector('#txt_titulo');
// const input_descripcion = document.querySelector('#txt_descripcion');
const txt_comentario = document.querySelector('#txt_comentario');

const btn_comentar = document.querySelector('#btn_comentar');

let validar = () => {
    let error = false;

    if (txt_comentario.value == '') {
        error = true;
        txt_comentario.classList.add('error_input');
    } else {
        txt_comentario.classList.remove('error_input');
    }

    // if (input_titulo.value == '') {
    //     error = true;
    //     input_titulo.classList.add('error_input');
    // } else {
    //     input_titulo.classList.remove('error_input');
    // }

    // if (input_descripcion == '') {
    //     error = true;
    //     input_descripcion.classList.add('error_input');
    // } else {
    //     input_descripcion.classList.remove('error_input');
    // }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let comentario = input_comentario.value;
        // let titulo = input_titulo.value;
        // let descripcion = input_descripcion.value;

        registrar_comentario(imagen, titulo, descripcion);

    } else {
        swal({
            type: 'warning',
            title: 'El comentario no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_comentar.addEventListener('click', obtener_datos);



const card_comentario = document.querySelector('#cardComentario');

let mostrar_datos = () =>{
    let comentario = consultar_comentario();
    console.log(comentario);

    for(let i = 0; i < comentario.length; i++){
        var card = 

        $("#cardcomentario").append(card)    // Append <li> to <ul> with id="myList"

    };



};


mostrar_datos();

