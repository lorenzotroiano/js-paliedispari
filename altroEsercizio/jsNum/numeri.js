// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let numRichiesto = parseInt(prompt("Inserisci numero da 1 a 5!"));
console.log(numRichiesto);

let sceltaParODisp = prompt("Scegli pari o dispari!");
console.log(sceltaParODisp);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
let numRandom = Math.floor(Math.random() * 5) + 1;
console.log(numRandom);


// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.l

const sommaNum = numRichiesto + numRandom;
console.log(sommaNum);

if (sommaNum % 2 === 0 && sceltaParODisp === "pari") {
    console.log("Il numero è pari, complimenti User, hai vinto!");
} else if (sommaNum % 2 !== 0 && sceltaParODisp === "dispari") {
    console.log("Il numero è dispari, complimenti User, hai vinto!");
} else {
    console.log("Mi dispiace User, hai perso!");
}