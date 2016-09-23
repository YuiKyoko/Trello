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
        tarjetaNueva.style.display = "none";

        var area = document.createElement("textarea");
        area.classList.add("textS");
        lista.appendChild(area);
        lista.insertBefore(area,nodo.nextSibling);

        var btn = document.createElement("button");
        var btnNodo = document.createTextNode("Añadir");
        btn.classList.add("btn");
        btn.appendChild(btnNodo);
        lista.appendChild(btn);
        lista.insertBefore(btn,area.nextSibling);
        });
    }
});
