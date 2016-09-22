window.addEventListener("load",function () {
	var oculto=document.getElementById("oculto");
	var mostrar=document.getElementById("formulario");

	oculto.addEventListener("click", function () {
		oculto.style.display="none";
		mostrar.style.display="block";
	});
});
