window.addEventListener("load",function(){
	var agregaLista = document.getElementById("agregaLista");
	var formList = document.getElementById("formList");
	
	//agrega un focus con color de fondo
	


	agregaLista.addEventListener("click",function(){
		//var contenedor = document.createElement("div"); //crea un elemento div

		var listaInpu = document.createElement("input"); // crea un elemento input
		listaInpu.setAttribute("placeholder", "Añadir una lista"); // al input le agrega atributos
		var buttonAgregar = document.createElement("button");
		var textButt = document.createTextNode("añadir lista");// crea texto para el boton
		buttonAgregar.appendChild(textButt); //aqui agregamos el texto al boton
	    formList.appendChild(buttonAgregar).classList.add("botonAgregar");
	    formList.appendChild(listaInpu).classList.add("listaInput");
	    var guardaContenedor = document.getElementById("guardaContenedor");
	    formList.replaceChild(agregaLista);
	 //    buttonAgregar.addEventListener("click",function(e){
			
		// 	var title=document.createElement("div");
		// 	var textoTitle=inputTexto.value;
		// 	title.innerHTML=textoTitle;
		// 	formList.appendChild(title).classList.add("titleLista");
			
		// });

		buttonAgregar.onclick = function guardarList(e){
			var anterior = e.target.parentElement;
			var nombreLista = document.createTextNode(listaInpu.value);
			var contenedor = document.createElement("div");
			contenedor.appendChild(nombreLista);
			anterior.parentElement.replaceChild(contenedor, anterior);
			contenedor.appendChild(listaInpu);
			guardaContenedor.appendChild(contenedor);

		}

	});
});
