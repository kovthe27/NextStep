'use strict';
const input_nombre = document.querySelector('#txt_nombre');
const input_fechaCita = document.querySelector('#txt_fechaCita');
const input_horaCita= document.querySelector('#txt_horaCita');
const input_correoUsuario = document.querySelector('#txt_correoUsuario');
const btn_enviarCita = document.querySelector('#btn_enviarCita');

let validarCita = () => {
    let error = false;

    if (input_nombre.value == '') {
        error = true;
        input_nombre.classList.add('error_input');
    } else {
        input_nombre.classList.remove('error_input');
    }

    if (input_fechaCita.value == '') {
        error = true;
        input_fechaCita.classList.add('error_input');
    } else {
        input_fechaCita.classList.remove('error_input');
    }

    if (input_horaCita.value == '') {
        error = true;
        input_horaCita.classList.add('error_input');
    } else {
        input_horaCita.classList.remove('error_input');
    }

    if (input_correoUsuario.value == '') {
        error = true;
        input_correoUsuario.classList.add('error_input');
    } else {
        input_correoUsuario.classList.remove('error_input');
    }

    return error;
};

let obtener_datosCita = () => {

    if (validarCita() == false) {
        // Se ejecuta solo si la validación no da error
        let nombre = input_nombre.value;
        let fechaCita = input_fechaCita.value;
        let horaCita = input_horaCita.value;
        let correoUsuario = input_correoUsuario.value;

        swal.fire({
            type: 'success',
            title: 'La cita fue agendada',
            text: 'En caso de cancelación se le enviará un correo electrónico. Muchas gracias.'
        });

        registrar_servicio(nombre, fechaCita, horaCita, correoUsuario);
        // $('#btn_enviar').click();
        window.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'La cita no fue agendada',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_enviarCita.addEventListener('click', obtener_datosCita);




const card_cita = document.querySelector('#cardCita');

let mostrar_datosCita = () =>{
    let cita = consultar_cita();
    // console.log(cita);

    for(let i = 0; i < cita.length; i++){
        var card = 
        "<div id=\"cardcita altura\" class=\"col-lg-4 col-md-6 col-xlg-2 col-xs-12 float-left\">";

        $("#cardcita").append(card)    // Append <li> to <ul> with id="myList"
        cita.reverse();
    };
    
    
};


mostrar_datosCita();



