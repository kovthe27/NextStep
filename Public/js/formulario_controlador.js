'use strict';

const btnUnitario = document.querySelector("#btn_unitario");
const btnDecimal = document.querySelector("#btn_decimal");
const btnDivision = document.querySelector("#btn_division");
const btnGuardar = document.querySelector('#btn_guardar');

let formulario=[];
let numero=0;
document.querySelector("#nomForm").innerHTML = JSON.parse(localStorage.getItem('nombreFormulario'));

let crearUnitario = () =>{
    let grid = $('.grid-stack').data('gridstack')
          let widget = grid.addWidget(`
          <div class="grid-stack-item" data-gs-x="0" data-gs-y="5" data-gs-width="12" data-gs-height="1">
                        <div class="grid-stack-item-content">
                            <div class="mt-3 col-md-12">
                                <input id="item`+numero+`" class="form-control col-md-9" style="float: left;" type="text" placeholder="Readonly input here…">
                                <select id="select`+numero+`" class="form-control col-md-2" style="float: right;">
                                    <option>--Peso--</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                </select>


                                <div>
                   
                </div>
                            </div>
                        </div>
        `, 0, 0, 12, 1, true)
        numero++;
}

let crearDecimal = () =>{
    let grid = $('.grid-stack').data('gridstack')
          let widget = grid.addWidget(`
          <div class="grid-stack-item" data-gs-x="0" data-gs-y="5" data-gs-width="12" data-gs-height="1">
                        <div class="">
                            <div class="col-md-12">
                                <input id="item`+numero+`" class="form-control col-md-9 mr-3" type="text" placeholder="Agregue un parámetro de calificación">
                                <select id="select`+numero+`"class="form-control col-md-2">
                                    <option>--Valor--</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                    <option>60</option>
                                    <option>70</option>
                                    <option>80</option>
                                    <option>90</option>
                                    <option>100</option>
                                </select>
                            </div>
                        </div>
        `, 0, 0, 12, 1, true)
        numero++;
}

let crearDivision = () =>{
    let grid = $('.grid-stack').data('gridstack')
          let widget = grid.addWidget(`
          <div class="grid-stack-item" data-gs-x="0" data-gs-y="0" data-gs-width="12" data-gs-height="0">
          <div class="grid-stack-item-content">
              <div class="card-header bg-info">
                  <h4 class="text-white"></h4>
              </div>
          </div>
      </div>
        `, 0, 0, 12, 1, true)
}

let GuardarFormulario = () =>{
    let cedulaJuridica = JSON.parse(localStorage.getItem('cliente'));
    let nombreFormulario = JSON.parse(localStorage.getItem('nombreFormulario'));
    let periodo = JSON.parse(localStorage.getItem('periodoFormulario'));
    for(let i=0; i<numero; i++){
        let id = "#item"+i;
        id = id.toString();
        let inputID = document.querySelector(id).value;

        let select = "#select"+i;
        select = select.toString();
        let inputSelect = document.querySelector(select).value;
        console.log(cedulaJuridica);
        console.log(nombreFormulario);
        console.log(inputID);
        console.log(inputSelect);
        agregarItem(cedulaJuridica, nombreFormulario, inputID, inputSelect, periodo);
    }
}

btnUnitario.addEventListener('click', crearUnitario);
btnDecimal.addEventListener('click', crearDecimal);
// btnDivision.addEventListener('click', crearDivision);

btnGuardar.addEventListener('click', GuardarFormulario);



