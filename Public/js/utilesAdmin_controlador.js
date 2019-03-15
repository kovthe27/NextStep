const card = document.querySelector("#TblUtiles");

let construirTabla = () => {
    let lista = consultar_utilesAdmin();

    for (i = 0; i < lista.length; i++) {
        let nuevalista =
            `<tr>
                <td class="title">
                    <a class="link" href="javascript:void(0)">`+lista[i].nivel+`</a>
                </td>
                <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+lista[i].fecha+`</td>
                <td class="tablesaw-priority-2 tablesaw-toggle-cellvisible"><a
                    href="`+lista[i].url+ `"><i
                        class="fas fa-file-pdf"></i></a></td>
                <td>
                    <button type="button" id="btnSeleccionarImagen"
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

construirTabla();