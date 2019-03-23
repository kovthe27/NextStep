'use strict';

// const cedulaJuridica ;
// const nombre;
const input_rate = document.querySelector('#slt_rate');
const txt_fecha = document.querySelector('#txt_fecha');
const txt_nuevo_comentario = document.querySelector('#txt_nuevo_comentario');
const btn_likes = document.querySelector('#btn_like');
const btn_comentar = document.querySelector('#btn_comentar');



let validarComentario = () => {
    let error = false;

    if (input_rate.value == '') {
        error = true;
        input_rate.classList.add('error_input');
    } else {
        input_rate.classList.remove('error_input');
    }


    // if (cedulaJuridica.value == '') {
    //     error = true;
    //     cedulaJuridica.classList.add('error_input');
    // } else {
    //     cedulaJuridica.classList.remove('error_input');
    // }

    // if (nombre.value == '') {
    //     error = true;
    //     nombre.classList.add('error_input');
    // } else {
    //     nombre.classList.remove('error_input');
    // }

    // if (txt_fecha.value == '') {
    //     error = true;
    //     txt_fecha.classList.add('error_input');
    // } else {
    //     txt_fecha.classList.remove('error_input');
    // }

    if (txt_nuevo_comentario.value == '') {
        error = true;
        txt_nuevo_comentario.classList.add('error_input');
    } else {
        txt_nuevo_comentario.classList.remove('error_input');
    }


    if (likes.value == '') {
        error = true;
        likes.classList.add('error_input');
    } else {
        likes.classList.remove('error_input');
    }

    return error;
};

let obtener_datosComentario = () => {

    if (validarComentario() == false) {
        // Se ejecuta solo si la validación no da error
        let rate = slt_rate.value;
        let cedulaJuridica = '11111';
        let correo = "contact@laubits.com";
        let nombre = "Laura Castillo";
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm =String(today.getMonth()).padStart(2, '0');
        let yyyy = today.getFullYear();
        let comentario = txt_nuevo_comentario.value;
        let fecha = dd + '/' + mm + '/' + yyyy;
        let likes = 2;
      

        crear_comentario(rate, cedulaJuridica, correo, nombre, comentario, fecha, likes); 
        swal.fire({
            type: 'warning',
            title: 'Su comentario fue creado',
            text: 'Muchas gracias'
        });
        window.location.reload();


    } else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue registrado',
            text: 'Por favor revise los campos resaltados'
        });
    }

};


btn_comentar.addEventListener('click', obtener_datosComentario);



const card_comentario = document.querySelector('#cardComentarios');

let mostrar_comentarios = () =>{
    let comentario = consultar_comentario();
    console.log(comentario);

    for(let i = 0; i < 4; i++){
        var card = `<div class="d-flex flex-row comment-row">
                        <div class="p-2"><span class="round"><img src="../admin-wrap/assets/images/users/1.jpg"
                                    alt="user" width="50"></span></div>
                        <div class="comment-text w-100">
                            <h5>`+ comentario[i].nombre+ `</h5>
                            <div class="comment-footer">
                                <span class="date">`+ comentario[i].fecha +`</span>
                                <span class="action-icons">
                                    <a href="javascript:void(0)"><i class="mdi mdi-pencil-circle"></i></a>
                                    <a href="javascript:void(0)"><i class="mdi mdi-checkbox-marked-circle"></i></a>
                                    <a  id= "btn_like" href="javascript:agregarLikes('`+ comentario[i].correo +`' )"><i class="mdi mdi-heart"></i></a>
                                </span>
                            </div>
                            <p class="m-b-5 m-t-10">`+ comentario[i].comentario+ `.</p>
                        </div>
                    </div>`

        $("#cardComentarios").append(card)  
        comentario.reverse();
 

    };



};


mostrar_comentarios();

let agregarLikes = (correo) => {
    let comentario = consultar_comentario();
    for(let i = 0; i < comentario.length; i ++) {
        if(consultar_comentario[i].cedulaJuridica == '11111'){
            if(consultar_comentario[i].correo  == correo) {
                consultar_comentario[i].likes ++;
            }
        }



    };
};



// btn_likes.addEventListener('click', agregarLikes);
