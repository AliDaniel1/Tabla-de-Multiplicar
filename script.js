var Tabla_number = document.getElementById("Tabla_number");
var Text_Info = document.getElementById("Text_Info");
var Tabla = document.getElementById("Tabla");
var Selector_Fila = document.getElementById("Selector_fila");

const multiplicar = (a,b)=>{
	return a * b
};

const Crear_Tabla = (n)=>{

Text_Info.innerHTML = `Tabla de multiplicar del numero ${Tabla_number.value}`;

if(Tabla_number.value > 0||Tabla_number.value < 0){
	for(let i = 1 ;i <= n ;i++){
		var op = multiplicar(i,Tabla_number.value);
		Tabla.innerHTML += `${Tabla_number.value} x ${i} = ${Math.round(op*100)/100}<br>`;
		Text_Info.style.color = "#3793F0"
	};
}else if(Tabla_number.value == ""||Tabla_number.value == null){
	alert("Debe ingresar un valor");
	Text_Info.innerHTML = "Debe ingresar un numero";
	Text_Info.style.color = "#000"
}else{
	alert("Esta tabla no existe");
	Text_Info.innerHTML = "La tabla que ingreso no existe,intente con otro valor";
	Text_Info.style.color = "#ff3f3f"
};
};

const Reiniciar = ()=>{
	Text_Info.innerHTML = "";
	Tabla.innerHTML = "";
};

document.addEventListener("keydown" , (e)=>{
	const tecla = e.keyCode;
	if(tecla == 8){
		return Reiniciar();
	};
})

document.addEventListener("keydown" , (e)=>{
	const tecla = e.keyCode;
	if(tecla == 13){
		e.preventDefault();
	};
})
const Seleccionar_filas = ()=>{
	if(Selector_Fila.value =="1"){
		Reiniciar();
		Crear_Tabla(10);
	}if(Selector_Fila.value =="2"){
		Reiniciar();
		Crear_Tabla(20);
	}if(Selector_Fila.value =="3"){
		Reiniciar();
		Crear_Tabla(50);
	}if(Selector_Fila.value =="4"){
		Reiniciar();
		Crear_Tabla(100);
	}if(Selector_Fila.value =="5"){
		Reiniciar();
		Crear_Tabla(200);
	};
};
document.getElementById("Btn").addEventListener("click" , ()=>{
	Seleccionar_filas();
})