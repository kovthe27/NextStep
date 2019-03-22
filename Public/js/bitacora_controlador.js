let construirTabla = () => {
    let lista = consultarBitacora();
    for (let i = 0; i < lista.length; i++) {
        let nuevalista =
            `<tr>
            <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+lista[i].usuario+`</td>
            <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+lista[i].accion+`</td>
            <td class="tablesaw-priority-1 tablesaw-toggle-cellvisible">`+lista[i].fecha +`</td>
            <td class="tablesaw-priority-1 tablesaw-toggle-cellvisible">`+lista[i].hora +`</td>
            <td class="tablesaw-priority-2 tablesaw-toggle-cellvisible">`+lista[i].descripcion+`</td>
            
        </tr>`

        $("#TablaBitacora").append(nuevalista)
    }
};

construirTabla();