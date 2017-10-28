var options= ["piedra", "papel", "tijera"]

function game (user_option) {
var pc = Math.floor((Math.random() * 3) );
var output= document.getElementById("output");
var result;
console.log ("user " + user_option);
console.log ( "pc " + options[pc]);
//options when you are winner!
if (user_option ==="piedra"  &&  options[pc] === "tijera") {
	result ="Tu ganas!!";
} else if (user_option == "papel" && options[pc] == "piedra") {
	result= "Tu ganas!!";
} else if (user_option == "tijera" && options[pc] == "papel"){
	result = "Tu ganas!!";

//options when you are the loser
}else if (options[pc] == "piedra" && user_option == "tijera") {
	result = "Perdistes!!";
} else if (options[pc] == "papel" && user_option == "piedra") {
	result ="Perdistes!!";
} else if (options[pc] == "tijera" && user_option == "papel") {
	result="Perdistes";

//options when the game is draw
	
} else if (user_option == "piedra" && options[pc] == "piedra") {
	result = "Es empate";
} else if (user_option == "papel" && options[pc] == "papel") {
	result="Es empate";
} else if (user_option == "tijera" && options[pc] == "tijera") {
	result= "Es empate";
}
output.innerHTML = result;
console.log(result);

} // FIN DE FUNCION
