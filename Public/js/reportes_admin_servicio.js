let consultarCentros = () =>{
    let lista_utilesAdmin = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_centro",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        lista_utilesAdmin = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return lista_utilesAdmin;
}

let consultarRanking = () =>{
    let lista_utilesAdmin = [];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_ranking",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        lista_utilesAdmin = res;
      console.log("success");
  
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });
  
    return lista_utilesAdmin;
}

let consultarAnnos = () =>{
    let lista_utilesAdmin = [];
    let annos=[];

    let request = $.ajax({
      url: "http://localhost:4000/api/consultar_ranking",
      method: "GET",
      data: {
      },
      dataType: "json",
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      async: false
    });
  
    request.done(function (res) {
        lista_utilesAdmin = res;
      console.log("success");
    });
  
    request.fail(function (jqXHR, textStatus) {
      console.log("fail");
    });

    return lista_utilesAdmin;
}