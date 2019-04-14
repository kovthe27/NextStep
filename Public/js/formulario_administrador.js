'use strict';


const inputNombreForm = document.querySelector("#txt_nombreFormulario");
const inputPeriodoForm = document.querySelector("#txt_periodoFormulario");
const btnCrearFormulario = document.querySelector("#btn_crearFormulario");


let verFormulario = () => {

    localStorage.setItem('nombreFormulario', JSON.stringify(inputNombreForm.value));
    localStorage.setItem('periodoFormulario', JSON.stringify(inputPeriodoForm.value));
    window.location.assign("calificaciones_administrador.html");
}

let mostrarFormularios = () => {
    let listaFormularios = consultar_formulario();
    let listaNombres = [];
    let listaFiltrada = [];
    for(let i =0; i<listaFormularios.length; i++){
        listaNombres.push(listaFormularios[i].nombre);
    }
    listaFiltrada = [...new Set(listaNombres)];
    
    for(let j =0; j<listaFiltrada.length; j++){
        let formulario= 
        `<tr>
            <td class="title">
                <a class="link" id="lista`+ j + `" href="javascript:construirLista('')">`+listaFiltrada[j]+`</a>
            </td>
            <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+getPeriodo(listaFiltrada[j])+` </td> 
            <td>

                <a id="editarLista"  href="javascript:construirModalLista('')"><button type="button" class="btn btn-sm btn-success mr-1 btn-circle"><i class="fas fa-edit"></i></button></a>
                <a id="eliminarLista"  href="javascript:eliminarlListaUtiles('')"><button type="button" class="btn btn-sm btn-danger mr-1 btn-circle"><i class="fas fa-trash"></i></button></a>
            </td>
        </tr>`

    $("#tablaFormularios").append(formulario);
        
    }
}

let getPeriodo = (nombrel) =>{
    let listaFormularios = consultar_formulario(); 
    let peiriodox;
    for(let i =0; i<listaFormularios.length; i++){
        if(listaFormularios[i].nombre == nombrel){
            peiriodox = listaFormularios[i].periodo
        }
    }
    return peiriodox;
}

btnCrearFormulario.addEventListener('click', verFormulario);

mostrarFormularios();