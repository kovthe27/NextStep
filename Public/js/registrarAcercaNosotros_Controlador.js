'use strict';
const input_cedulaJuridica = document.querySelector('#txt_cedulaJuridica');
const input_descripcionCentro = document.querySelector('#txt_descripcionCentro');
const input_ubicacion = document.querySelector('#txt_ubicacion');
const input_encargado = document.querySelector('#txt_contacto');
const input_correo = document.querySelector('#txt_correo');
const input_telefono = document.querySelector('#txt_telefono');
const input_facebook = document.querySelector('#txt_facebook');
const input_instagram = document.querySelector('#txt_instagram');
const input_twitter = document.querySelector('#txt_twitter');
const input_pagina = document.querySelector('#txt_pagina');
const btn_enviarInfoCentro = document.querySelector('#btn-enviarInfo');

let validarInfo_centro = () => {
    let error = false;

    if (input_descripcionCentro.value == '') {
        error = true;
        input_descripcionCentro.classList.add('error_input');
    } else {
        input_descripcionCentro.classList.remove('error_input');
    }

    if (input_ubicacion.value == '') {
        error = true;
        input_ubicacion.classList.add('error_input');
    } else {
        input_ubicacion.classList.remove('error_input');
    }

    if (input_encargado.value == '') {
        error = true;
        input_encargado.classList.add('error_input');
    } else {
        input_encargado.classList.remove('error_input');
    }

    if (input_correo.value == '') {
        error = true;
        input_correo.classList.add('error_input');
    } else {
        input_correo.classList.remove('error_input');
    }


    return error;
};

let obtener_datosCentro = () => {

    if (validarInfo_centro() == false) {
        let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
        let descripcionCentro = input_descripcionCentro.value;
        let ubicacion = input_ubicacion.value;
        let encargado = input_encargado.value;
        let correo = input_correo.value;
        let telefono = input_telefono.value;
        let facebook = input_facebook.value;
        let instagram = input_instagram.value;
        let twitter = input_twitter.value;
        let pagina = input_pagina.value;

        registrar_acercaNosotros(cedulaJuridica, descripcionCentro, ubicacion, encargado, correo, telefono, facebook, instagram, twitter, pagina);
        window.location.reload();
    } 
    
};


btn_enviarInfoCentro.addEventListener('click', obtener_datosCentro);




const card_acercaNosotros = document.querySelector('#cardInfo');

let mostrar_infoCentro = () => {
    let acercaNosotros = consultar_acercaNosotros();
    // let acercaEspecifico = buscar_acercaNosotros(p_id);

    for (let i = 0; i < acercaNosotros.length; i++) {
        if (acercaNosotros[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        var card_acercaNosotros = 
        "<div class=\"clearfix\"></div>"+
        "<div class=\"col-md-8 float-left\">"+
        "<p class=\"card-text\">"+acercaNosotros[i].descripcionCentro+"</p><br>"+
            "<a class=\"text-secondary\" alt=\"default\"  id=\"editaracercaNosotros\"  href=\"javascript:construirModalacercaNosotros('"+ acercaNosotros[i]._id +"')\" ><i class=\"ti-pencil\"></i> Editar información</a>" +
        "</div>"+
        "<div class=\"linea float-left\"></div>"+
        "<div class=\"col-md-4 float-left información\">"+
           "<p><i class=\"sl-icon-location-pin\"></i> Ubicación: <span>"+acercaNosotros[i].ubicacion+ "</span></p>"+
            "<p><i class=\"sl-icon-user\"></i> Contacto: <span>" + acercaNosotros[i].encargado + "</span></p>"+
            "<p><i class=\"sl-icon-envelope-open\"></i> Correo: <span>" + acercaNosotros[i].correo + "</span></p>" +
            "<p><i class=\"sl-icon-phone\"></i> Teléfono: <span>" + acercaNosotros[i].telefono + "</span></p>" +
            "<a href= "+"'"+acercaNosotros[i].facebook+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-facebook\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].instagram+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-instagram\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].twitter+"'"+"  class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-twitter\"></i></a>" +
            "<a href= "+"'"+acercaNosotros[i].pagina+"'"+" class=\"btn btn-sm btn-circle btn-outline-dark text-themecolor float-left mr-1\"> <i class=\"ti-world\"></i></a>"
        "</div>"

        $("#cardInfo").append(card_acercaNosotros)
        // info(acercaEspecifico[0].descripcionCentro, acercaEspecifico[0].ubicacion, acercaEspecifico[0].encargado, acercaEspecifico[0].correo, acercaEspecifico[0].telefono, acercaEspecifico[0].facebook,acercaEspecifico[0].instagram, acercaEspecifico[0].twitter, acercaEspecifico[0].pagina);
    };
};
};


mostrar_infoCentro();


let construirModalacercaNosotros = (p_id) => {
    let acercaNosotrosEspecifico = buscar_acercaNosotros(p_id);
     let modalacercaNosotros =

     `<div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="vcenter">Editar información</h4>
             <a href="javascript:cerrarmodalacercaNosotros()"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
         </div>
         <div class="modal-body">

             <div class="form-group">
                 <div class="controls">
                     <textarea name="textarea" id="txt_descripcionCentroAct" class="form-control" required="" placeholder="Escriba una descripción del centro educativo"></textarea>
                     <div class="help-block"></div>
                 </div>
             </div>

             <div class="form-group">
                 <input type="text" id="txt_ubicacionAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte la ubicacion">
             </div>

             <div class="form-group">
                 <input type="text" id="txt_contactoAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el nombre del contacto del centro">
             </div>

             <div class="form-group">
                 <input type="text" id="txt_correoAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el correo del centro educativo">
             </div>

             <div class="form-group">
                 <input type="number" id="txt_telefonoAct" name="text" class="form-control" required="false" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el teléfono del centro educativo">
             </div>

             <div class="form-group">
                 <input type="text" id="txt_facebookAct" name="text" class="form-control" required="false" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el link de facebook">
             </div>

             <div class="form-group">
                 <input type="text" id="txt_instagramAct" name="text" class="form-control" required="false" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el link de instagram">
             </div>


             <div class="form-group">
                 <input type="text" id="txt_twitterAct" name="text" class="form-control" required="false" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el link de twitter">
             </div>

             <div class="form-group">
                 <input type="text" id="txt_paginaAct" name="text" class="form-control" required="false" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte el link de la página web">
             </div>
         </div>
         <div class="modal-footer">
             <button id="btn_actualizarAcercaNosotros" href="javascript:cerrarModalacercaNosotros()" data-id="`+acercaNosotrosEspecifico[0]._id+`" type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>

         </div>
     </div>
 </div>`


// Actualizar noticia--------------------------------------------------------------------------


$("#actualizarAcercaNosotros").append(modalacercaNosotros);
document.querySelector("#actualizarAcercaNosotros").style.display="block";
document.querySelector("#actualizarAcercaNosotros").classList.add('show');

document.querySelector("#bkmodal").classList.add("modal-backdrop");
document.querySelector("#bkmodal").classList.add('show');


// console.log(noticiaEspecifica);
acercaNosotros(acercaNosotrosEspecifico[0].descripcionCentro, acercaNosotrosEspecifico[0].ubicacion,  acercaNosotrosEspecifico[0].encargado,  acercaNosotrosEspecifico[0].correo,  acercaNosotrosEspecifico[0].telefono,  acercaNosotrosEspecifico[0].facebook,  acercaNosotrosEspecifico[0].instagram,  acercaNosotrosEspecifico[0].twitter,  acercaNosotrosEspecifico[0].pagina);


}

let cerrarmodalacercaNosotros = () => {
document.querySelector("#actualizarAcercaNosotros").innerHTML = " ";
document.querySelector("#actualizarAcercaNosotros").classList.remove('show');
document.querySelector("#actualizarAcercaNosotros").style.display="none";
document.querySelector("#bkmodal").classList.remove("modal-backdrop");
document.querySelector("#bkmodal").classList.remove('show');
}


let acercaNosotros = (pdescripcion, pubicacion, pencargado, pcorreo, ptelefono, pfacebook, pinstagram, ptwitter, ppagina) => {
document.querySelector('#txt_descripcionCentroAct').value = pdescripcion;
document.querySelector('#txt_ubicacionAct').value = pubicacion;
document.querySelector('#txt_contactoAct').value = pencargado;
document.querySelector('#txt_correoAct').value = pcorreo;
document.querySelector('#txt_telefonoAct').value = ptelefono;
document.querySelector('#txt_facebookAct').value = pfacebook;
document.querySelector('#txt_instagramAct').value = pinstagram;
document.querySelector('#txt_twitterAct').value = ptwitter;
document.querySelector('#txt_paginaAct').value = ppagina;
}





// Actualizar noticia--------------------------------------------------------------------------


let obtener_datosActualizarAcerca = (pid) =>{
let descripcionCentro = document.querySelector('#txt_descripcionCentroAct').value;
let ubicacion = document.querySelector('#txt_ubicacionAct').value;
let encargado = document.querySelector('#txt_contactoAct').value;
let correo = document.querySelector('#txt_correoAct').value;
let telefono = document.querySelector('#txt_telefonoAct').value;
let facebook = document.querySelector('#txt_facebookAct').value;
let instagram = document.querySelector('#txt_instagramAct').value;
let twitter = document.querySelector('#txt_twitterAct').value;
let pagina = document.querySelector('#txt_paginaAct').value;

actualizar_acercaNosotros(descripcionCentro, ubicacion, encargado, correo, telefono, facebook, instagram, twitter, pagina, pid );
console.log(pid);
document.querySelector('#actualizarAcercaNosotros').style.display="none";
window.location.reload();

};

document.addEventListener('click', (e) => {
if (e.target && e.target.id == 'btn_actualizarAcercaNosotros') {
let idacercaNosotrosAct=document.querySelector('#btn_actualizarAcercaNosotros').getAttribute('data-id');
obtener_datosActualizarAcerca(idacercaNosotrosAct);
}
})