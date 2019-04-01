'use strict';

// import { registrar_infoMatricula, consultar_infoMatricula } from "../../API/componentes/registrar_infoMatricula/registrar_infoMatricula.api";

const input_etiqueta1 = document.querySelector('#etiquetaCentro1');
const input_etiqueta2 = document.querySelector('#etiquetaCentro2');
const input_etiqueta3 = document.querySelector('#etiquetaCentro3');
const input_etiqueta4 = document.querySelector('#etiquetaCentro4');

const btn_enviarEtiquetas = document.querySelector('#btn_enviarEtiquetas');

let obtener_datosEtiquetas = () => {
    let cedulaJuridica = JSON.parse(localStorage.getItem('centroEducativo'));;
    let etiqueta1 = input_etiqueta1.value;
    let etiqueta2 = input_etiqueta2.value;
    let etiqueta3 = input_etiqueta3.value;
    let etiqueta4 = input_etiqueta4.value;

    registrar_etiquetasCentro(cedulaJuridica, etiqueta1, etiqueta2, etiqueta3, etiqueta4);
    window.location.reload();
};


btn_enviarEtiquetas.addEventListener('click', obtener_datosEtiquetas);

let mostrar_datosEtiquetas = () => {
    let etiqueta = consultar_etiquetasCentro();

    for (let i = 0; i < etiqueta.length; i++) {
        if (etiqueta[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            var etiquetaCentro =
                "<small class=\"text-white\">" + etiqueta[i].etiqueta1 + "</small> | "+
                "<small class=\"text-white\">" + etiqueta[i].etiqueta2 + "</small> | "+
                "<small class=\"text-white\">" + etiqueta[i].etiqueta3 + "</small> | "+
                "<small class=\"text-white\">" + etiqueta[i].etiqueta4 + "</small> "

            $("#creacionEtiquetas").append(etiquetaCentro);
        };
    }
};

mostrar_datosEtiquetas();