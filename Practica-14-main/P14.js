function agregar(tarea){
    var li = document.createElement("li");
    var t = document.createTextNode(tarea);
    li.appendChild(t);
    document.getElementById("milista").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    li.addEventListener('click', function(ev){
        if (ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
            actualizar_barra();
        }
    });

    span.onclick = function(){
        this.parentElement.remove();
        actualizar_barra();
    };
}

function nueva_tarea(){
    var entrada = document.getElementById("Tarea");
    var valorEntrada = entrada.value;
    if (valorEntrada === ""){
        alert("inserta una tarea");
        return;
    }
    agregar(valorEntrada);
    entrada.value = "";
    actualizar_barra();
}

function actualizar_barra(){
    var barra = document.getElementById("myBar");
    var liList = document.getElementsByTagName("li");
    var largo = liList.length;
    if (largo === 0){
        barra.style.width = '0%';
        barra.innerHTML = '0%';
        return;
    }
    var terminadas = document.getElementsByClassName("checked");
    var numTerminadas = terminadas.length;
    var unoPorciento = 100/largo;
    var porcentaje = Math.round(unoPorciento * numTerminadas);
    barra.style.width = porcentaje + '%';
    barra.innerHTML = porcentaje + '%';
}
