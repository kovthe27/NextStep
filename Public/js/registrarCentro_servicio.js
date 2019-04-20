'use strict';

let imagenUrl = '';

$(function() {
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'nextstep', api_key: '514151394451531'});

    // Upload button
    let uploadButton = $('#btnSeleccionarImagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'nextstep', upload_preset: 'zd6003wd', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
            //  console.log(id);
            
            imagenUrl = processImage(id);
            // console.log(imagenUrl);

            imagenUrl = imagenUrl.replace('file', 'http');
            document.querySelector('#imgFoto').src = imagenUrl;
            return imagenUrl;
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}

//Registro Centro

let registrar_Centro = (pnombreCentro, pnombreComercial, pcedJuridica, pemailCentro, ptelCentro, pfaxCentro, pannoFundCentro, psitioWeb, pprovinciaCentro, pcantonCentro, pdistritoCentro, pdireccionCentro, ptipoCentro, pgradoAcademico, preferenciaHistorica, parchivosCentro, pfotoCentro) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_centro",
    method: "POST",
    data: {
        nombreCentro: pnombreCentro,
        nombreComercial: pnombreComercial,
        cedJuridica: pcedJuridica,
        emailCentro: pemailCentro,
        telCentro: ptelCentro,
        faxCentro: pfaxCentro,
        annoFundCentro: pannoFundCentro,
        sitioWeb: psitioWeb,
        provinciaCentro: pprovinciaCentro,
        cantonCentro: pcantonCentro,
        distritoCentro: pdistritoCentro,
        direccionCentro: pdireccionCentro,
        tipoCentro: ptipoCentro,
        gradoAcademico: pgradoAcademico,
        referenciaHistorica: preferenciaHistorica,
        archivosCentro: parchivosCentro,
        fotoCentro: pfotoCentro
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (response) {
    obtener_datosContacto("response.centro._id", pcedJuridica);
    
  });

  request.fail(function (jqXHR, textStatus) {
    swal.fire({
      type: 'error',
      title: 'El usuario no fue registrado',
      text: 'Ocurrió un error inesperado, por favor intente de nuevo'
    });
  });
};

let listar_Centros = () => {
  let lista_Centros = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_centro",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    lista_Centros = res.registrar_Centro;
    
  });

  request.fail(function (jqXHR, textStatus) {
    
  });
  return lista_Centros;
 
};

let buscar_centro = (p_id) => {
  let centro = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/buscar_centro",
    method: "POST",
    data: {
      cedJuridica: p_id
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async : false
  });

  request.done(function (res) {
    centro = res;
    console.log("success");
    
  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

return centro;
   
};



let actualizar_centro = (pnombreCentro, pnombreComercial, pcedJuridica, pemailCentro, ptelCentro, pfaxCentro, pannoFundCentro, psitioWeb, pprovinciaCentro, pcantonCentro, pdistritoCentro, pdireccionCentro, ptipoCentro, pgradoAcademico, preferenciaHistorica, parchivosCentro, pfotoCentro, pid) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/actualizar_centro",
    method: "POST",
    data: {
        nombreCentro: pnombreCentro,
        nombreComercial: pnombreComercial,
        cedJuridica: pcedJuridica,
        emailCentro: pemailCentro,
        telCentro: ptelCentro,
        faxCentro: pfaxCentro,
        annoFundCentro: pannoFundCentro,
        sitioWeb: psitioWeb,
        provinciaCentro: pprovinciaCentro,
        cantonCentro: pcantonCentro,
        distritoCentro: pdistritoCentro,
        direccionCentro: pdireccionCentro,
        tipoCentro: ptipoCentro,
        gradoAcademico: pgradoAcademico,
        referenciaHistorica: preferenciaHistorica,
        archivosCentro: parchivosCentro,
        fotoCentro: pfotoCentro,
        id : pid
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function(res){
    swal.fire({
        type : 'success',
        title : 'Proceso realizado con éxito',
        text : res.msg
    });

  });

  request.fail(function(res){
    swal.fire({
        type : 'error',
        title : 'Proceso no realizado',
        text : res.msg
    });

  });
};

let eliminar_centro = (pid) => {
  let request = $.ajax({
      url : 'http://localhost:4000/api/eliminar_centro',
      method : "POST",
      data : {
        id: pid
      },
      dataType : "json",
      contentType : 'application/x-www-form-urlencoded; charset=UTF-8' 
  });

  request.done(function(res){
      if(res.success){
          swal.fire({
              type : 'success',
              title : 'Proceso realizado con éxito',
              text : res.msg,
              onClose: () => {
                window.location.href = "http://localhost:3000/public/landing_page.html";
              }
          });
      }else{
          swal.fire({
              type : 'Error',
              title : 'Proceso realizado sin éxito',
              text : res.msg
          });
      }
      

  });

  request.fail(function(res){
      swal.fire({
          type : 'error',
          title : 'Proceso no realizado',
          text : res.msg
      });

  });
};

