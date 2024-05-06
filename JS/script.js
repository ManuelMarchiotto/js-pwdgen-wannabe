//Variabiles
const nome = prompt("Qual'è il tuo nome?");
const cognome = prompt("Qual'è il tuo cognome?");
const colorePreferito = prompt("Qual'è il tuo colore preferito?");
//End Declaration of variables

const password = nome.concat(cognome,colorePreferito,21)

console.log(password);


//Write to html page
document.getElementById("name").innerHTML = nome;
document.getElementById("surname").innerHTML = cognome;
document.getElementById("favouriteColor").innerHTML = colorePreferito;
//End write to html page