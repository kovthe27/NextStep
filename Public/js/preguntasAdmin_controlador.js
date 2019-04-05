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
                    <h5 class="mb-0">
                        <a class="link" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                            ` +preguntas[i].numero+ `. ` + preguntas[i].pregunta+ 
                                `</a>
                    </h5>
                </div>
                <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1">
                    <div class="card-body">`
                        +preguntas[i].respuesta+
                            `</div>
                </div>
            </div>`
        $("#accordion1").append(nuevaPregunta) 
    }


};

btnRegistrar.addEventListener('click', crearPregunta);
construirTabla();