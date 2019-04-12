'use strict';
const input_cantidad = document.querySelector("#txt_cantidad");
const input_articulo = document.querySelector("#slt_articulos");
const input_descripcion = document.querySelector("#txt_descripcion");
const input_nuevoTipo = document.querySelector("#txt_articulo");
const btn_registrar = document.querySelector("#btn_registrar");
const btn_registrartipo = document.querySelector('#btn_registrartipo');

//Carga la lista inicial con los utiles asociados a la lista
let crearLista = () => {
    let nombreLista = getNombreLista();
    let listaTipos = getListaTipos();
    let user;
    if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        user = "MEPAdmin1";
    }else{
        user = JSON.parse(localStorage.getItem('centroEducativo'));
    }
    let lista = getLista();
    document.querySelector("#txt_titulo").innerHTML = "Lista: " + nombreLista;

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == user) {
            if (lista[i].nivel == nombreLista) {
                let nuevalista =
                    `<tr>
                <td class="title">
                    <a class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].cantidad + `</a>
                </td>
                <td class="title">
                    <a class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].tipo + `</a>
                </td>
                <td class="title">
                    <a class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].descripcion + `</a>
                </td>

                <td>

                    <a id="editarLista"  href="javascript:construirModalUtiles('`+ lista[i]._id +`')"><button type="button" class="btn btn-sm btn-success mr-1 btn-circle"><i class="fas fa-edit"></i></button></a>
                    <a id="eliminarLista"  href="javascript:eliminarlUtilesAdmin('`+ lista[i]._id +`')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
                </td>

                </tr>`

                $("#TblUtiles").append(nuevalista)
            }
        }
    };

    for (let i = 0; i < listaTipos.length; i++) {

        let tipos =
            `<option value="` + listaTipos[i].nombre + `">` + listaTipos[i].nombre + `</option>`

        $("#slt_articulos").append(tipos)
    };
}

//Limpia la tabla 
let refrescarLista = () => {
    window.location.reload();
}

//Registra un nuevo articulo a la lista de utiles
let nuevoArticulo = () => {
    let cantidad = input_cantidad.value;
    let articulo = input_articulo.value;
    let descripcion = input_descripcion.value;
    let cedula;
    if(JSON.parse(localStorage.getItem('cliente')) == "Nextstep@mep.go.cr"){
        cedula = "MEPAdmin1";
    }else{
        cedula = JSON.parse(localStorage.getItem('centroEducativo'));
    }
    let nombreLista = getNombreLista();
    if (validar() == false) {
        crearArticulo(cedula, cantidad, articulo, descripcion);
        bitacora(cedula, "Registro", "Se agregó un articulo a la lista: "+nombreLista);
    }
    else {
        swal.fire({
            type: 'error',
            title: 'El artículo no fue registrado',
            text: 'Por favor inténtelo de nuevo'
        })
    }
}

let nuevoTipo = () => {
    let nombre = input_nuevoTipo.value;

    if (nombre == "") {
        swal.fire({
            type: 'error',
            title: 'Nuevo tipo de artículo no registrado',
            text: 'Por favor indique un nombre para el nuevo artículo'
        })
    }else{
        crearTipo(nombre);
    }

}

//valida que se ingreso informacion en todos los campos
let validar = () => {
    let cantidad = input_cantidad.value;
    let articulo = input_articulo.value;
    let descripcion = input_descripcion.value;
    let valido = false;

    if (cantidad == "") {
        input_cantidad.classList.add('error_input');
        valido = true;
    } else {
        input_cantidad.classList.remove('error_input');
    }

    if (articulo == "") {
        input_articulo.classList.add('error_input');
        valido = true;
    } else {
        input_articulo.classList.remove('error_input');
    }

    if (descripcion == "") {
        input_descripcion.classList.add('error_input');
        valido = true;
    } else {
        input_descripcion.classList.remove('error_input');
    }
    return valido;
}


crearLista();
btn_registrar.addEventListener('click', nuevoArticulo);
btn_registrartipo.addEventListener('click', nuevoTipo);




let construirModalUtiles = (p_id) => {
    console.log("hello");
    let listaEspecifica = buscar_utilesAdmin(p_id);
    let modalUtiles =

     `<div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
         
         <div class="modal-header">
             <h4 class="modal-title" id="vcenter">Editar elemento</h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><a class="text-dark" href="javascript:cerrarModalUtiles()" data-id="`+listaEspecifica[0]._id+`">x</a></button>
         </div>
         <div class="modal-body">

             <div class="form-group">
                 <input type="number" id="txt_cantidadAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Cantidad">
             </div>
             <div class="form-group">
             <button class="btn btn-sm btn-outline-warning mb-2" alt="default" data-toggle="modal" data-target="#agregarTipo">Agregar nuevo tipo</button>
                 <select id="slt_articulosAct" class="form-control custom-select" data-placeholder="Seleccione un tipo de articulo" tabindex="1">
                     <option value="Category">--Seleccione un tipo de artículo--</option>
                 <option value="Cuaderno">Cuaderno</option><option value="Lápiz">Lápiz</option><option value="Libros">Libros</option><option value="Crayolas">Crayolas</option><option value="Goma">Goma</option><option value="Calculadora">Calculadora</option><option value="Blusa / Camisa">Blusa / Camisa</option><option value="Tableta">Tableta</option></select>
                
             </div>
             <div class="form-group">
                 <input type="textarea" id="txt_descripcionAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Ingrese la descripción">
             </div>

         </div>
         <div class="modal-footer">
             <button id="btn_actualizar" href="javascript:cerrarModalUtiles()" data-id="`+listaEspecifica[0]._id+`"  type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>

         </div>
     </div>
 </div>`

                        $("#actualizarUtilesAdmin").append(modalUtiles);
                        document.querySelector("#actualizarUtilesAdmin").style.display="block";
                        document.querySelector("#actualizarUtilesAdmin").classList.add('show');

                        document.querySelector("#bgmodal").classList.add("modal-backdrop");
                        document.querySelector("#bgmodal").classList.add('show');

                        listaAct(listaEspecifica[0].cantidad, listaEspecifica[0].articulo, listaEspecifica[0].descripcion);
};
 

let cerrarModalUtiles = () => {
    document.querySelector("#actualizarUtilesAdmin").innerHTML = " ";
    document.querySelector("#actualizarUtilesAdmin").classList.remove('show');
    document.querySelector("#actualizarUtilesAdmin").style.display="none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
 }

 
let listaAct = (pcantidad, particulo, pdescripcion) => {
    document.querySelector('#txt_cantidadAct').value = pcantidad;
    document.querySelector('#slt_articulosAct').option = particulo;
    document.querySelector('#txt_descripcionAct').value = pdescripcion;
}




// Actualizar noticia--------------------------------------------------------------------------


let obtener_datosActualizarUtilesAdmin = (pid) =>{
    let cantidad = document.querySelector('#txt_cantidadAct').value;
    let articulo = document.querySelector('#slt_articulosAct').option;
    let descripcion = document.querySelector('#txt_descripcionAct').value;

    actualizar_utilesAdmin(cantidad, articulo, descripcion, pid );
    document.querySelector('#actualizarUtilesAdmin').style.display="none";
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizar') {
        let idutilesAdminAct=document.querySelector('#btn_actualizar').getAttribute('data-id');
        obtener_datosActualizarUtilesAdmin(idutilesAdminAct);
    }
})


// eliminar

let eliminarlUtilesAdmin = (pid) =>{
    swal("¿Está seguro que desea eliminar el elemento?", {
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
          eliminar_utilesAdmin(pid, "Rechazado");
        }
      });
    
}
