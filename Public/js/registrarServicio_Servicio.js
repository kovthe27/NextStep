'use strict';

const input_imagen = document.querySelector('#imagen_servicio');
const input_titulo = document.querySelector('#txt_titulo');
const input_descripcion = document.querySelector('#txt_descripcion');

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

    if (input_descripcion == '') {
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

        registrar_actividad(imagen, titulo, descripcion);
        
       
        

    } else {
        swal({
            type: 'warning',
            title: 'El servicio no fue creado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};




btn_enviar.addEventListener('click', obtener_datos);






let consultar_servicio = () => {
    let lista_servicios = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_servicio",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_servicios = res;
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        
      });
    
      return lista_servicios;
     
    };
    
    