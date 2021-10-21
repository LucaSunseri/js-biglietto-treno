// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// BONUS
// 1. controllare la validità dei dati inseriti
// 2. fare inserire il codice di sconto “SCONTO20”: se l’utente ha 20 anni o meno aggiunge il 20% di sconto altrimenti niente e generare l’output “Codice non valido per la tua fascia di età“. Se inserisce il codice sbagliato comunicare “Codice non valido”

const km = prompt('Inserisci i km che intendi percorrere');
const age = prompt('Inserisci l\'età del passeggero');
const discountCode  = prompt('Inserisci il codice sconto se ne possiedi uno');
const priceKm = 0.21;

//Validity of the age and the km
let kmOrAgeWrong = false;

if ((isNaN(age)) || (isNaN(km))) {
  kmOrAgeWrong = true;
} else if ((age || km) === 0) {
  kmOrAgeWrong = true;
}

// const Discount
const discount20 = (((km * priceKm) * 20) / 100).toFixed(2);
// console.log('Sconto20',discount20);
const discount40 = (((km * priceKm) * 40) / 100).toFixed(2);
// console.log('Sconto40',discount40);

let totalPrice = km * priceKm;
// console.log('Prezzo totale',totalPrice);

// Discount if you are less 20 years o more 65
if (age < 18) {
  totalPrice = totalPrice - discount20; 
} else if (age >= 65) {
  totalPrice = totalPrice - discount40;
}

totalPrice = totalPrice.toFixed(2);
// console.log('Prezzo totale 2numeri',totalPrice);

// Discount with code SCONTO20 if you are less 20 years
if (((discountCode === 'CODICE20') || (discountCode === 'codice20')) && (age < 20))
 {
  totalPrice = totalPrice - discount20;
  totalPrice = totalPrice + '€';
} else if (((discountCode === 'CODICE20') || (discountCode === 'codice20')) && (age >= 20)) {
  totalPrice = `${totalPrice}€ <br>
  Il codice inserito non valido per la sua fascia di età.`
} else {
  totalPrice = `${totalPrice}€ <br>
  Codice sconto non inserito o errato!`;
}

if (kmOrAgeWrong == true) {
  totalPrice = `km o età inseriti in modo errato ricontrollare.`
}


document.getElementById('output').innerHTML = totalPrice;

