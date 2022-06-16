
var Tabla_Info = document.getElementById("number");
var Tm = document.getElementById("TABLA"); 

function multiplica(a,b){
	return a * b
};

let tabla = prompt("¿Que tabla de multiplicar deseas aprender?");
Tabla_Info.innerHTML = `Tabla de multiplicar del numero ${tabla}`;

if(tabla > 0||tabla < 0){
	for(let i = 1 ; i <= 10;i++){
		var op = multiplica(i,tabla);
		Tm.innerHTML += `${tabla} x ${i} = ${op}<br>`;
	};
}else if(tabla==""||tabla == null){
	alert("Debe ingresar un valor");
}else{
	alert("Esta tabla no existe");
	Tabla_Info.innerHTML = "la tabla que ingreso no existe";
}