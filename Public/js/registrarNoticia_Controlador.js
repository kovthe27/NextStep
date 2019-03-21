'use strict';
const input_tituloNoticia = document.querySelector('#txt_tituloNoticia');
const input_fechaNoticia  = document.querySelector('#txt_fechaNoticia');
const input_descripcionNoticia  = document.querySelector('#txt_descripcionNoticia');
const btn_enviarNoticia = document.querySelector('#btn_enviarNoticia');

let validarNoticia = () => {
    let error = false;

    if (input_tituloNoticia.value == '') {
        error = true;
        input_tituloNoticia.classList.add('error_input');
    } else {
        input_tituloNoticia.classList.remove('error_input');
    }

    if (input_fechaNoticia.value == '') {
        error = true;
        input_fechaNoticia.classList.add('error_input');
    } else {
        input_fechaNoticia.classList.remove('error_input');
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
        let titulo= input_tituloNoticia.value;
        let fecha = input_fechaNoticia.value;
        let descripcion = input_descripcionNoticia.value;
        
        registrar_noticia(titulo, fecha, descripcion);
        swal.fire({
            type: 'warning',
            title: 'La noticia fue creada',
            text: 'Muchas gracias'
        });

        window.location.reload();
        // $('#btn_enviarNoticia').click();

    } else {
        swal.fire({
            type: 'warning',
            title: 'La noticia no fue creado',
            text: 'Por favor revise los campos resaltados'
        });
        
    }

};


btn_enviarNoticia.addEventListener('click', obtener_datosNoticia);




// const card_noticia = document.querySelector('#cardnoticia');

let mostrar_datosNoticia = () =>{
    let noticia = consultar_noticia();
    // console.log(noticia);

    for(let i = 0; i < 4; i++){
        var cardNoticia =   "<div class=\"card col-md-3 float-left \">" +
        "<div class=\"card-body img-thumbnail\">"+
          // dropdown
          "<div class=\"btn-group float-right\">"+
          "<button type=\"button\" class=\"btn text-right\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">"+
          "<i class=\"fas fa-ellipsis-v\"></i>"+
          "</button>"+
          "<div class=\"dropdown-menu dropdown-menu-right\">"+
            "<a class=\"dropdown-item\" href=\"#\" >Editar</a>"+
            "<a class=\"dropdown-item\" href=\"#\" >Eliminar</a>"+
         "</div></div>"+

            "<h4  class=\"card-title text-themecolor\">"+noticia[i].titulo+"</h4>" +
            "<h6  class=\"card-subtitle mb-2 text-muted\">"+noticia[i].fecha+"</h6>"+
            "<p class=\"card-text\">"+noticia[i].descripcion+"</p>"+
        "</div> </div>";


        $("#cardComentarios-noticias").append(cardNoticia)    // Append <li> to <ul> with id="myList"
        noticia.reverse();
    };

};


mostrar_datosNoticia();

