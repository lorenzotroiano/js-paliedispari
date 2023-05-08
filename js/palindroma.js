// Palidroma

// Chiedere all’utente di inserire una parola
let richiestaParola = prompt('Inserisci una parola!');
console.log(richiestaParola);


// creata variabile let di nome parolaPalindroma che prenderà la funzione "invertiParola" ed eseguirà i comandi di essa, sulla parola inserita dall'utente nel prompt (richiestaParola)
let parolaPalindroma = invertiParola(richiestaParola);
console.log(parolaPalindroma);





// dividere la parola a lettere singole (dunque creare array)
/*
let parolaDivisa = richiestaParola.split('');
console.log(parolaDivisa); */

// girare le lettere al contrario (quindi reversare gli indici degli array)
/*
let lettereRev = parolaDivisa.reverse('');
console.log(lettereRev); */



// unire le lettere girate
/*
let parolaInvertita = lettereRev.join('');
console.log(parolaInvertita); */






// creare condizione per capire se è palindroma oppure no
if (richiestaParola === parolaPalindroma) {
    console.log('Parola Palindroma')
} else {
    console.log('Parola non Palindroma!');
}



// Creare una funzione per capire se la parola inserita è palindroma
// creata funzione di nome "invertiParola(parola)" con una variabile const chiamata "parolaInversa" che sarà uguale alla parola inserita dall'utente nel prompt splittata (divisa), reversata(invertits), e joinata(unita).
function invertiParola (parola) {

    const parolaInversa = richiestaParola.split('').reverse('').join('');

    return parolaInversa;
}
