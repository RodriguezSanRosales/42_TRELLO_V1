var lista=[""];

function inic(){
  vistaLista = document.getElementById("vistaLista");
  tarea_nueva = document.getElementById("tarea_nueva");
  
}

function generar_vista(){
	vistaLista.innerHTML = "";
	vistaLista.innerHTML += "<input type='text'>" + lista[i] 
	+ "<button class='btnGuardar' onclick='guardar()'></button>";
	
} 

function guardar(){
	vistaLista.innerHTML = "";
	for (var i = 1; i < lista.length; i++) {
		vistaLista.innerHTML += "<p>" + lista[i]
		+ "</p>";
	}
} 


function agregar_lista(){
  generar_vista();
}

function agregar_lista(){
  lista.push(tarea_nueva.value);
  generar_vista();
}