'use strict';

// Listas
document.querySelector('#txt_search').onkeyup = function(){
    filtrarTabla('#tabla', this.value);
}

let filtrarTabla = (id, value) =>{
    var rows = document.querySelectorAll(id + ' tbody tr');
    
    for(var i = 0; i < rows.length; i++){
        var showRow = false;
        
        var row = rows[i];
        row.style.display = 'none';
        
        for(var x = 0; x < row.childElementCount; x++){
            if(row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
                showRow = true;
                break;
            }
        }
        
        if(showRow){
            row.style.display = null;
        }
    }
}