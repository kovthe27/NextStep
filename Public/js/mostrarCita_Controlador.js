'use strict';


let crearMenuCentro = () => {
    //Obtiene el usuario del localStorage
    let usuario = JSON.parse(localStorage.getItem('centroEducativo'));
    if (usuario == "Notlogin") {
        window.location.assign("pages-error-404.html");
    } else {
        let listaUsuarios = consultar_centrosCidas();

        for (let i = 0; i < listaUsuarios.length; i++) {
            if (listaUsuarios[i].cedJuridica == usuario) {
                document.querySelector("#imgPerfil").src = listaUsuarios[i].fotoCentro;
                document.querySelector("#nombrePerfil1").innerHTML = listaUsuarios[i].nombreCentro;
                document.querySelector("#nomCentro").innerHTML = listaUsuarios[i].nombreCentro;

                document.querySelector("#imgPerfil2").src = listaUsuarios[i].fotoCentro;
                document.querySelector("#nombrePerfil2").innerHTML = listaUsuarios[i].nombreCentro;
                document.querySelector("#correo").innerHTML = listaUsuarios[i].emailCentro;

            }
        }
    }

}

let mostrar_datosCita = () =>{
    let cita = consultar_cita();
    // console.log(cita);

    

    for(let i = 0; i < cita.length; i++){
        if (cita[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        var fechaFormato = new Date(cita[i].fecha);
        var nuevaFecha = fechaFormato.getDate() + "-" + fechaFormato.getMonth() + "-" + fechaFormato.getFullYear();
        let card = "";
        if(cita[i].estado == "Activo"){
            card = 
            `<div class="card-cita col-lg-4 col-md-6 float-left">
                <div class="card bg-white">
                    <div class="card-body">
                    <div class="carousel-inner">
                        <div class="carousel-item flex-column active">
                        <i class="ti-calendar mb-1 fa-2x"></i>
                        <h4 class="mt-2">${cita[i].nombre}</h4>
                        <p><i class="ti-mail"></i>${cita[i].correo}</p>
                        <p><i class="ti-calendar"></i> Fecha: ${nuevaFecha} <br> <span><i class="ti-time"></i> Hora: ${cita[i].hora} </span> </p>
                        <div id="aceptado-label-${cita[i]._id}" class="aceptado-label"><p>Aceptada</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`;
        }else if(cita[i].estado == "Rechazado") {
            card = 
            `<div class="card-cita col-lg-4 col-md-6 float-left">
                <div class="card bg-white">
                    <div class="card-body">
                    <div class="carousel-inner">
                        <div class="carousel-item flex-column active">
                        <i class="ti-calendar mb-1 fa-2x"></i>
                        <h4 class="mt-2">${cita[i].nombre}</h4>
                        <p><i class="ti-mail"></i>${cita[i].correo}</p>
                        <p><i class="ti-calendar"></i> Fecha: ${nuevaFecha} <br> <span><i class="ti-time"></i> Hora: ${cita[i].hora} </span> </p>
                        <div id="rechazado-label-${cita[i]._id}" class="rechazado-label"><p>Rechazada</p></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>`;
        } else {
            card = 
            `<div class="card-cita col-lg-4 col-md-6 float-left">
            <div class="card bg-white">
                <div class="card-body">
                <div class="carousel-inner">
                    <div class="carousel-item flex-column active">
                    <i class="ti-calendar mb-1 fa-2x"></i>
                    <h4 class="mt-2">${cita[i].nombre}</h4>
                    <p><i class="ti-mail"></i>${cita[i].correo}</p>
                    <p><i class="ti-calendar"></i> Fecha: ${nuevaFecha} <br> <span><i class="ti-time"></i> Hora: ${cita[i].hora} </span> </p>
                    <div id="contenedor-botones-${cita[i]._id}">
                        <button id="btn-aceptarCita-${cita[i]._id}" class="btn-aceptarCita btn btn-sm btn-themecolor justify-content-start waves-effect waves-light m-t-15" data-id="${cita[i]._id}">Aceptar</button>
                        <button id="btn-rechazarCita-${cita[i]._id}" class="btn-rechazarCita btn btn-sm ml-2 btn-outline-danger justify-content-start waves-effect waves-light m-t-15" data-id="${cita[i]._id}" data-cita="${cita[i].correo}">Rechazar</button>
                    </div>
                    <div style="display:none" id="aceptado-label-${cita[i]._id}" class="aceptado-label"><p>Aceptada</p></div>
                    <div style="display:none" id="rechazado-label-${cita[i]._id}" class="rechazado-label"><p>Rechazada</p></div>
                    </div>
                </div>
                </div>
            </div>
        </div>`;
        }
        
        $("#cargarCitas").append(card);
    };
    
}
};


//Aceptar Cita

document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn-aceptarCita')) {
        let idCita = e.target.getAttribute('data-id');
        document.querySelector(`#contenedor-botones-${idCita}`).style.display = "none";
        document.querySelector(`#aceptado-label-${idCita}`).style.display = "block";
        actualizar_estado(idCita, "Activo");
    }
})

//Rechazar Cita
document.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('btn-rechazarCita')) {
        let idCita = e.target.getAttribute('data-id');
        let cita = e.target.getAttribute('data-cita');
        document.querySelector(`#contenedor-botones-${idCita}`).style.display = "none";
        document.querySelector(`#rechazado-label-${idCita}`).style.display = "block";
        actualizar_estado(idCita, "Rechazado");
        enviar_MailCita(cita, cita.correo);
    }
});




let cerrarSesion = () =>{
    localStorage.setItem('centroEducativo', JSON.stringify("Notlogin"));
    window.location.assign("landing_page.html");
}

mostrar_datosCita();
crearMenuCentro();




