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

let reporte1 = (cedula, anno) => {
    let annos = consultarAnnos();
    let centro = selectTab1.value;
    let year = annoTab1.value;
    let annosFiltrada = [];

    document.querySelector("#line-chart").innerHTML = "";
    document.querySelector("#TblReporte1").innerHTML = "";

    for (let i = 0; i < annos.length; i++) {
        annosFiltrada.push(annos[i].anno);
    }
    annosFiltrada = [...new Set(annosFiltrada)];

    for (let i = 0; i < annos.length; i++) {
        if (annos[i].cedula == centro) {
            if (annos[i].anno >= year) {
                let nuevo =
                    `
                <tr>
                <td>`+ annos[i].anno + `</td>
                <td>`+ annos[i].calificacion + `</td>
                </tr>
                `
                $("#TblReporte1").append(nuevo);
            }
        }
    }
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [10, 25, 50, 75, 100],
            datasets: [{
                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                label: "Africa",
                borderColor: "#3e95cd",
                fill: false
            }, {
                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                label: "Asia",
                borderColor: "#8e5ea2",
                fill: false
            }, {
                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                label: "Europe",
                borderColor: "#3cba9f",
                fill: false
            }, {
                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                label: "Latin America",
                borderColor: "#e8c3b9",
                fill: false
            }, {
                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                label: "North America",
                borderColor: "#c45850",
                fill: false
            }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'World population per region (in millions)'
            }
        }
    });
}

// Funciones Tab2

let mostrarTab2 = () => {
    let listaCentros = consultarCentros();
    let annos = consultarAnnos();
    let annosFiltrada = [];

    for (let i = 0; i < annos.length; i++) {
        annosFiltrada.push(annos[i].anno);
    }
    annosFiltrada = [...new Set(annosFiltrada)];

    for (let j = 0; j < annosFiltrada.length; j++) {
        let anno =
            `
            <option value="`+ annosFiltrada[j] + `">` + annosFiltrada[j] + `</option>
        `
        $("#slt_centro23").append(anno);
    }
}

let buscarCentro = (cedula) =>{
    let centro=[];
    let listaCentros = consultarCentros();
    for(let i=0; i<listaCentros.length; i++){
        if(listaCentros[i].cedJuridica == cedula){
            centro=listaCentros[i];
        }
    }
    return centro;
}

let reporte2 = () => {
    document.querySelector("#CentrosUser").innerHTML = "";
    let modalidad = slt_centro21.value;
    let tipo = slt_centro22.value;
    let anno = slt_centro23.value;

    let listaCentros = consultarCentros();
    let listaRanking = consultarAnnos();

    let contador=1 ;

    for(let i=0; i<listaRanking.length; i++){
        let centro=buscarCentro(listaRanking[i].cedula);
        if(centro.tipoCentro == tipo & centro.gradoAcademico == modalidad & listaRanking[i].anno == anno & contador<11){
            let nuevo =
                `
                <div class="col-lg-3 mt-4 col-md-6">
                <div class="card">
                    <div class="el-card-item bounce animated">
                    <h1>`+contador+`</h1>
                    <hr id="orange">
                        <div class="el-card-avatar el-overlay-1 image mb-0"> <img src="`+centro.fotoCentro+`" alt="user" width=100%>
                            <div class="el-overlay scrl-up">
                                <ul class="el-info">
                                    <li><a class="btn default btn-outline image-popup-vertical-fit" href=""><i class="sl-icon-magnifier"></i></a></li>
                                    <li><a class="btn default btn-outline" href="javascript:verPerfil()"><i class=" fas fa-arrow-alt-circle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="box-title">`+centro.nombreCentro+`</h4> <small>`+centro.gradoAcademico+`</small>

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