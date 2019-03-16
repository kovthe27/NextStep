'use strict';
const input_imagen = document.querySelector('#imagen_servicio');
const input_titulo = document.querySelector('#txt_titulo');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_enviar = document.querySelector('#btn_enviar');

let validar = () => {
    let error = false;

    if (input_imagen.value == '') {
        error = true;
        input_imagen.classList.add('error_input');
    } else {
        input_imagen.classList.remove('error_input');
    }

    if (input_titulo.value == '') {
        error = true;
        input_titulo.classList.add('error_input');
    } else {
        input_titulo.classList.remove('error_input');
    }

    if (input_descripcion.value == '') {
        error = true;
        input_descripcion.classList.add('error_input');
    } else {
        input_descripcion.classList.remove('error_input');
    }

    return error;
};

let obtener_datos = () => {

    if (validar() == false) {
        // Se ejecuta solo si la validación no da error
        let imagen = input_imagen.value;
        let titulo = input_titulo.value;
        let descripcion = input_descripcion.value;

        swal.fire({
            type: 'success',
            title: 'El servicio fue creado',
            text: 'Muchas gracias'
        });

        registrar_servicio(imagen, titulo, descripcion);
        // $('#btn_enviar').click();
        window.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'El servicio no fue creado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_enviar.addEventListener('click', obtener_datos);




const card_servicio = document.querySelector('#cardServicio');

let mostrar_datos = () =>{
    let servicio = consultar_servicio();
    // console.log(servicio);

    for(let i = 0; i < servicio.length; i++){
        var card = "<div id=\"cardServicio\" class=\" altura col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">"+ 
        "<img class=\"card-img-top img-responsive\" src=\"\" alt=\"\">"+
        "<div class=\"card-body card\">"+
        // "<input type=\"file\" id=\"input-file-disable-remove\" class=\"dropify\" data-show-remove=\"false\">"+servicio[i].titulo+"</input>"+
        "<h4 id=\"imagen_servicio\" class=\"card-title\">"+servicio[i].imagen+"</h4>"+
        "<h4 id=\"txt_titulo\" class=\"card-title text-themecolor\">"+servicio[i].titulo+"</h4>"+
        "<p id=\"txt_descripcion\" class=\"card-text\">"+servicio[i].descripcion+"</p>"+
        "</div></div>";

        $("#cardServicio").append(card)    // Append <li> to <ul> with id="myList"
        servicio.reverse();
    };
    
    
};


mostrar_datos();

