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
        let cedulaJuridica = 12345;
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
    let servicio = consultar_servicio();
    // console.log(servicio);
    // let numeroCarrusel = 0;

    // if (numeroCarrusel < 4) {
        for (let i = 0; i < 3; i++) {
            var card =

                "<div class=\"col-lg-4 col-md-6 float-left\">" +
                "<div class=\"card\">" +
                "<div class=\"el-card-item card-body\">" +
                "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo +"</h3>" +

                //     "<div class=\"btn-group float-right\">"+
                //         "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                //             "<i class=\"fas fa-ellipsis-v\"></i>"+
                //         "</button>"+
                //         "<div class=\"dropdown-menu dropdown-menu-right\">"+
                //             "<a class=\"dropdown-item\" href=\"\">Editar</a>"+
                //             "<a class=\"dropdown-item\" href=\"\">Eliminar</a>"+
                //         "</div>"+
                //    "</div>"+

                "<div class=\"image\">" +
                "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
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
    // } 
    
    // else{
        // if (numeroCarrusel>4 && numeroCarrusel<8){
            for (let i = 4; i < 7; i++) {
                var card =
    
                    "<div class=\"col-lg-4 col-md-6 float-left\">" +
                    "<div class=\"card\">" +
                    "<div class=\"el-card-item card-body\">" +
                    "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
    
                    //     "<div class=\"btn-group float-right\">"+
                    //         "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                    //             "<i class=\"fas fa-ellipsis-v\"></i>"+
                    //         "</button>"+
                    //         "<div class=\"dropdown-menu dropdown-menu-right\">"+
                    //             "<a class=\"dropdown-item\" href=\"\">Editar</a>"+
                    //             "<a class=\"dropdown-item\" href=\"\">Eliminar</a>"+
                    //         "</div>"+
                    //    "</div>"+
    
                    "<div class=\"image\">" +
                    "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
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
                var card =
    
                    "<div class=\"col-lg-4 col-md-6 float-left\">" +
                    "<div class=\"card\">" +
                    "<div class=\"el-card-item card-body\">" +
                    "<h3 id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h3>" +
    
                    //     "<div class=\"btn-group float-right\">"+
                    //         "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
                    //             "<i class=\"fas fa-ellipsis-v\"></i>"+
                    //         "</button>"+
                    //         "<div class=\"dropdown-menu dropdown-menu-right\">"+
                    //             "<a class=\"dropdown-item\" href=\"\">Editar</a>"+
                    //             "<a class=\"dropdown-item\" href=\"\">Eliminar</a>"+
                    //         "</div>"+
                    //    "</div>"+
    
                    "<div class=\"image\">" +
                    "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + servicio[i].imagen + ">" +
                    "</div>" +
                    "<div class=\"el-card-content\">" +
                    "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
                    "<br>" +
                    "</div>" +
    
                    "</div> </div> </div>"
    
                $("#carousel3").append(card)
                // numeroCarrusel++;
                // servicio.reverse();
            };

        // }
    // }


};


mostrar_datosServicio();