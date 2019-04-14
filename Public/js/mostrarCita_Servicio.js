'use strict';

let consultar_cita = () => {
    let lista_citas = []; 
    
      let request = $.ajax({
        url: "http://localhost:4000/api/consultar_cita",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async : false
      });
    
      request.done(function (res) {
        lista_citas = res;
        // console.log("success");
        
      });
    
      request.fail(function (jqXHR, textStatus) {
        console.log("fail");
      });
    
      return lista_citas;
      
    };
    
    let consultar_centrosCidas = () => {
      let lista_citas = []; 
      
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
          lista_citas = res;
          // console.log("success");
          
        });
      
        request.fail(function (jqXHR, textStatus) {
          console.log("fail");
        });
      
        return lista_citas;
        
      };
      

      let enviar_MailCita = (pcita, pusuario) => {
        let request = $.ajax({
          url: "http://localhost:4000/api/enviar_MailCita",
          method: "POST",
          data: {
            cita: pcita,
            usuario: pusuario
          },
          dataType: "json",
          contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
        });
  
        request.fail(function (jqXHR, textStatus) {
          console.log("fail");
        });
      
        request.done(function (msg) {
          swal.fire({
            type: 'success',
            title: 'El correo electrónico ha sido enviado al usuario',
            text: 'Se le estará notificando la razón del rechazo de la cita.'
          });
        });
      };