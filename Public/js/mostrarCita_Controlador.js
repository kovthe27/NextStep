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
        var card = 
        "<div class=\"col-lg-4 col-md-6 float-left\">"+
                   "<div class=\"card bg-white\">"+
                       "<div class=\"card-body\">"+
                                "<div class=\"carousel-inner\">"+
                                    "<div class=\"carousel-item flex-column active\">"+
                                    "<i class=\"ti-calendar mb-1 fa-2x\"></i>"+
                                        "<h4 class=\"mt-2\">"+cita[i].nombre+"</h4>"+
                                        "<p><i class=\"ti-mail\"></i> "+cita[i].correo+"</p>"+
                                        "<p><i class=\"ti-calendar\"></i> Fecha: "+nuevaFecha+"<br> <span><i class=\"ti-time\"></i> Hora:"+cita[i].hora+"</span> </p>"+
                                        "<div id=\"contenedor-botones\">"+
                                           "<button id=\"btn-aceptarCita\" class=\"btn btn-sm btn-themecolor justify-content-start waves-effect waves-light m-t-15\">Aceptar</button>"+
                                            "<button id=\"btn-rechazarCita\" class=\"btn btn-sm ml-2 btn-outline-danger justify-content-start waves-effect waves-light m-t-15\">Rechazar</button>"+
                                        "</div>"+
                                        "<div style=\"display:none;\" id=\"aceptado-label\">"+
                                           "<p>Aceptada</p>"+
                                        "</div>"+
                                        "<div style=\"display:none;\" id=\"rechazado-label\">"+
                                            "<p>Rechazada</p>"+
                                        "</div>"+
                                     "</div>"+
                                "</div>"+
                        " </div>"+
                    "</div>"+
                    "</div>"+
        "</div>"
        $("#cargarCitas").append(card);
    };
    
}
};



let aceptar_cita = () =>{
    let cita = consultar_cita();
    
    for(let i = 0; i < cita.length; i++) {
        if (cita[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            
            document.getElementById("contenedor-botones").style.display = "none";
            document.getElementById("aceptado-label").style.display = "block";
        }
    }
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn-aceptarCita') {
        aceptar_cita();
    }
})

let rechazar_cita = () =>{
    let cita = consultar_cita();

    for(let i = 0; i < cita.length; i++) {
        let usuario = cita[i].correo;

        if (cita[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
            document.getElementById("contenedor-botones").style.display = "none";
            document.getElementById("rechazado-label").style.display = "block";
            enviar_MailCita(cita, usuario);

        }
    }
};

document.addEventListener('click', (e) => {
    if (e.target && e.target.id == 'btn-rechazarCita') {
        rechazar_cita();
    }
})








let cerrarSesion = () =>{
    localStorage.setItem('centroEducativo', JSON.stringify("Notlogin"));
    window.location.assign("landing_page.html");
}

mostrar_datosCita();
crearMenuCentro();




