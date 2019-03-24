'use strict';
const input_nombreEtiqueta = document.querySelector("#txt_nombreEtiqueta");
const btn_registrarEtiqueta = document.querySelector("#btn_registrarEtiqueta");




// ETIQUETAS
let mostrarTablaEtiquetas = () => {
    let listaEtiquetas = consultar_etiquetasAdmin();

    for (let i = 0; i < listaEtiquetas.length; i++) {
        let nuevaEtiqueta =
            `<tr>
        <td class="title"><a class="link" href="javascript:void(0)">`+listaEtiquetas[i].nombre+`</a></td>
        <td class="tablesaw-priority-3">`+listaEtiquetas[i].fecha+`</td>
        <td class="tablesaw-priority-2">`+listaEtiquetas[i].usuarios+`</td>
        <td class="tablesaw-priority-1">
                    <button type="button" id="btnEtiquetasAdmin`+ i + `"
                        class="btn btn-sm btn-success mr-1 btn-circle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger mr-1 btn-circle">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
    </tr>`
        $("#tbodyEtiquetas").append(nuevaEtiqueta);

        // mostrar etiqueta en Centro educativo
        let nuevaEtiquetaCentro =
        "<option class=\"text-small\" value='"+listaEtiquetas[i].nombre+"'> "+listaEtiquetas[i].nombre+" </option>"
        $("#etiquetaCentro1").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro2").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro3").append(nuevaEtiquetaCentro);
        $("#etiquetaCentro4").append(nuevaEtiquetaCentro);
    }
}

let refrescarTablaEtiquetas = () =>{
    let listaEtiquetas = consultar_etiquetasAdmin();
    for (let i = listaEtiquetas.length-1; i>0; i--) {
        $("#tbodyEtiquetas tr").remove(0);
    }
}

let crearEtiqueta = () =>{
    let nombreEtiqueta = input_nombreEtiqueta.value;
    let usuarios = 0;
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;
    if(registrarEtiqueta(nombreEtiqueta, fecha, usuarios)){
        refrescarTablaEtiquetas();
        mostrarTablaEtiquetas();
    };
};



// Eventos
mostrarTablaEtiquetas();
btn_registrarEtiqueta.addEventListener('click', crearEtiqueta);