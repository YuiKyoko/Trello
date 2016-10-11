window.addEventListener("load",function(){
    var span = document.getElementById("span");
    var boton = document.getElementById("boton");
    var texto = document.getElementById("texto");
    var formulario= document.getElementById("formulario");
    var form = document.getElementById("form");
    var contenedor = document.getElementById("contenedor");
    
    span.addEventListener("click",function(e){
        e.preventDefault();
        mostrarFormulario();
        texto.focus();
    });

    boton.addEventListener("click",function(e){
        e.preventDefault();
        mostrarLista();
        //mostrarTarjeta();
        texto.value = "";
    });

    function mostrarFormulario(){
        formulario.style.display = "inline-block";
        span.style.display = "none";
        form.style.display = "inline-block";
    }
    function mostrarLista(){
        formulario.style.display = "none";
        span.style.display = "inline-block";
        var lista = document.createElement("div");
        var nodo = document.createTextNode(texto.value);
        lista.classList.add("text");
        lista.appendChild(nodo);
        lista.classList.add("lista");
        contenedor.insertBefore(lista,form.previousSibling);
        lista.style.display = "inline-block";
        lista.style.cssFloat = "left";

        var tarjetaNueva = document.createElement("a");
        tarjetaNueva.href= "#";
        var tarjetaNodo =document.createTextNode("Añadir una tarjeta ...")
        tarjetaNueva.appendChild(tarjetaNodo);
        lista.appendChild(tarjetaNueva);
        tarjetaNueva.classList.add("tarjeta");

        tarjetaNueva.addEventListener("click", function(){
            this.style.display = "none";

            var area = document.createElement("textarea");
            area.classList.add("textS");
            lista.appendChild(area);
            lista.insertBefore(area,nodo.nextSibling);

            var btn = document.createElement("button");
            var btnNodo = document.createTextNode("Añadir");
            btn.classList.add("btn");
            btn.appendChild(btnNodo);
            btn.addEventListener("click", mostrarTarjeta)

            lista.appendChild(btn);
            lista.insertBefore(btn,area.nextSibling);
        });
    }
    function mostrarTarjeta(e){
        var mostrarLista = e.target.parentElement;
        var agregarTarjeta = document.createElement("a");
        agregarTarjeta.href= "#";
        var añadirTarjeta =document.createTextNode("Añadir una tarjeta ...")
        agregarTarjeta.appendChild(añadirTarjeta);
        mostrarLista.appendChild(agregarTarjeta);
        agregarTarjeta.classList.add("tarjeta");

        agregarTarjeta.addEventListener("click", function(){
        agregarTarjeta.style.display = "none";

        var area = document.createElement("text");
        area.classList.add("inputS");
        mostrarLista.appendChild(area);
        mostrarLista.insertBefore(area,nodo.nextSibling);

        var btn = document.createElement("button");
        var btnNodo = document.createTextNode("Añadir");
        btn.classList.add("btn");
        btn.appendChild(btnNodo);
        mostrarLista.appendChild(btn);
        mostrarLista.insertBefore(btn,area.nextSibling);
        });
    }

    function start(e) {
    e.dataTransfer.effecAllowed = 'move'; 
    e.dataTransfer.setData("Text", e.target.id); 
    e.target.style.opacity = '0.4'; 
    }
    function end(e){
        e.target.style.opacity = '';       
        e.dataTransfer.clearData("Data");           
    }
    function over(e) {
        if ((e.target.className == "contenedorPieza") || (e.target.id == "formulario"))
            return false;
        else
        return true;
    }
    function drop(e){
        e.preventDefault(); 
        var elementoArrastrado = e.dataTransfer.getData("Text");
        e.target.appendChild(document.getElementById(elementoArrastrado));
        comprobarPuzzle();
    }


});
