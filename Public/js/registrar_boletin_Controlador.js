'use strict';
const input_boletin = document.querySelector('#pdfBoletin');
const btn_enviarBoletin = document.querySelector('#btn_enviarBoletin');
const cargar_boletin = document.querySelector('#cargarBoletin');
const a_linkPdf = document.querySelector ('#linkPdf');
const input_nombrePdf = document.querySelector ('#txt_nombrePDF');

let validarBoletin = () => {
    let error = false;

    if (input_boletin.value == '') {
        error = true;
        input_boletin.classList.add('error_input');
    } else {
        input_boletin.classList.remove('error_input');
    }

    return error;
};

let obtener_datosBoletin = () => {

    if (validarBoletin() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));;
        let boletin = input_boletin.href;
        let nombre = input_nombrePdf.value;

        // registrar_boletin(cedulaJuridica, boletin, nombre);
        // swal.fire({
        //     type: 'success',
        //     title: 'El boletin fue creado',
        //     text: 'Muchas gracias'
        // });
    }
    //  else {
    //     swal.fire({
    //         type: 'warning',
    //         title: 'El boletin no fue creado',
    //         text: 'Por favor revise los campos resaltados'
    //     });
    // }

};

let mostrar_datosBoletin = () =>{
    let pdf_boletin = consultar_boletin();
    // console.log(servicio);

    for(let i = 0; i < pdf_boletin.length; i++){
        if(pdf_boletin[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))){
            a_linkPdf.href = pdf_boletin[i].boletin;
            a_linkPdf.innerHTML = pdf_boletin[i].nombre;
        }
    };
    
};  
mostrar_datosBoletin();




btn_enviarBoletin.addEventListener('click', obtener_datosBoletin);