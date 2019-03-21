'use strict';

const inputNombre = document.querySelector("#txt_nombre");
const card = document.querySelector("#TblUtiles");
const btnRegistrar = document.querySelector("#btn_registrar");

let construirTabla = () => {
    let lista = consultar_utilesAdmin();
    for (let i = 0; i < lista.length; i++) {
        let nombre=lista[i].nombre;
        let nuevalista =
            `<tr>
                <td class="title">
                    <a class="link" id="lista`+i+`" href="javascript:construirLista('`+nombre+`')">`+ lista[i].nombre + `</a>
                </td>
                <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+ lista[i].creada + `</td>
                <td>
                <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="customCheck`+ i + `">
                                            <label class="custom-control-label" for="customCheck`+ i + `"></label>
                                        </div>
                </td>    
                <td>
                    <button type="button" id="btnSeleccionarImagen`+ i + `"
                        class="btn btn-sm btn-success mr-1 btn-circle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-danger mr-1 btn-circle">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>`

        $("#TblUtiles").append(nuevalista)
    }
};

let construirLista = (pnombre) =>{
    // localStorage.setItem('ListaUsuario', JSON.stringify(pcedula));
    localStorage.setItem('ListaNombre', JSON.stringify(pnombre));
    window.location.assign("./listas.html")
}

let registrarLista = () => {
    let nombre = inputNombre.value;
    let cedula = "MEPAdmin1";

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;

    nuevaLista(cedula, nombre, fecha);
    bitacora(cedula, "Se agrego la lista: "+nombre);
    window.location.reload();
}

construirTabla();
btnRegistrar.addEventListener('click', registrarLista);
