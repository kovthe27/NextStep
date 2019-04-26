'use strict';

const selectTipo = document.querySelector("#slt_TipoLanding");
const btnRanking = document.querySelector("#buscarRanking");


let mostrar = () => {
    let pos1 = 1;
    let listaCalificaciones1 = consultarCalificaciones();
    // document.querySelector("#carouseLanding").innerHTML = "";
    
    if(selectTipo.value==0){
    for (let i = 0; i < 4; i++) {
        let centro = buscarCentro(listaCalificaciones1[i].cedulaJuridica)
        // let fecha = listaCalificaciones1[i].fecha;
       
            // let contador = 1;
            let ranking =
                `
                <div class="col-lg-3 col-md-6 float-left">
                    <div class="card" style="height: 340px;">
                        <div class="el-card-item">
                        <small>Nota `+ listaCalificaciones1[i].calificacion + `</small>
                            <h1> 0`+ i + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h4 class="box-title" style="display: -webkit-box; -webkit-line-clamp: 3;">`+ centro.nombreCentro + `</h4>`+ centro.gradoAcademico + `, `+ centro.tipoCentro + `</small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
        `
            $("#carouselLanding").append(ranking);
        }


        for (let i = 4; i < 8; i++) {
            let centro = buscarCentro(listaCalificaciones1[i].cedulaJuridica)
            // let fecha = listaCalificaciones1[i].fecha;
            // let anno1 = fecha.substr(6, 4);
            // if (anno1 == anno) {
                // let contador = 1;
                let ranking =
                    `
                    <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones1[i].calificacion + `</small>
                            <h1> 0`+ i + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro.nombreCentro + `</h4>`+ centro.gradoAcademico + ` ,`+ centro.tipoCentro + `</small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
            `
                $("#carouselLanding1").append(ranking);
            }
    }

}



let ranking = () => {
    let tipo = selectTipo.value;
    
   
    // let anno = selectAnno.value;
    let listaCalificaciones = consultarCalificaciones();
    document.querySelector("#carouselLanding").innerHTML = "";
    document.querySelector("#carouselLanding1").innerHTML = "";
    switch (tipo) {

        case "0":
        let pos0 = 1;
        for(let i=0; i < listaCalificaciones.length; i++){
        // for (i = 0; i < 4; i++) {
            let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica);
            if (pos0 < 5) {
                let ranking =
                    `
                    <div class="col-lg-3 col-md-6 float-left">
                    <div class="card" style="height: 340px;">
                        <div class="el-card-item">
                       <small>Nota `+ listaCalificaciones[i].calificacion + `</small>
                            <h1> 0`+ pos0  + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h4 class="box-title">`+ centro.nombreCentro + `</h4>`+ centro.gradoAcademico + ` ,`+ centro.tipoCentro + ` </small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            `
                $("#carouselLanding").append(ranking);
                pos0 ++;
            // }
        }
        // for (let i = 3; i < 7; i++) {
            // let centro = buscarCentro(listaCalificaciones[i].cedulaJuridica);
            if (pos0 > 4 && pos0 < 9) {
                let ranking =
                    `
                    <div class="col-lg-3 col-md-6 float-left">
                    <div class="card" style="height: 340px;">
                        <div class="el-card-item">
                       <small>Nota `+ listaCalificaciones[i].calificacion + `</small>
                            <h1> 0`+ pos0  + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h4 class="box-title">`+ centro.nombreCentro + `</h4>`+ centro.gradoAcademico + ` ,`+ centro.tipoCentro + ` </small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            `
                $("#carouselLanding1").append(ranking);
                pos0 ++;
            // }
        }
    }

        break;


        case "1":
        let pos1 = 1;

       for(let i=0; i < listaCalificaciones.length; i++){
            let centro1 = buscarCentro(listaCalificaciones[i].cedulaJuridica);
            if (centro1.gradoAcademico == "Primaria" && centro1.tipoCentro == "Público" && pos1 < 5) {
                // for (i = 0; i < 4; i++) {
                let ranking =
                    `
                    <div class="col-lg-3 col-md-6 float-left">
                    <div class="card" style="height: 340px;">
                        <div class="el-card-item">
                       <small>Nota `+ listaCalificaciones[i].calificacion + `</small>
                            <h1> 0`+ pos1 + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro1.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h4 class="box-title">`+ centro1.nombreCentro + `</h4>`+ centro1.gradoAcademico + ` ,`+ centro1.tipoCentro + ` </small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            `
                $("#carouselLanding").append(ranking);
                pos1++;
            // }
        }

            if (centro1.gradoAcademico == "Primaria" && centro1.tipoCentro == "Público" && pos1 > 4 && pos1 < 9) {
                // for (let i = 3; i < 7; i++) {
                let ranking =
                    `
                    <div class="col-lg-3 col-md-6 float-left">
                    <div class="card" style="height: 340px;">
                        <div class="el-card-item">
                       <small>Nota `+ listaCalificaciones[i].calificacion + `</small>
                            <h1> 0`+ pos1 + `</h1>
                            <hr id="orange">
                            <div class="image">
                                <img src="`+ centro1.fotoCentro + `" width="100%" height= "125px" alt="user">
                            </div>
                            <div class="el-card-content">
                                <h4 class="box-title">`+ centro1.nombreCentro + `</h4>`+ centro1.gradoAcademico + ` ,`+ centro1.tipoCentro + ` </small>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            `
                $("#carouselLanding1").append(ranking);
                pos1++;
            // }
        }
        }
        break;

        case "2":
        let pos2 = 1;
        for(let m=0; m < listaCalificaciones.length; m++){
                let centro2 = buscarCentro(listaCalificaciones[m].cedulaJuridica);
                if (centro2.gradoAcademico == "Primaria" & centro2.tipoCentro == "Privado" && pos2 < 5) {
                    // for (let m = 0; m < 4; m++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[m].calificacion + `</small>
                            <h1> 0`+  pos2 + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro2.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro2.nombreCentro + `</h4>`+ centro2.gradoAcademico + ` ,`+ centro2.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding").append(ranking);
                    pos2++;
            
                }
            // }

                if (centro2.gradoAcademico == "Primaria" & centro2.tipoCentro == "Privado" && pos2 > 4 && pos2 < 9) {
                    // for (let m = 3; m < 7; m++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[m].calificacion + `</small>
                            <h1> 0`+  pos2  + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro2.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro2.nombreCentro + `</h4>`+ centro2.gradoAcademico + ` ,`+ centro2.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding1").append(ranking);
                    pos2++;
            
                // }
            }
            }
            break;

            

            case "3":
            let pos3 = 1;
            for(let h=0; h < listaCalificaciones.length; h++){
                let centro3 = buscarCentro(listaCalificaciones[h].cedulaJuridica);
                if (centro3.gradoAcademico == "Secundaria" && centro3.tipoCentro == "Público" && pos3 < 5) {
                    // for (h = 0; h < 4; h++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[h].calificacion + `</small>
                            <h1> 0`+ pos3 + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro3.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro3.nombreCentro + `</h4>`+ centro3.gradoAcademico + ` ,`+ centro3.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding").append(ranking);
                    pos3++;
            
                // }
            }

                if (centro3.gradoAcademico == "Secundaria" && centro3.tipoCentro == "Público" && pos3 > 4 && pos3 < 9) {
                    // for (h = 3; h < 7; h++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[h].calificacion + `</small>
                            <h1> 0`+ pos3 + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro3.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro3.nombreCentro + `</h4>`+ centro3.gradoAcademico + ` ,`+ centro3.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding1").append(ranking);
                    pos3++;
                // }
            }
        }
            break;

            case "4":
            let pos4 = 1;
            for(let r=0; r < listaCalificaciones.length; r++){
                let centro4 = buscarCentro(listaCalificaciones[r].cedulaJuridica);
                if (centro4.gradoAcademico == "Secundaria" && centro4.tipoCentro == "Privado" && pos4 < 5) {
                    // for (r = 0; r < 4; r++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[r].calificacion + `</small>
                            <h1> 0`+ pos4 + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro4.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro4.nombreCentro + `</h4>`+ centro4.gradoAcademico + ` ,`+ centro4.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding").append(ranking);
                    pos4++;
            
                // }
            }

            
                if (centro4.gradoAcademico == "Secundaria" && centro4.tipoCentro == "Privado" && pos4 > 4 && pos4 < 9) {
                    for (r = 3; r< 7; r++) {
                    let ranking =
                        `
                        <div class="col-lg-3 col-md-6 float-left">
                        <div class="card" style="height: 340px;">
                            <div class="el-card-item">
                            <small>Nota `+ listaCalificaciones[r].calificacion + `</small>
                            <h1> 0`+ pos4 + `</h1>
                                <hr id="orange">
                                <div class="image">
                                    <img src="`+ centro4.fotoCentro + `" width="100%" height= "125px" alt="user">
                                </div>
                                <div class="el-card-content">
                                    <h4 class="box-title">`+ centro4.nombreCentro + `</h4>`+ centro4.gradoAcademico + ` ,`+ centro4.tipoCentro + ` </small>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                `
                    $("#carouselLanding1").append(ranking);
                    pos4++;
            
                }
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