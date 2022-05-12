
var tablatxt = document.getElementById("number");

function multiplica(a,b){
	return a * b
};

let tabla = prompt("¿Que tabla de multiplicar deseas aprender?");
tablatxt.innerHTML = "Tabla de multiplicar del numero " + tabla;

if(tabla > 0){
	for(let i = 1 ; i <= 10;i++){
		var op = multiplica(i,tabla);
		document.write("<h3>" + tabla + " x " + i +" = " + op + "<br>");
};
}else if(tabla==""||tabla == null){
	alert("Debe ingresar un valor")
	location.reload();
}else{
	alert("Esta tabla no existe");
	tablatxt.innerHTML = "la tabla que ingreso no existe";
}