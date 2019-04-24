'use strict';

const selectTipo = document.querySelector("#slt_TipoLanding");
const btnRanking = document.querySelector("#buscarRanking");


let mostrar = () => {
    let pos1 = 1;
    let listaCalificaciones1 = consultarCalificaciones();
    document.querySelector("#carouselExampleIndicators2").innerHTML = "";
    
    if(selectTipo.value==0){
    for (let i = 0; i < 4; i++) {
        let centro = buscarCentro(listaCalificaciones1[i].cedulaJuridica)
        // let fecha = listaCalificaciones1[i].fecha;
        // let anno1 = fecha.substr(6, 4);
        // if (anno1 == anno) {
            // let contador = 1;
            let ranking =
                `
                <div class="col-lg-3 col-md-6 float-left">
                    <div class="card">
                        <div class="el-card-item">
                        <small>Nota</small>
                            <h1>`+ listaCalificaciones1[i].calificacion + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h3 class="box-title">`+ centro.nombreCentro + `</h3>`+ centro.gradoAcademico + `</small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
        `
        // <tr bounce animated>
        // <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
        // <td>
        //     <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
        // </td>
        // <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones1[i].calificacion + `</span></td>
        // <td>`+ centro.distritoCentro + `</td>
        // <td>`+ centro.telCentro + `</td>
        // </tr>
            $("#carouselExampleIndicators2").append(ranking);
            pos1++;
        }
    }

}



let ranking = () => {
    let tipo = selectTipo.value;
   
    // let anno = selectAnno.value;
    let pos = 1;
    let listaCalificaciones = consultarCalificaciones();
    document.querySelector("#carouselExampleIndicators2").innerHTML = "";
    switch (tipo) {
        case "1":
            for (let i = 0; i < 4; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                // let fecha = listaCalificaciones[i].fecha;
                // let anno1 = fecha.substr(6, 4);
                // if (anno1 == anno) {
                    let contador = 1;
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card">
                            <div class="el-card-item">
                            <small>Nota</small>
                                <h1>`+ listaCalificaciones[i].calificacion + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h3 class="box-title">`+ centro.nombreCentro + `</h3> </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                // <tr bounce animated>
                // <td style="width:50px;"><span class="round bg-warning">`+ pos + `</span></td>
                // <td>
                //     <h6>`+ centro.nombreCentro + `</h6><small class="text-muted">` + centro.tipoCentro + `</small>
                // </td>
                // <td><span class="label label-themecolor label-rounded">`+ listaCalificaciones[i].calificacion + `</span></td>
                // <td>`+ centro.distritoCentro + `</td>
                // <td>`+ centro.telCentro + `</td>
                // </tr>
                    $("#carouselExampleIndicators2").append(ranking);
                    pos++;
                }
            // }
            break;

        case "2":
            for (let i = 0; i < 4; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                // let fecha = listaCalificaciones[i].fecha;
                // let anno1 = fecha.substr(6, 4);
                if (centro.gradoAcademico == "Primaria" & centro.tipoCentro == "Público") {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card">
                            <div class="el-card-item">
                            <small>Nota</small>
                                <h1>`+ listaCalificaciones[i].calificacion + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h3 class="box-title">`+ centro.nombreCentro + `</h3> </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselExampleIndicators2").append(ranking);
                    pos++;
                }
            }
            break;

            case "3":
            for (let i = 0; i < 4; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                // let fecha = listaCalificaciones[i].fecha;
                // let anno1 = fecha.substr(6, 4);
                if (centro.gradoAcademico == "Primaria" & centro.tipoCentro == "Privado") {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card">
                            <div class="el-card-item">
                            <small>Nota</small>
                                <h1>`+ listaCalificaciones[i].calificacion + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h3 class="box-title">`+ centro.nombreCentro + `</h3> </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselExampleIndicators2").append(ranking);
                    pos++;
                }
            }
            break;

            case "4":
            for (let i = 0; i < 4; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                // let fecha = listaCalificaciones[i].fecha;
                // let anno1 = fecha.substr(6, 4);
                if (centro.gradoAcademico == "Secundaria" & centro.tipoCentro == "Público") {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card">
                            <div class="el-card-item">
                            <small>Nota</small>
                                <h1>`+ listaCalificaciones[i].calificacion + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h3 class="box-title">`+ centro.nombreCentro + `</h3> </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselExampleIndicators2").append(ranking);
                    pos++;
                }
            }
            break;

            case "5":
            for (let i = 0; i < 4; i++) {
                let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica)
                // let fecha = listaCalificaciones[i].fecha;
                // let anno1 = fecha.substr(6, 4);
                if (centro.gradoAcademico == "Secundaria" & centro.tipoCentro == "Privado") {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card">
                            <div class="el-card-item">
                            <small>Nota</small>
                                <h1>`+ listaCalificaciones[i].calificacion + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h3 class="box-title">`+ centro.nombreCentro + `</h3> </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselExampleIndicators2").append(ranking);
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