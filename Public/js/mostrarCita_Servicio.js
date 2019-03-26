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
    
    