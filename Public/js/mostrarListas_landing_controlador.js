'use strict';

  // cargarListas en landing

  let crearListaLanding = (nombre) => {
    // let nombreLista = getNombreListaLanding();
    // let listaTipos = getListaTiposLanding();
    let user = "MEPAdmin1";
    let lista = getListaLanding();
    // document.querySelector("#txt_titulo").innerHTML = "Lista: " + nombreLista;
  
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].cedula == user) {
            if (lista[i].nivel == nombre) {
                let nuevalista =
                    `<tr>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].cantidad + `</p>
                </td>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].tipo + `</p>
                </td>
                <td class="title">
                    <p class="link" id="lista`+ i + `" href="javascript:voide(0)">` + lista[i].descripcion + `</p>
                </td>
                </tr>`
  
                $("#TblUtiles_"+nombre+"").append(nuevalista)
            }
        }
    }
  }

  
  
  let mostrarListaLanding = () => {
    let lista = mostrar_utilesAdministrador();

    for(let i = 0; i < lista.length; i++){
      let listaLanding =
            "<div class=\"col-lg-3 col-md-6 float-left\">"+
          "<div class=\"card\">"+
          "<div class=\"el-card-content\">"+
          "<h3 class=\"box-title\">"+lista[i].nombre+"</h3>"+
          "<a class=\"btn waves-effect waves-light btn-rounded btn-sm btn-warning image-popup-vertical-fit\ alt=\"default\" data-toggle=\"modal\" data-target=\"#nombreLista"+lista[i].nombre+"\" href=\"#\"><i class=\"sl-icon-magnifier\"></i>Ver</a>"+
          "<br>"+
          "</div>"+
          "</div>"+
          "</div>"+


          "<div id=\"nombreLista"+lista[i].nombre+"\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"vcenter\" aria-hidden=\"true\" style=\"display: none;\">"+
          "<div class=\"modal-dialog modal-dialog-centered\">"+
          "<div class=\"modal-content\">"+
          " <div class=\"modal-header\">"+
          "   <h4 class=\"modal-title\" id=\"vcenter\">Lista de útiles</h4>"+
          "   <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>"+
                          " </div>"+

          "<div class=\"modal-body pt-0\" id=\"nombreLista"+lista[i].nombre+"\">"+
          "<div class=\"card-body\">"+
          " <table class=\"tablesaw table-striped table-hover table-bordered table tablesaw-columntoggle\" data-tablesaw-mode=\"columntoggle\" id=\"tablesaw-1093\">"+
          "<thead>"+
          " <tr>"+
          "   <th>Cantidad</th>"+
          "  <th>Artículo</th>"+
          "  <th>Descripción</th>"+

          "   </tr>"+
          " </thead>"+
          "  <tbody id=\"TblUtiles_"+lista[i].nombre+"\">"+
          " </tbody>"+
          "  </table>"+
          "  </div>"+
          " </div>"+
          "</div></div></div>"


          $("#listasLanding").append(listaLanding);
          crearListaLanding(lista[i].nombre);

         
  };
};


mostrarListaLanding();


// crearListaLanding();