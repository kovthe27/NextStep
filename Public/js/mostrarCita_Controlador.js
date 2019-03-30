'use strict';


let mostrar_datosCita = () =>{
    let cita = consultar_cita();
    // console.log(cita);

    

    for(let i = 0; i < cita.length; i++){
        if (cita[i].cedulaJuridica == JSON.parse(localStorage.getItem('centroEducativo'))) {
        var fechaFormato = new Date(cita[i].fecha);
        var nuevaFecha = fechaFormato.getDate() + "-" + fechaFormato.getMonth() + "-" + fechaFormato.getFullYear();
        var card = 
        "<div class=\"col-lg-3 col-md-6 float-left\">"+
                   "<div class=\"card bg-white\">"+
                       "<div class=\"card-body\">"+
                                "<div class=\"carousel-inner\">"+
                                    "<div class=\"carousel-item flex-column active\">"+
                                    "<i class=\"ti-calendar mb-1 fa-2x\"></i>"+
                                        "<h4 class=\"mt-2\">"+cita[i].nombre+"</h4>"+
                                        "<p><i class=\"ti-calendar\"></i> Fecha: "+nuevaFecha+"<br> <span><i class=\"ti-time\"></i> Hora:"+cita[i].hora+"</span> </p>"+
                                        "<div>"+
                                           "<button class=\"btn btn-sm btn-themecolor justify-content-start waves-effect waves-light m-t-15\">Aceptar</button>"+
                                            "<button class=\"btn btn-sm ml-2 btn-outline-danger justify-content-start waves-effect waves-light m-t-15\">Rechazar</button>"+
                                        "</div>"+
                                    "</div>"+
                                    "</div>"+
                                    " </div>"+
                                    "</div>"+
                                    "</div>"+
        $("#cargarCitas").append(card);
    };
    
}
};


mostrar_datosCita();



