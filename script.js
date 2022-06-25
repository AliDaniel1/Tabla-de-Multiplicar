var Tabla_number = document.getElementById("Tabla_number");
var Tabla_Info = document.getElementById("Tabla_Info");
var TABLA = document.getElementById("TABLA");

const multiplicar = (a,b)=>{
	return a * b
};

const Crear_Tabla = ()=>{

Tabla_Info.innerHTML = `Tabla de multiplicar del numero ${Tabla_number.value}`;

if(Tabla_number.value > 0||Tabla_number.value < 0){
	for(let i = 1 ;i <= 10 ;i++){
		var op = multiplicar(i,Tabla_number.value);
		TABLA.innerHTML += `${Tabla_number.value} x ${i} = ${op}<br>`;
		Tabla_Info.style.color = "#3793F0"
	};
}else if(Tabla_number.value == ""||Tabla_number.value == null){
	alert("Debe ingresar un valor");
	Tabla_Info.innerHTML = "Debe ingresar un numero";
	Tabla_Info.style.color = "#000"
}else{
	alert("Esta tabla no existe");
	Tabla_Info.innerHTML = "La tabla que ingreso no existe,intente con otro valor";
	Tabla_Info.style.color = "#ff3f3f"
};
};

const Reiniciar = ()=>{
	Tabla_number.value = "";
	Tabla_Info.innerHTML = "";
	TABLA.innerHTML = "";
}

document.addEventListener("keydown" , (e)=>{
	const tecla = event.key;
	if(tecla === 'Backspace'){
		return Reiniciar();
	};
})