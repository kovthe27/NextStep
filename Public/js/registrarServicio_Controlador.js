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
        let estado = "Activo";

        registrar_servicio(cedulaJuridica, imagen, titulo, descripcion, estado);
    }
    window.location.reload();

};


btn_enviarServicio.addEventListener('click', obtener_datosServicio);


const card_servicio = document.querySelector('#carouselExampleIndicators2');

let mostrar_datosServicio = () => {

    document.querySelector("#carousel").innerHTML = "";
    document.querySelector("#carousel2").innerHTML = "";
    document.querySelector("#carousel3").innerHTML = "";

    let servicioTodos = consultar_servicio();
    let servicio  = [];
    for(let i=0; i<servicioTodos.length; i++){
        if(servicioTodos[i].cedulaJuridica ==  JSON.parse(localStorage.getItem('centroEducativo'))){
            servicio.push(servicioTodos[i]);
            console.log(servicio);
        }
    }
    let imagen;
    let titulo;
    let descripcion;
    for (let i = 0; i < 3; i++) {
        if (servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        if (servicio[i].imagen == "undefined") {
            imagen = "/imgs/placeholder.png";
        }else{
            imagen= servicio[i].imagen;
        }
        var card =

            "<div class=\"col-lg-4 col-md-6 float-left\">" +
            "<div class=\"card\">" +
            "<div class=\"el-card-item card-body\">" +
            "<h4 class= \"col-md-10 float-left pl-0  mt-2 mb-3\" id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h4>" +

             // dropdown
             "<div class=\"btn-group float-right\">" +
             "<button type=\"button\" class=\"btn text-right p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
             "<i class=\"fas fa-ellipsis-v\"></i>" +
             "</button>" +
             "<div class=\"dropdown-menu dropdown-menu-right\">" +
             "<a class=\"dropdown-item\" alt=\"default\"  id=\"editarServicio\" href=\"javascript:construirModalServicio('"+ servicio[i]._id +"')\"  >Editar</a>" +
             "<a class=\"dropdown-item\" alt=\"default\"  id=\"eliminarServicio\" href=\"javascript:eliminarServicio('"+ servicio[i]._id +"')\"  >Eliminar</a>" +
             "</div></div>" +

            "<div class=\"image\">" +
            "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
            "</div>" +
            "<div class=\"el-card-content\">" +
            "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
            "<br>" +
            "</div>" +

            "</div> </div> </div>"

        $("#carousel").append(card)
    };
};
    
    for (let i = 4; i < 7; i++) {
        if (servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        if (servicio[i].imagen == "undefined") {
            imagen = "./imgs/placeholder.png";
        }else{
            imagen= servicio[i].imagen;
        }
        var card =

            "<div class=\"col-lg-4 col-md-6 float-left\">" +
            "<div class=\"card\">" +
            "<div class=\"el-card-item card-body\">" +
            "<h4 class= \"col-md-10  mb-3 float-left mt-2 pl-0\" id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h4>" +

            // dropdown
            "<div class=\"btn-group float-right\">" +
            "<button type=\"button\" class=\"btn text-right p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
            "<i class=\"fas fa-ellipsis-v\"></i>" +
            "</button>" +
            "<div class=\"dropdown-menu dropdown-menu-right\">" +
            "<a class=\"dropdown-item\" alt=\"default\"  id=\"editarServicio\" href=\"javascript:construirModalServicio('"+ servicio[i]._id +"')\"  >Editar</a>" +
            "<a class=\"dropdown-item\" alt=\"default\"  id=\"eliminarServicio\" href=\"javascript:eliminarServicio('"+ servicio[i]._id +"')\"  >Eliminar</a>" +
            "</div></div>" +

            "<div class=\"image\">" +
            "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
            "</div>" +
            "<div class=\"el-card-content\">" +
            "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
            "<br>" +
            "</div>" +

            "</div> </div> </div>"

        $("#carousel2").append(card)
    };
    
};

    for (let i = 7; i < 10; i++) {
        if (i < servicio.length && servicio[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        if (i < servicio.length) {
            imagen= servicio[i].imagen;
            titulo = servicio[i].titulo;
            descripcion = servicio[i].descripcion;

            var card =

        "<div class=\"col-lg-4 col-md-6 float-left\">" +
        "<div class=\"card\">" +
        "<div class=\"el-card-item card-body\">" +
        "<h4 class= \"col-md-10 float-left mb-3 mt-2 pl-0\" id=\"txt_tituloServicio\">" + servicio[i].titulo + "</h4>" +

        // dropdown
        "<div class=\"btn-group float-right\">" +
        "<button type=\"button\" class=\"btn text-right p-0\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">" +
        "<i class=\"fas fa-ellipsis-v\"></i>" +
        "</button>" +
        "<div class=\"dropdown-menu dropdown-menu-right\">" +
        "<a class=\"dropdown-item\" alt=\"default\"  id=\"editarServicio\" href=\"javascript:construirModalServicio('"+ servicio[i]._id +"')\"  >Editar</a>" +
        "<a class=\"dropdown-item\" alt=\"default\"  id=\"eliminarServicio\" href=\"javascript:eliminarServicio('"+ servicio[i]._id +"')\"  >Eliminar</a>" +
        "</div></div>" +

        "<div class=\"image\">" +
        "<img id=\"imgFoto\" class=\"card-img-top img-fluid img-responsive img-thumbnail\" src=" + imagen + ">" +
        "</div>" +
        "<div class=\"el-card-content\">" +
        "<p id=\"txt_descripcion\">" + servicio[i].descripcion + "</p>" +
        "<br>" +
        "</div>" +

        "</div> </div> </div>"

        $("#carousel3").append(card)


        }else{
            imagen = "imgs/placeholder.png";
            titulo = "Servicio por asignar";
            descripcion = "Servicio por asignar"
        }
        
    };
    };

};


mostrar_datosServicio();

let construirModalServicio = (p_id) => {
    let servicioEspecifico = buscar_servicio(p_id);
     let modalServicio =

     `<div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title" id="vcenter">Creación de servicio</h4>
                                        <a href="javascript:cerrarModalServicio()"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button></a>
                                    </div>
                                    <div class="modal-body">
                                        <div class="form-group">
                                            <button class="form-control btn-outline-warning" id="btnActualizarImagen">Cargar
                                                imagen</button>
                                        </div>

                                        <div id="cargarImagenAct">
                                            <img width="100%" id="imgFotoAct">
                                        </div>

                                        <div class="form-group">
                                            <input type="text" id="txt_tituloServicioAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte un título">
                                        </div>

                                        <div class="form-group">
                                            <div class="controls">
                                                <textarea name="textarea" id="txt_descripcionAct" class="form-control" required="" placeholder="Escriba una descripción"></textarea>
                                                <div class="help-block"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="modal-footer">
                                    <button id="btn_actualizarServicio" href="javascript:cerrarModalServicio()" data-id="`+ servicioEspecifico[0]._id+`" type="submit" class="btn btn-outline-warning waves-effect" data-dismiss="modal">Actualizar</button>
                                    </div>
                                </div>
                            </div>`

                            $("#actualizarServicio").append(modalServicio);
                            document.querySelector("#actualizarServicio").style.display="block";
                            document.querySelector("#actualizarServicio").classList.add('show');

                            document.querySelector("#bkmodal").classList.add("modal-backdrop");
                            document.querySelector("#bkmodal").classList.add('show');
                            servicio(servicioEspecifico[0].imagen, servicioEspecifico[0].titulo, servicioEspecifico[0].descripcion);

};

let cerrarModalServicio = () => {
    document.querySelector("#actualizarServicio").innerHTML = " ";
    document.querySelector("#actualizarServicio").classList.remove('show');
    document.querySelector("#actualizarServicio").style.display="none";
    document.querySelector("#bkmodal").classList.remove("modal-backdrop");
    document.querySelector("#bkmodal").classList.remove('show');
 }

 
let servicio = (pimagen, ptitulo, pdescripcion) => {
    document.querySelector('#imgFotoAct').src = pimagen;
    document.querySelector('#txt_tituloServicioAct').value = ptitulo;
    document.querySelector('#txt_descripcionAct').value = pdescripcion;
}


// Actualizar servicio--------------------------------------------------------------------------


let obtener_datosActualizarServicio = (pid) =>{
    let titulo = document.querySelector('#txt_tituloServicioAct').value;
    let descripcion = document.querySelector('#txt_descripcionAct').value;
    let imagen = document.querySelector('#imgFotoAct').src;

    actualizar_servicio(imagen, titulo, descripcion, pid );
    console.log(pid);
    document.querySelector('#actualizarServicio').style.display="none";
    cerrarModalServicio();
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarServicio') {
        let idServicioAct=document.querySelector('#btn_actualizarServicio').getAttribute('data-id');
        obtener_datosActualizarServicio(idServicioAct);
    }
})


document.addEventListener('click', (e) => {
    $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});

    if (e.target && e.target.id == 'btnActualizarImagen') {
        cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
       
            let id = result[0].public_id;
            imagenUrl_act = processImage(id);

            imagenUrl_act = imagenUrl_act.replace('file', 'http');
            document.querySelector('#imgFotoAct').src = imagenUrl_act;
            return imagenUrl_act;
        });
    }
});


// eliminar

let eliminarServicio = (pid) =>{
    swal("¿Está seguro que desea eliminar el servicio?", {
        buttons: {
          No: "Cancelar",
          Si: "Aceptar",
        },
      })
      .then((value) => {
        switch (value) {
       
          case "No":
            break;
       
          case "Aceptar":
            swal("Gotcha!", "Pikachu was caught!", "success");
            break;
       
          default:
          eliminar_servicio(pid, "Rechazado");
        }
      });
    
}