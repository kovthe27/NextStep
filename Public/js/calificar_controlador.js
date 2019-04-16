'use strcit';
const btnEnviarForm = document.querySelector("#btn_enviarForm");
let numero=0;
let total=0;

let mostrarFormulario = () => {
    let listaFormulario = getFormulario();
    let nombreForm = JSON.parse(localStorage.getItem('nombreFormulario'));
    let periodoForm = JSON.parse(localStorage.getItem('periodoFormulario'));
    let numero=0;

    for (let i = 0; i < listaFormulario.length; i++) {
        if (listaFormulario[i].nombre == nombreForm) {
            total = total + parseInt(listaFormulario[i].select,10);
            crearDecimal(listaFormulario[i].item, listaFormulario[i].select);
        }
    }
}

let crearDecimal = (pnombre, ppeso) =>{
          let widget = `
          <div class=" bg-transparent text-left" data-gs-x="0" data-gs-y="5" data-gs-width="12" data-gs-height="1">
                        <div class="">
                            <div class="mt-3 col-md-12 ">
                                <p id="item`+numero+`" class="form-control col-md-8 text-left mr-2" style="float: left;">`+pnombre+`</p>
                                <select id="select`+numero+`"class="form-control col-md-2">
                                    <option>--Calificar--</option>
                                    <option value=`+ppeso+`>Si</option>
                                    <option value=0>No</option>
                                </select>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        
        `
        numero++;
        $("#awo").append(widget);
   
}

let EnviarCalificacion = () =>{
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));
    let puntaje=0;

    for(let i=0; i<numero; i++){
        let select = "#select"+i;
        select = select.toString();
        select = document.querySelector(select).value;
        puntaje = puntaje + parseInt(select,10);
    }
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let fecha = dd + '/' + mm + '/' + yyyy;
    let calificacion = Math.round((puntaje * 100)/total);

    registrarCalificacion(cedulaJuridica,calificacion, fecha);
    // window.location.reload("centrosAdmin.html");
}

mostrarFormulario()
btnEnviarForm.addEventListener('click', EnviarCalificacion);