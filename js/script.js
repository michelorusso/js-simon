// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Usiamo una funzione che generi 5 numeri random

// arrayNumberRandom -> array vuoto dove andremo ad inserire 5 numeri (non duplicati) random
  var arrayNumberRandom = [];
  
    while( arrayNumberRandom.length < 5 ) {

        // fiveNumber -> variabile dove verrà salvato il numero random
        var fiveNumber = fiveRandomNumber(1 , 100);

        if( !arrayNumberRandom.includes(fiveNumber) ) {
            arrayNumberRandom.push(fiveNumber);
        }

    }

    console.log(arrayNumberRandom);

// inseriamo i numeri in un alert che rimarrà attivo per 30 secondi
    alert(arrayNumberRandom);
    
// dopo 30 secondi facciamo comparire un prompt dove l'utente inserirà 5 numeri

// arrayNumberUser -> array vuoto dove andremo ad inserire 5 numeri (non duplicati) inseriti dall'utente
var arrayNumberUser = [];

var userNumber = setTimeout(function() {

    while(arrayNumberUser.length < 5) {

        // numberUserInput -> variabile dove verrà salvato il numero inserito dall'utente
        var numberUserInput = parseInt( prompt('Dammi un numero') );

        // se il numero da noi inserito non fa parte dell'array ed è inferiore a 100
        if(!arrayNumberUser.includes(numberUserInput) && numberUserInput < 100) {

            // allora lo inserisco nell'array contente i numeri inseriti dall'utente
            arrayNumberUser.push(numberUserInput);
   
        } else {
            // alrimenti nel caso il numero da noi inserito è uguale ad un numero inserito precedentemente allora compare un alert
            alert('Il numero è gia presente o non è valido, inserire un altro numero');
        }

    }

    var numberFindIt = [];

    for( var j = 0; j < arrayNumberUser.length; j++) {

        var numbersUser = arrayNumberUser[j];
        console.log(numbersUser);

        // prendiamo i numeri inseriti dall'utente e controlliamo quanti e quali numeri 
        // sono uguali a quelli generati random dal computer        
        if( arrayNumberRandom.includes(numbersUser) == true ) {
            numberFindIt.push(numbersUser);
        }
        console.log('Questo è l array dei numeri indovinati : ', numberFindIt);
    }
    

    // Stampiamo i risultati
    alert("Hai indovinato " + numberFindIt.length + " numeri su 5");
    alert("I numeri sono : " + numberFindIt);

}, 1000); // TODO : cambiare in 30 secondi

console.log(arrayNumberUser);


// FUNCTION
  
// fiveRandomNumber -> funzione che genera numeri random da 1 a 100
function fiveRandomNumber( min , max ) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }