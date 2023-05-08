// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let numRichiesto = parseInt(prompt("Inserisci numero da 1 a 5!"));
console.log(numRichiesto);

let sceltaParODisp = prompt("Scegli pari o dispari!");
console.log(sceltaParODisp);


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// let numRandom = Math.floor(Math.random() * 5) + 1;


let numRandomPc = numRandom(1, 5);
console.log(numRandomPc);




    function numRandom(min, max) {

        return Math.floor(Math.random() * (max - min + 1) ) + min;

      }







// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.l
/*
const sommaNum = numRichiesto + numRandomPc;
console.log(sommaNum); */

/*
if (sommaNum % 2 === 0 && sceltaParODisp === "pari" || sommaNum % 2 !== 0 && sceltaParODisp === "dispari") {
    console.log("Complimenti User, hai vinto!");
} else if (sceltaParODisp !== "pari" && sceltaParODisp !== "dispari") {
    console.log("Il gioco non può funzionare, inserisci correttamente pari o dispari!");
} else {
    console.log("Ha vinto il computer, mi spiace User, ritenta!");
} */

const somma = numPariODisp(numRichiesto,numRandomPc);
console.log(somma);


function numPariODisp(num1, num2) {

    const sommaNum = num1 + num2;

    if (sommaNum % 2 === 0 && sceltaParODisp === "pari" || sommaNum % 2 !== 0 && sceltaParODisp === "dispari") {
        console.log("Complimenti User, hai vinto!");
    } else if (sceltaParODisp !== "pari" && sceltaParODisp !== "dispari") {
        console.log("Il gioco non può funzionare, inserisci correttamente pari o dispari!");
    } else {
        console.log("Ha vinto il computer, mi spiace User, ritenta!");
    }

    return sommaNum;

}