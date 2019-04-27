'use strict';

// Tab1
const selectTab1 = document.querySelector("#slt_centro");
const annoTab1 = document.querySelector("#slt_anno");
const btn_Tab1 = document.querySelector("#btn_crearReporte");

// tab2
const slt_centro21 = document.querySelector("#slt_centro21");
const slt_centro22 = document.querySelector("#slt_centro22");
const slt_centro23 = document.querySelector("#slt_centro23");
const btn_Tab2 = document.querySelector("#btn_crearReporte2");

// Tab3


// Funciones Tab1
let mostrarTab1 = () => {
    let listaCentros = consultarCentros();
    let annos = consultarAnnos();
    let annosFiltrada = [];

    for (let i = 0; i < listaCentros.length; i++) {
        let centro =
            `
            <option value="`+ listaCentros[i].cedJuridica + `">` + listaCentros[i].nombreCentro + `</option>
        `
        $("#slt_centro").append(centro);
    }

    for (let i = 0; i < annos.length; i++) {
        annosFiltrada.push(annos[i].anno);
    }
    annosFiltrada = [...new Set(annosFiltrada)];

    for (let j = 0; j < annosFiltrada.length; j++) {
        let anno =
            `
            <option value="`+ annosFiltrada[j] + `">` + annosFiltrada[j] + `</option>
        `
        $("#slt_anno").append(anno);
    }
}

let reporte1 = () => {

    let listaCalificaciones = consultarCalificacionesAnno();
    let annos = [];
    let cal = [];
    let centro = selectTab1.value;
    let existe = false;

    document.querySelector("#speedChart").innerHTML = "";
    document.querySelector("#speedChart").style.display="none";
    document.querySelector("#TblReporte1").innerHTML = "";
    document.querySelector("#tablatab1").innerHTML = "";
    document.querySelector("#mensaje").innerHTML = "";

    for (let i = 0; i < listaCalificaciones.length; i++) {
        if (listaCalificaciones[i].cedulaJuridica == centro) {
            existe = true;
        }
    }

    if (existe == false) {
        let mensaje= 

        `
        <h2 class="float-left mt-5 mr-5" >No hay información disponible<br> para este centro educativo</h2>
        <img class="float-left ml-3" src="imgs/info-01.png">
        `
        $("#mensaje").append(mensaje);
    } else {

        for (let i = 0; i < listaCalificaciones.length; i++) {
            if (listaCalificaciones[i].cedulaJuridica == centro) {
                let fecha = listaCalificaciones[i].fecha;
                let anno1 = fecha.substr(6, 4);
                annos.push(anno1);
                cal.push(listaCalificaciones[i].calificacion)
                let nuevo =
                    `
                <tr>
                <td>`+ anno1 + `</td>
                <td>`+ listaCalificaciones[i].calificacion + `</td>
                </tr>
                `
                $("#TblReporte1").append(nuevo);
            }
        }

        let tabla =
            `
        <tr>
            <th>Año</th>
            <th>Calificación</th>
        </tr>
    `
        $("#tablatab1").append(tabla);
        document.querySelector("#speedChart").style.display="block";
        let speedCanvas = document.getElementById("speedChart");

        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontSize = 16;
        Chart.defaults.global.legend.display = false;
        var speedData = {
            labels: annos,
            datasets: [{
                label: "Desempeño histórico",
                data: cal,
                lineTension: 0,
                fill: false,
                borderColor: 'orange',
                backgroundColor: 'transparent',
                borderDash: [5, 5],
                pointBorderColor: 'orange',
                pointBackgroundColor: 'rgba(255,150,0,0.5)',
                pointRadius: 5,
                pointHoverRadius: 10,
                pointHitRadius: 30,
                pointBorderWidth: 2,
                pointStyle: 'rectRounded'
            }]
        };

        var chartOptions = {
            legend: {
                display: false,
                position: 'top',
                labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                }
            },
            scales: {
                yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: false,
                        steps: 20,
                        stepSize: 5,
                        stepValue: 5,
                        max: 100
                    }
                }]
            }
        }

        var lineChart = new Chart(speedCanvas, {
            type: 'line',
            data: speedData,
            options: chartOptions
        });
    }
}



// Funciones Tab2

let mostrarTab2 = () => {
    let listaCalificaciones = consultarCalificacionesAnno();
    let annos = [];

    for (let i = 0; i < listaCalificaciones.length; i++) {
        let fecha = listaCalificaciones[i].fecha;
        let anno1 = fecha.substr(6, 4);
        annos.push(anno1);
    }
    let annosFiltrada = [...new Set(annos)];

    for (let i = 0; i < annosFiltrada.length; i++) {
        let centro =
            `
            <option value="`+ annosFiltrada[i] + `">` + annosFiltrada[i] + `</option>
        `
        $("#slt_centro23").append(centro);
    }
}

// Buscar centro

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


// Reporte 2
let reporte2 = () => {
    document.querySelector("#CentrosUser").innerHTML = "";
    let modalidad = slt_centro21.value;
    let tipo = slt_centro22.value;
    let anno = slt_centro23.value;

    let listaRanking = consultarCalificacionesAnno();

    let contador = 1;

    for (let i = 0; i < listaRanking.length; i++) {
        let centro = buscarCentro(listaRanking[i].cedulaJuridica);
        if (centro.tipoCentro == tipo & centro.gradoAcademico == modalidad & listaRanking[i].fecha.substr(6, 4) == anno & contador < 11) {
            let nuevo =
                `
                <div class="col-lg-3 mt-4 col-md-6">
                <div class="card">
                    <div class="el-card-item bounce animated">
                    <h1>`+ contador + `</h1>
                    <hr id="orange">
                        <div class="el-card-avatar el-overlay-1 image mb-0"> <img src="`+ centro.fotoCentro + `" alt="user" width=100%>
                            <div class="el-overlay scrl-up">
                                <ul class="el-info">
                                    <li><a class="btn default btn-outline image-popup-vertical-fit" href=""><i class="sl-icon-magnifier"></i></a></li>
                                    <li><a class="btn default btn-outline" href="javascript:verPerfil()"><i class=" fas fa-arrow-alt-circle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="box-title">`+ centro.nombreCentro + `</h4> <small>` + centro.gradoAcademico + `</small>

                        </div>
                            
                    </div>
                    </div>
            </div>
                `
            $("#CentrosUser").append(nuevo);
            contador++;

        }
    }
}


btn_Tab1.addEventListener('click', reporte1);
btn_Tab2.addEventListener('click', reporte2);
mostrarTab1();
mostrarTab2();


