var Tabla_number = document.getElementById("Tabla_number");
var Tabla_Info = document.getElementById("Tabla_Info");
var Tm = document.getElementById("TABLA");

multiplica = (a,b)=>{
	return a * b
};

const Crear_Tabla = ()=>{

Tabla_Info.innerHTML = `Tabla de multiplicar del numero ${Tabla_number.value}`;

if(Tabla_number.value > 0||Tabla_number.value < 0){
	for(let i = 1 ;i <= 10 ;i++){
		var op = multiplica(i,Tabla_number.value);
		Tm.innerHTML += `${Tabla_number.value} x ${i} = ${op}<br>`;
	};
}else if(Tabla_number.value == ""||Tabla_number.value == null){
	alert("Debe ingresar un valor");
	Tabla_Info.innerHTML = "Debe ingresar un numero";
	Tabla_Info.style.color = "#000"
}else{
	alert("Esta tabla no existe");
	Tabla_Info.innerHTML = "la tabla que ingreso no existe";
	Tabla_Info.style.color = "#f00"
};
};

const Reiniciar = ()=>{
	Tabla_Info.innerHTML = "";
	Tm.innerHTML = "";
}