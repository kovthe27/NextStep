'use strcit';

let verUsuario = (id) =>{
    let listaUsuarios = buscarUsuario(id);
    let infoUsuario = 
    `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="grid-title">Información de usuario</h4>
                    <a class="close" aria-hidden="true" href="javascript:cerrarModal()">×</a>
                </div>
                <div class="modal-body">
                <div class="card-body">
                <center class="m-t-30"> <img src="`+listaUsuarios[0].fotoUsuario+`" class="img-circle" width="150">
                    <h4 class="card-title m-t-10">`+listaUsuarios[0].nombreUsuario+` `+listaUsuarios[0].apellidoUsuario+`</h4>
                    <h6 class="card-subtitle">`+listaUsuarios[0].emailUsuario+`</h6>
                    <div class="row text-center justify-content-md-center mt-3">
                        <div class="col-8"><a href="javascript:void(0)" class="link"><i class="icon-people"></i> <font class="font-medium"> Dirección: `+listaUsuarios[0].direccionUsuario+`</font></a></div>
                    </div>
                    <div class="row text-center justify-content-md-center mt-1">
                        <div class="col-8"><a href="javascript:void(0)" class="link"><i class="icon-picture"></i> <font class="font-medium"> Número de teléfono: `+listaUsuarios[0].telUsuario+`</font></a></div>
                    </div>
                    <div class="row text-center justify-content-md-center mt-1">
                        <div class="col-8"><a href="javascript:void(0)" class="link"><i class="icon-picture"></i> <font class="font-medium"> Número de hijos: `+listaUsuarios[0].cantHijos+`</font></a></div>
                    </div>
                    <div class="row text-center justify-content-md-center mt-1">
                        <div class="col-8"><a href="javascript:void(0)" class="link"><i class="icon-picture"></i> <font class="font-medium"> Nacionalidad: `+listaUsuarios[0].nacionUsuario+`</font></a></div>
                    </div>
                </center>
            </div>
                </div>
                <div class="modal-footer">
                <button id="btn_cerrarModal" type="button" class="btn btn-info waves-effect" data-dismiss="modal">Close</button>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
    `
    $("#grid-modal").append(infoUsuario);
    
    document.querySelector("#grid-modal").style.display ="block" ;
    document.querySelector("#grid-modal").classList.add("show");

    document.querySelector("#bkmodal").classList.add("modal-backdrop");
    document.querySelector("#bkmodal").classList.add("show");

    
}
let cerrarModal = () =>{
    document.querySelector("#grid-modal").innerHTML  = "";
    document.querySelector("#grid-modal").classList.remove("show");
    document.querySelector("#grid-modal").style.display ="none" ;
    document.querySelector("#bkmodal").classList.remove("modal-backdrop");
    document.querySelector("#bkmodal").classList.remove("show");
}
let eliminarUsuario = (id) =>{
    console.log("H");
}

let mostrarUsuarios = () =>{
    let listaUsuarios = consultarUsuariosAdmin();
    for(let i=0; i<listaUsuarios.length; i++){
        let usuario=
            `<tr>
                <td class="tablesaw-priority-3">`+listaUsuarios[i].nombreUsuario+`</td>
                <td class="tablesaw-priority-2">`+listaUsuarios[i].apellidoUsuario+`</td>
                <td class="tablesaw-priority-1">`+listaUsuarios[i].emailUsuario+`</td>
                <td class="tablesaw-priority-1">01/01/0001</td>
                <td class="tablesaw-priority-1">`+listaUsuarios[i].estadoUsuario+`</td>
                <td class="tablesaw-priority-1">
                    <a  class="btn btn-sm btn-success mr-1 btn-circle" id="boton`+ i + `" href="javascript:verUsuario('` + listaUsuarios[i]._id + `')"> <i class="fas fa-info"></i> </a>
                    <a class="btn btn-sm btn-danger mr-1 btn-circle" id="boton`+ i + `" href="javascript:eliminarUsuario('` + listaUsuarios[i]._id + `')"> <i class="fas fa-trash"></i> </a>
                </td>
            </tr>`

        $("#tablaUsuarios").append(usuario);
    }
    console.log("H");
}

mostrarUsuarios();

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_cerrarModal') {
        cerrarModal();
    }
})

// data-toggle="modal" data-target="#usuario"