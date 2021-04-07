// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Usiamo una funzione che generi 5 numeri random

// arrayNumberRandom -> array vuoto , dove andremo ad inserire 5 numeri (non duplicati) random
  var arrayNumberRandom = [];
  
    while( arrayNumberRandom.length < 5 ) {

        var fiveNumber = fiveRandomNumber(1 , 100);

        if( !arrayNumberRandom.includes(fiveNumber) ) {
            arrayNumberRandom.push(fiveNumber);
        }

    }

    console.log(arrayNumberRandom);

// inseriamo i numeri in un alert che rimarrà attivo per 30 secondi
    alert(arrayNumberRandom);
    
// dopo 30 secondi facciamo comparire un prompt dove l'utente inserirà 5 numeri
var arrayNumberUser = [];

var userNumber = setTimeout(function() {

    while(arrayNumberUser.length < 5) {

        var numberUserInput = parseInt( prompt('Dammi un numero') );


        if(!arrayNumberUser.includes(numberUserInput) && numberUserInput < 100) {

            arrayNumberUser.push(numberUserInput);

        } else {
            alert('Il numero è gia presente o non è valido, inserire un altro numero');
        }

    }

}, 1000);

console.log(arrayNumberUser);
// prendiamo i numeri inseriti dall'utente e controlliamo quanti e quali numeri 
// sono uguali a quelli generati random dal computer


// FUNCTION
  
// fiveRandomNumber -> funzione che genera numeri random da 1 a 100
function fiveRandomNumber( min , max ) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }