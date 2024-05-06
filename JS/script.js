//Variabiles
const nome = prompt("Qual'è il tuo nome?");
const cognome = prompt("Qual'è il tuo cognome?");
const colorePreferito = prompt("Qual'è il tuo colore preferito?");
const number1 = prompt("Scegli un numero");
const number2 = prompt("Scegli un'altro numero");
//End Declaration of variables

let a = number1/number2;
let b = number1%number2;
let password = nome.concat(cognome,colorePreferito,Math.trunc(a),b);

//console.log(Math.trunc(number));
//console.log(password);



//Write to html page
document.getElementById("name").innerHTML = nome;
document.getElementById("surname").innerHTML = cognome;
document.getElementById("favouriteColor").innerHTML = colorePreferito;
document.getElementById("password").innerHTML = password;
//End write to html page