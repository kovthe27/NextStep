'use strcit';

const card = document.querySelector("#accordion1");
const inputPregunta = document.querySelector("#txt_pregunta");
const inputRespuesta = document.querySelector('#txt_respuesta');
const btnRegistrar = document.querySelector('#btn_registrar');

let crearPregunta = () =>{
    let preguntas = consultar_preguntaAdmin();
    let pregunta = inputPregunta.value;
    let respuesta = inputRespuesta.value;
    let numero = preguntas.length + 1;

    if(registrarPregunta(numero, pregunta, respuesta)){
        window.location.reload();
    }
    
}

let construirTabla = () => {
    let preguntas = consultar_preguntaAdmin();

    for (i = 0; i < preguntas.length; i++) {
        let nuevaPregunta =
            `<div class="card m-b-0 col-md-8 bg-transparent">
                <div class="card-header bg-transparent" role="tab" id="headingOne1">
                    <h5 class="mb-0 col-md-10 pl-0 float-left">
                        <a class="link" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                            ` +preguntas[i].numero+ `. ` + preguntas[i].pregunta+ 
                                `</a>
                    </h5>
                    <a id="eliminarPregunta"  href="javascript:eliminarpregunta('`+ preguntas[i]._id +`')" ><button type="button" class="text-danger btn mt-0 pt-0 float-right"><i class="fas fa-trash"></i></button></a>
                    <a id="editarPregunta" href="javascript:construirModalpregunta('`+ preguntas[i]._id +`')" ><button  type="button" class="text-success btn mt-0 pt-0 float-right"><i class="fas fa-edit"></i></button></a>
                    


                </div>
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1">
                    <div class="card-body mb-3">`
                        +preguntas[i].respuesta+
                            `</div>
                </div>
            </div>`
        $("#accordion1").append(nuevaPregunta) 
    }


};

btnRegistrar.addEventListener('click', crearPregunta);
construirTabla();






let construirModalpregunta = (p_id) => {
    console.log("hello");
    let preguntaEspecifica = buscar_pregunta(p_id);
    let modalpregunta =

     ` <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
         <div class="modal-header">
             <h4 class="modal-title" id="vcenter">Editar pregunta</h4>
             <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
         </div>
         <div class="modal-body">

             <div class="form-group">
                 <input type="text" id="txt_preguntaAct" name="text" class="form-control" required="true" data-validation-required-message="This field is required" aria-invalid="false" placeholder="Inserte la pregunta">
             </div>

             <div class="form-group">
                 <div class="controls">
                     <textarea name="textarea" id="txt_respuestaAct" class="form-control" required="" placeholder="Escriba la respuesta"></textarea>
                     <div class="help-block"></div>
                 </div>
             </div>
         </div>
         <div class="modal-footer">
            <button id="btn_actualizarPregunta"  href="javascript:cerrarModalpregunta()"  data-id="`+preguntaEspecifica[0]._id+`" type="submit" class="btn btn-warning waves-effect" data-dismiss="modal">Actualizar</button>

         </div>
     </div>
 </div>`

                        $("#actualizarpregunta").append(modalpregunta);
                        document.querySelector("#actualizarpregunta").style.display="block";
                        document.querySelector("#actualizarpregunta").classList.add('show');

                        document.querySelector("#bgmodal").classList.add("modal-backdrop");
                        document.querySelector("#bgmodal").classList.add('show');

                        preguntaAct(preguntaEspecifica[0].pregunta, preguntaEspecifica[0].respuesta);
};
 

let cerrarModalpregunta = () => {
    document.querySelector("#actualizarpregunta").innerHTML = " ";
    document.querySelector("#actualizarpregunta").classList.remove('show');
    document.querySelector("#actualizarpregunta").style.display="none";
    document.querySelector("#bgmodal").classList.remove("modal-backdrop");
    document.querySelector("#bgmodal").classList.remove('show');
 }

 
let preguntaAct = (ppregunta, prespuesta) => {
    document.querySelector('#txt_preguntaAct').value = ppregunta;
    document.querySelector('#txt_respuestaAct').value = prespuesta;
}




// Actualizar noticia--------------------------------------------------------------------------


let obtener_datosActualizarpregunta = (pid) =>{
    let pregunta = document.querySelector('#txt_preguntaAct').value;
    let respuesta = document.querySelector('#txt_respuestaAct').value;

    actualizar_pregunta(pregunta, respuesta, pid );
    document.querySelector('#actualizarpregunta').style.display="none";
    window.location.reload();
    
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn_actualizarPregunta') {
        let idpreguntaAct=document.querySelector('#btn_actualizarPregunta').getAttribute('data-id');
        obtener_datosActualizarpregunta(idpreguntaAct);
    }
})


// eliminar

let eliminarpregunta = (pid) =>{
    swal("¿Está seguro que desea eliminar la pregunta?", {
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
          eliminar_pregunta(pid, "Rechazado");
        }
      });
    
}
