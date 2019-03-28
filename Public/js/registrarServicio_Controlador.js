'use strict';
const input_imagen = document.querySelector('#imgFoto');
const input_titulo = document.querySelector('#txt_tituloServicio');
const input_descripcion = document.querySelector('#txt_descripcion');
const btn_enviarServicio = document.querySelector('#btn_enviarServicio');
const carga_imagen = document.querySelector('#cargarImagen');

let validarServicio = () => {
    let error = false;

    if (carga_imagen.value == '') {
        error = true;
        carga_imagen.classList.add('error_input');
    } else {
        carga_imagen.classList.remove('error_input');
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

let obtener_datosServicio = () => {

    if (validarServicio() == false) {
        // Se ejecuta solo si la validación no da error
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));;
        let imagen = input_imagen.src;
        let titulo = input_titulo.value;
        let descripcion = input_descripcion.value;

        registrar_servicio(cedulaJuridica, imagen, titulo, descripcion);
        swal.fire({
            type: 'success',
            title: 'El servicio fue creado',
            text: 'Muchas gracias'
        });
        $('#btn_enviar').click();
        window.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'El servicio no fue creado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_enviarServicio.addEventListener('click', obtener_datosServicio);




const card_servicio = document.querySelector('#carouselExampleIndicators2');

let mostrar_datosServicio = () => {
    let servicioTodos = consultar_servicio();
    let servicio  = [];
    for(let i=0; i<servicioTodos.length; i++){
        if(servicioTodos[i].cedulaJuridica ==  JSON.parse(localStorage.getItem('centroEducativo'))){
            servicio.push(servicioTodos[i]);
        }
    }
    let imagen;
    let titulo;
    let descripcion;
    for (let i = 0; i < 3; i++) {
        if (servicio[i].imagen == "undefined") {
            imagen = "/imgs/placeholder.png";
        }else{
            imagen= servicio[i].imagen;
        }
        var card =

            "<div class=\"col-lg-4 col-md-6 float-left\">" +
            "<div class=\"card\">" +
            "<div class=\"el-card-item card-body\">" +
            "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
            "<div class=\"image\">" +
            "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
            "</div>" +
            "<div class=\"el-card-content\">" +
            "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
            "<br>" +
            "</div>" +

            "</div> </div> </div>"

        $("#carousel").append(card)
        // numeroCarrusel++;
        // servicio.reverse();
    };
    
    for (let i = 4; i < 7; i++) {
        if (servicio[i].imagen == "undefined") {
            imagen = ".\imgs\placeholder.png";
        }else{
            imagen= servicio[i].imagen;
        }
        var card =

            "<div class=\"col-lg-4 col-md-6 float-left\">" +
            "<div class=\"card\">" +
            "<div class=\"el-card-item card-body\">" +
            "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
            "<div class=\"image\">" +
            "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
            "</div>" +
            "<div class=\"el-card-content\">" +
            "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
            "<br>" +
            "</div>" +

            "</div> </div> </div>"

        $("#carousel2").append(card)
        // numeroCarrusel++;
        // servicio.reverse();
    };


    for (let i = 7; i < 10; i++) {
        if (i < servicio.length) {
            imagen= servicio[i].imagen;
            titulo = servicio[i].titulo;
            descripcion = servicio[i].descripcion;
        }else{
            imagen = "imgs/placeholder.png";
            titulo = "Servicio por asignar";
            descripcion = "Servicio por asignar"
        }
        var card =

            "<div class=\"col-lg-4 col-md-6 float-left\">" +
            "<div class=\"card\">" +
            "<div class=\"el-card-item card-body\">" +
            "<h3 id=\"txt_tituloServicio\">" + titulo + "</h3>" +
            "<div class=\"image\">" +
            "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
            "</div>" +
            "<div class=\"el-card-content\">" +
            "<p id=\"txt_descripcion\">" + descripcion + "</p>" +
            "<br>" +
            "</div>" +

            "</div> </div> </div>"

        $("#carousel3").append(card)
        // numeroCarrusel++;
        // servicio.reverse();
    };


};


mostrar_datosServicio();