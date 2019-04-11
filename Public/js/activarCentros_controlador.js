'use strict';

let mostrarPendientes = () => {
    let lista = consultar_listaCentrosAdmin();
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].estado == "Pendiente") {
            let centro =
                `
        <tr>
            <td class="title">
                <a class="link" href="javascript:void(0)">`+lista[i].nombreCentro+`</a>
            </td>
            <td class="tablesaw-priority-3 tablesaw-toggle-cellvisible">`+lista[i].cedJuridica+`</td>
            <td class="tablesaw-priority-2 tablesaw-toggle-cellvisible">`+lista[i].fechaRegistro+`</td>
            <td class="tablesaw-priority-1 tablesaw-toggle-cellvisible">`+lista[i].emailCentro+`</td>
            <td class="tablesaw-priority-4 tablesaw-toggle-cellvisible">`+lista[i].estado+`</td>
            <td>
                <button id="aceptar" data-id ="`+lista[i]._id+`" type="button" class="btn btn-sm btn-success mr-1 btn-circle">
                    <i class="fa fa-check"></i>
                </button>
                <button id="rechazar" data-id ="`+lista[i]._id+`" type="button" class="btn btn-sm btn-danger mr-1 btn-circle">
                    <i class="fa fa-times"></i>
                </button>
                <button id="vermas" data-id ="`+lista[i]._id+`" type="button" class="btn btn-sm btn-info mr-1 btn-circle">
                    <i class=" fas fa-info"></i>
                </button>
             </td>
        </tr>
        `
            $("#tablaActivar").append(centro);
        }
    }

};

let aceptarCentro = (pid) =>{
    swal("Esta seguro que desea aceptar la solicitud?", {
        buttons: {
          No: "No!",
          Si: "Si!",
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
          actualizar_estado(pid, "Activo");
        }
      });
}

let rechazarCentro = (pid) =>{
    swal("Esta seguro que desea rechazar la solicitud?", {
        buttons: {
          No: "No!",
          Si: "Si!",
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
          actualizar_estado(pid, "Rechazado");
        }
      });
}

let verCentro = () =>{


}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'aceptar') {
        let idNoticiaAct=document.querySelector('#aceptar').getAttribute('data-id');
        aceptarCentro(idNoticiaAct);
    }
})

document.addEventListener('click', (f) => {
    if (f.target && f.target.id == 'rechazar') {
        let idNoticiaAct=document.querySelector('#rechazar').getAttribute('data-id');
        rechazarCentro(idNoticiaAct);
    }
})


document.addEventListener('click', (g) => {
    if (g.target && g.target.id == 'vermas') {
        let idNoticiaAct=document.querySelector('#vermas').getAttribute('data-id');
        verCentro(idNoticiaAct);
    }
})



mostrarPendientes();