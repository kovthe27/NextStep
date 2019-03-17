'use strict';
const input_cantidad = document.querySelector("#txt_cantidad");
const input_articulo = document.querySelector("#txt_articulo");
const input_descripcion = document.querySelector("#txt_descripcion");
const btn_registrar = document.querySelector("#btn_registrar");

//Carga la lista inicial con los utiles asociados a la lista
let crearLista = () => {
    let nombreLista = getNombreLista();
    let user = "MEPAdmin1";
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
}

//Limpia la tabla 
let refrescarLista = () => {
    let lista = getLista();
    let cantidad = -1;
    let user = "MEPAdmin1";
    let nombreLista = getNombreLista();

    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == user) {
            if (lista[i].nivel == nombreLista) {
                cantidad++
            }
        }
    }
    for (let i = cantidad; i > 0; i--) {
        document.querySelector("#TblUtiles").deleteRow(i);
    }
}

//Registra un nuevo articulo a la lista de utiles
let nuevoArticulo = () => {
    let cantidad = input_cantidad.value;
    let articulo = input_articulo.value;
    let descripcion = input_descripcion.value;
    if(validar()==false){
        crearArticulo(cantidad, articulo, descripcion);
    }
    else{
        swal.fire({
            type: 'error',
            title: 'El articulo no fue registrado',
            text: 'Por favor inténtelo de nuevo'
          })
    }
}

//valida que se ingreso informacion en todos los campos
let validar = () =>{
    let cantidad = input_cantidad.value;
    let articulo = input_articulo.value;
    let descripcion = input_descripcion.value;
    let valido=false;

    if(cantidad==""){
        input_cantidad.classList.add('error_input');
        valido=true;
    }else{
        input_cantidad.classList.remove('error_input');
    }

    if(articulo==""){
        input_articulo.classList.add('error_input');
        valido=true;
    }else{
        input_articulo.classList.remove('error_input');
    }

    if(descripcion==""){
        input_descripcion.classList.add('error_input');
        valido=true;
    }else{
        input_descripcion.classList.remove('error_input');
    }
    return valido;
}


crearLista();
btn_registrar.addEventListener('click', nuevoArticulo);