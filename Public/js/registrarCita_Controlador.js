'use strict';
const input_nombre = document.querySelector('#imgFoto');
const input_fecha = document.querySelector('#txt_titulo');
const input_correo = document.querySelector('#txt_descripcion');
const btn_enviar = document.querySelector('#btn_enviar');

let validarCita = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_fecha.value == '') {
        error = true;
        input_fecha.classList.add('error_input');
    } else {
        input_fecha.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }

    return error;
};

let obtener_datosCita = () => {

    if (validarCita() == false) {
        // Se ejecuta solo si la validación no da error
        let imagen = input_imagen.src;
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


btn_enviar.addEventListener('click', obtener_datosCita);




const card_servicio = document.querySelector('#cardServicio');

let mostrar_datosCita = () =>{
    let servicio = consultar_servicio();
    // console.log(servicio);

    for(let i = 0; i < servicio.length; i++){
        var card = "<div id=\"cardServicio altura\" class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">"+ 
        // "<img class=\"card-img-top \" src=\"\" alt=\"\">"+
        "<img class=\"card-img-top img-fluid img-responsive img-thumbnail\" src="+servicio[i].imagen+">"+
        "<div class=\"card-body card\">"+

          // dropdown
          "<div class=\"btn-group float-right\">"+
          "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
          "<i class=\"fas fa-ellipsis-v\"></i>"+
          "</button>"+
          "<div class=\"dropdown-menu dropdown-menu-right\">"+
            "<a class=\"dropdown-item\" href=\"#\" >Editar</a>"+
            "<a class=\"dropdown-item\" href=\"#\" >Eliminar</a>"+
         "</div></div>"+

        "<div class=\"float-left\"> <h4 id=\"txt_titulo\" class=\"card-title text-themecolor\">"+servicio[i].titulo+"</h4>"+
        "<p id=\"txt_descripcion\" class=\"card-text\">"+servicio[i].descripcion+"</p>"+
        "</div></div>";

        $("#cardServicio").append(card)    // Append <li> to <ul> with id="myList"
        servicio.reverse();
    };
    
    
};


mostrar_datosCita();



