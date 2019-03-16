'use strcit';

const card = document.querySelector("#accordion1");

let construirTabla = () => {
    let preguntas = consultar_preguntaAdmin();

    for (i = 0; i < preguntas.length; i++) {
        let nuevaPregunta =
            `<div class="card m-b-0">
                <div class="card-header" role="tab" id="headingOne1">
                    <h5 class="mb-0">
                        <a class="link" data-toggle="collapse" data-parent="#accordion1" href="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
                            Q` +preguntas[i].numero+ `. ` + preguntas[i].pregunta+ 
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

construirTabla();