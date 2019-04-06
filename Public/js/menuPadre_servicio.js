'use strcit';

let getUsuario = () => {
  let usuario;
  usuario = JSON.parse(localStorage.getItem('cliente'));
  return usuario;
}

let consultarListaMenuPadre = () => {
  let listaUsuarios = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_padre",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    listaUsuarios = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return listaUsuarios;
}

let consultarListaCentrosPadres = () => {
  let listaCentrosPadres = [];

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
    listaCentrosPadres = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return listaCentrosPadres;
}

let consultarListaFavoritosPadres = () => {
  let listaCentrosPadres = [];

  let request = $.ajax({
    url: "http://localhost:4000/api/consultar_favorito",
    method: "GET",
    data: {
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    async: false
  });

  request.done(function (res) {
    listaCentrosPadres = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  return listaCentrosPadres;
}

let getFotoCentro = (cedula) => {
  let centros = consultarListaCentrosPadres();
  let foto = "";

  for (let i = 0; i < centros.length; i++) {
    if (centros[i].cedJuridica == cedula) {
      foto = centros[i].fotoCentro
    }
  }
  return foto;
}

let getNombreCentro = (cedula) => {
  let centros = consultarListaCentrosPadres();
  let nombre = "";

  for (let i = 0; i < centros.length; i++) {
    if (centros[i].cedJuridica == cedula) {
      nombre = centros[i].nombreCentro
    }
  }
  return nombre;
}

let getCorreoCentro = (cedula) => {
  let centros = consultarListaCentrosPadres();
  let correo = "";

  for (let i = 0; i < centros.length; i++) {
    if (centros[i].cedJuridica == cedula) {
      correo = centros[i].emailCentro
    }
  }
  return correo;
}

let registrarFavorito = (pcorreo, pcedula) => {
  let request = $.ajax({
    url: "http://localhost:4000/api/registrar_favorito",
    method: "POST",
    data: {
      cedulaJuridica: pcedula,
      correo: pcorreo,
    },
    dataType: "json",
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
  });

  request.done(function (msg) {
    swal({
      type: 'success',
      title: 'Se agregó a favoritos',
      // text: 'Muchas gracias'
    });
  });

  request.fail(function (jqXHR, textStatus) {
    swal({
      type: 'error',
      title: 'La pregunta no pudo ser agregada',
      text: 'Por favor inténtelo de nuevo'
    });
  });
  return true;
}

let filtroGrado = (pGrado) => {
  let listaCentrosPadres = [];
  let listaFiltrada = [];

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
    listaCentrosPadres = res;
    console.log("success");

  });

  request.fail(function (jqXHR, textStatus) {
    console.log("fail");
  });

  for (let i = 0; i < listaCentrosPadres.length; i++) {
    if (listaCentrosPadres[i].gradoAcademico == pGrado) {
      listaFiltrada.push(listaCentrosPadres[i]);
    }
  }
  return listaFiltrada;
}

let filtroTipo = (lista, pGrado) => {
  let listaCentrosPadres = lista;
  let listaFiltrada = [];

  for (let i = 0; i < listaCentrosPadres.length; i++) {
    if (listaCentrosPadres[i].tipoCentro == pGrado) {
      listaFiltrada.push(listaCentrosPadres[i]);
    }
  }
  return listaFiltrada;
}

let filtrarProvincia = (lista, provincia) =>{
  let listaFiltrada=[];
  for(let i=0; i<lista.length; i++){
      if(lista[i].provinciaCentro == provincia){
        listaFiltrada.push(lista[i]);
      }
  }
  return listaFiltrada;
}

let filtrarCanton = (lista, canton) =>{
  let listaFiltrada=[];
  for(let i=0; i<lista.length; i++){
      if(lista[i].cantonCentro == canton){
        listaFiltrada.push(lista[i]);
      }
  }
  return listaFiltrada;
}

let filtrarDistritos = (lista, distrito) =>{
  let listaFiltrada=[];
  for(let i=0; i<lista.length; i++){
      if(lista[i].distritoCentro == distrito){
        listaFiltrada.push(lista[i]);
      }
  }
  return listaFiltrada;
}