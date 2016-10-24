var agrega = document.getElementById("agregaLista");

agrega.addEventListener("focus", function(){
	agrega.style.background = "#F693FF";
});



agrega.addEventListener("click", function(){
	var contenedor = document.createElement("div");
	var listaInpu = document.createElement("input");
	var buttonAgregar = document.createElement("button");
	var textButt = document.createTextNode("añadir lista");
	buttonAgregar.appendChild(textButt);
    contenedor.appendChild(buttonAgregar);
    contenedor.appendChild(listaInpu);
});

