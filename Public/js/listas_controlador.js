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
    // let lista = getLista();
    // let cantidad = -1;
    // let user = "MEPAdmin1";
    // let nombreLista = getNombreLista();

    // if (lista.length > 1) {
    //     for (let i = 0; i < lista.length; i++) {
    //         if (lista[i].cedula == user) {
    //             if (lista[i].nivel == nombreLista) {
    //                 cantidad++;
    //             }
    //         }
    //     }
    // }
    // if (cantidad > 0) {
    //     for (let i = cantidad - 1; i > 0; i--) {
    //         document.querySelector("#TblUtiles").deleteRow(i);
    //     }
    // } else {
    //     if (cantidad == 0) {
    //         document.querySelector("#TblUtiles").deleteRow(0);
    //     }
    // }
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