'use strict';

const selectTipo = document.querySelector("#slt_Tipo");
const selectAnno = document.querySelector("#slt_anno");
const btnRanking = document.querySelector("#btn_crearRanking");


let mostrar = () => {
    let annos = consultarCalificaciones();
    let annosFiltrada = [];

    for (let i = 0; i < annos.length; i++) {
        let fecha = annos[i].fecha;
        let anno1 = fecha.substr(6, 4);
        annosFiltrada.push(anno1);
    }
    annosFiltrada = [...new Set(annosFiltrada)];

    for (let j = 0; j < annosFiltrada.length; j++) {
        let anno =
            `
            <option value="`+ annosFiltrada[j] + `">` + annosFiltrada[j] + `</option>
        `
        $("#slt_anno").append(anno);
    }


    let anno = "2019";
    let pos = 1;
    let listaCalificaciones = consultarCalificaciones();
    let i = 0; 
    // let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica);
    let fecha = listaCalificaciones[i].fecha;
    let anno1 = fecha.substr(6, 4);

    document.querySelector("#bodyRanking").innerHTML = "";
    // if (anno1 == anno && centro.gradoAcademico == "General" && centro.tipoCentro == "2019") {
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica);

                if (anno1 == anno) {
                    let ranking =
                        `
                <tr bounce animated>
                <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            // }
        }
}


let ranking = () => {
    let tipo = selectTipo.value;
    let anno = selectAnno.value;
    let pos = 1;
    let listaCalificaciones = consultarCalificaciones();
    document.querySelector("#bodyRanking").innerHTML = "";
    switch (tipo) {
        case "1":
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                if (anno1 == anno) {
                    let ranking =
                        `
                <tr bounce animated>
                <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            }
            break;

        case "2":
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                if (anno1 == anno & centro.gradoAcademico == "Primaria" & centro.tipoCentro == "Público") {
                    let ranking =
                        `
                <tr>
                <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            }
            break;

            case "3":
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                if (anno1 == anno & centro.gradoAcademico == "Primaria" & centro.tipoCentro == "Privado") {
                    let ranking =
                        `
                <tr>
                <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            }
            break;

            case "4":
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                if (anno1 == anno & centro.gradoAcademico == "Secundaria" & centro.tipoCentro == "Público") {
                    let ranking =
                        `
                <tr>
                <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            }
            break;

            case "5":
            for (let i = 0; i < listaCalificaciones.length; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                if (anno1 == anno & centro.gradoAcademico == "Secundaria" & centro.tipoCentro == "Privado") {
                    let ranking =
                        `
                <tr>
                <td style="width:50px;"><span class="round themecolor">`+ pos + `</span></td>
                <td>
                    <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                </td>
                <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                <td>`+ centro.distritoCentro + `</td>
                <td>`+ centro.telCentro + `</td>
                </tr>
                `
                    $("#bodyRanking").append(ranking);
                    pos++;
                }
            }
            break;
            
        default:
        // code block
    }
}

let buscarCentro = (cedula) => {
    let centro = [];
    let listaCentros = consultarCentros();
    for (let i = 0; i < listaCentros.length; i++) {
        if (listaCentros[i].cedJuridica == cedula) {
            centro = listaCentros[i];
        }
    }
    return centro;
}

mostrar();
btnRanking.addEventListener('click', ranking);