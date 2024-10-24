console.log('JS CONNECTION OK')


/**********************************************************
| # CONSEGNA
**********************************************************/

/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Potete usare liste, input e bottoni non stilizzati, mettendo stampe di debug in console e risultato finale in un alert.
Solo una volta finito, a piacere e facoltativamente, potete aggiungete lo stile.
NOTA:  non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
BONUS
Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
Consigli del giorno
Pensate prima in italiano.
Dividete in piccoli problemi la consegna.
Individuate gli elementi di cui avete bisogno per realizzare il programma.
Immaginate la logica come fosse uno snack: "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"
*/




/**********************************************************
| # ESECUZIONE
**********************************************************/

// Genero 5 numeri random da 1 a 100 al caricamento della pagina, quindi immediatamente tramite funzione

const randomNumbers = () => {
    const max = 100;
    const min = 1;
    const numberOfItems = 5;

    //Dichiaro un Array dove raccoglierò i miei numeri random
    const outputArray = [];
    let randomNumber;
    let conversionToString;

    for (let i=0; i < numberOfItems; i++) {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        conversionToString = randomNumber.toString();
        outputArray.push(conversionToString);
    }

    return outputArray
}

// DICHIARO il mio Array ottenuto dalla funzione
const outputNumbers = randomNumbers();

// CONSOLE LOG DI CONTROLLO
// console.log(outputNumbers);
// console.log('Primo numero del mio Array: ' + outputNumbers[0]);
// console.log('Tipo di dato: ' + typeof outputNumbers[0]);


// Raccolto gli Elements HTML su cui stamperò i miei numeri random
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
const number5 = document.getElementById('number5');


// Stampo i miei numeri come INNER TEXT dei miei elementi HTML
number1.innerText = outputNumbers[0];
number2.innerText = outputNumbers[1];
number3.innerText = outputNumbers[2];
number4.innerText = outputNumbers[3];
number5.innerText = outputNumbers[4];

// CONSOLE LOG DI CONTROLLO
// console.log('Il primo numero assegnato: ' + number1.innerText)


// Dichiaro gli elementi HTML di cui andrò a modificare la visibilità
const numbersSection = document.getElementById('numbersSection');
const inputSection = document.getElementById('inputSection');


// Dichiaro la funzione che nasconderà i numeri e renderà visibili i text input

const hideNumbers = () => {
    // Nasconde i numeri
    numbersSection.classList.add('d-none');
    // Mostra la sezione input
    inputSection.classList.remove('d-none');
}


// Nascondo i numeri e rendo visibili i text input dopo 30 secondi dal caricamento della pagina
setTimeout(hideNumbers, 1000);

// A questo punto raccolgo gli elementi HTML relativi agli input
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const input5 = document.getElementById('input5');

// CONSOLE LOG DI CONTROLLO
console.log('Valore nascosto primo numero: ' + number1.innerText)
console.log('Valore input1 vuoto: ' + input1.value);



// L'utente inserisce dei valori
// -->
// Verifico che abbia scritto almeno in un input prima di abilitare il bottone "Conferma"

// Dichiaro gli elementi HTML che subiranno modifiche dopo il click del bottone
const confirmInput = document.getElementById('confirmInput');
const finalResult = document.getElementById('finalResult');

// CONSOLE LOG DI CONTROLLO
console.log('Check collegamento bottone: ' + confirmInput.innerText);


// Dichiaro un Array che conterrà gli input dell'utente
userInputs = [];


// Aggiungo un EVENTLISTENER al mio bottone

confirmInput.addEventListener('click', () => {

    // Dichiaro la condizione secondo cui ci deve essere almeno un input non vuoto
    if (input1.value !== '' || input2.value !== '' || input3.value !== '' || input4.value !== '' || input5.value !== '') {
        
        // Svuoto l'Array
        userInputs.splice(0,5);

        // Poi lo riempio con gli input dell'utente
        userInputs.push(input1.value, input2.value, input3.value, input4.value, input5.value);

        // CONSOLE LOG DI CONTROLLO
        console.log(userInputs);

        // Disattivo il bottone per non permettere ulteriori tentativi di input
        confirmInput.disabled = true;
    }

    // A questo punto comparo i due Array per verificare quanti numeri l'utente ha ricordato


    // Mostro il risultato all'utente
    finalResult.classList.remove('d-none');
})


