const km = prompt('Inserisci i km che intendi percorrere');
const age = prompt('Inserisci l\'età del passeggero');
const priceKm = 0.21;

// const Discount
const discount20 = ((km * priceKm) * 20) / 100;
const discount40 = ((km * priceKm) * 40) / 100;


let totalPrice = km * priceKm;
// console.log('senza sconto', totalPrice);

if (age < 18) {
  totalPrice = totalPrice - discount20; 
  // console.log('sconto20', totalPrice);
} else if (age >= 65) {
  totalPrice = totalPrice - discount40;
  // console.log('sconto40', totalPrice);
}

document.getElementById('output').innerHTML = totalPrice.toFixed(2) + '€';

// console.log('totale biglietto 2 cifre', totalPrice);