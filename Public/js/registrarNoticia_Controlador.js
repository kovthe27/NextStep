'use strict';
const input_tituloNoticia = document.querySelector('#txt_tituloNoticia');
const input_descripcionNoticia = document.querySelector('#txt_descripcionNoticia');
const btn_enviarNoticia = document.querySelector('#btn_enviarNoticia1');

let validarNoticia = () => {
    let error = false;

    if (input_tituloNoticia.value == '') {
        error = true;
        input_tituloNoticia.classList.add('error_input');
    } else {
        input_tituloNoticia.classList.remove('error_input');
    }

    if (input_descripcionNoticia.value == '') {
        error = true;
        input_descripcionNoticia.classList.add('error_input');
    } else {
        input_descripcionNoticia.classList.remove('error_input');
    }

    return error;
};

let obtener_datosNoticia = () => {

    if (validarNoticia() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let titulo = input_tituloNoticia.value;
        let fecha = '';
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        fecha = dd + '/' + mm + '/' + yyyy;


        let descripcion = input_descripcionNoticia.value;

        registrar_noticia(cedulaJuridica, titulo, fecha, descripcion);

        window.location.reload();

    } else {
        swal.fire({
            type: 'warning',
            title: 'La noticia no fue creado',
            text: 'Por favor revise los campos resaltados'
        });

    }

};


btn_enviarNoticia.addEventListener('click', obtener_datosNoticia);


let mostrar_datosNoticia = () => {
    let noticiasCentro = consultar_noticia();
    let noticia = [];
    for (let i = 0; i < noticiasCentro.length; i++) {
        if (noticiasCentro[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            noticia.push(noticiasCentro[i]);
        }
    }
    for (let i = 0; i < noticia.length; i++) {

        var cardNoticia =
            // "<div class=\"card col-md-3 float-left \">" +
            "<div class=\"card-body img-thumbnail mb-2\">" +
            // dropdown
            "<div class=\"btn-group float-right\">" +
            "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
            "<i class=\"fas fa-ellipsis-v\"></i>" +
            "</button>" +
            "<div class=\"dropdown-menu dropdown-menu-right\">" +
            "<a class=\"dropdown-item\" href=\"#\" >Editar</a>" +
            "<a class=\"dropdown-item\" href=\"#\" >Eliminar</a>" +
            "</div></div>" +

            "<h4  class=\"card-title text-themecolor\">" + noticia[i].titulo + "</h4>" +
            "<h6  class=\"card-subtitle mb-2 text-muted\">" + noticia[i].fecha + "</h6>" +
            "<p class=\"card-text\">" + noticia[i].descripcion + "</p>" +
            "</div>";
        // </div>"


        $("#cargaNoticias").append(cardNoticia) // Append <li> to <ul> with id="myList"


    };

};


mostrar_datosNoticia();