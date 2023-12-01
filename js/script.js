
let numeriContainer = document.getElementById('numeri-container');


function generaNumeriCasuali() {
    let numeriCasuali = [];
    for (let i = 0; i < 5; i++) {
        numeriCasuali.push(Math.floor(Math.random() * 10) + 1);
    }
    return numeriCasuali;
}


let numeriVisualizzati = generaNumeriCasuali();
numeriContainer.innerText = numeriVisualizzati.join(' ');
console.log(numeriContainer);


setTimeout(function () {

    numeriContainer = "";
    console.log(numeriContainer);

    let numeriInseriti = [];
    for (let i = 0; i < 5; i++) {
        let numeroInserito = parseInt(prompt('Inserisci il numero ' + (i + 1)));
        numeriInseriti.push(numeroInserito);
    }


    let numeriIndovinati = numeriVisualizzati.filter(function (numero) {
        return numeriInseriti.includes(numero);
    });


    alert('Hai indovinato ' + numeriIndovinati.length + ' numeri: ' + numeriIndovinati.join(', '));
}, 4000);

var miaVariabile = 10;
console.log(miaVariabile);

setTimeout(function () {
    miaVariabile = 0;
    console.log('La variabile è stata azzerata dopo 3 secondi:', miaVariabile);
}, 3000);