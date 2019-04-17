'use strict';

const selectTab1 = document.querySelector("#slt_centro");
const annoTab1 = document.querySelector("#slt_anno");
const btn_Tab1 = document.querySelector("#btn_crearReporte");


// Tab1
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
            if(annos[i].anno >= year){
            let nuevo =
                `
                <tr>
                <td>`+annos[i].anno+`</td>
                <td>`+annos[i].calificacion+`</td>
                </tr>
                `
            $("#TblReporte1").append(nuevo);
            }
        }
    }
    new Chart(document.getElementById("line-chart"), {
        type: 'line',
        data: {
            labels: [10,25,50,75,100],
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

function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}


btn_Tab1.addEventListener('click', reporte1);
mostrarTab1();