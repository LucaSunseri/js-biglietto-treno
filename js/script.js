const km = prompt('Inserisci i KM che intendi percorrere');
const age = prompt('Inserisci l\' ETA\' del passeggero');
const discountCode  = prompt('Inserisci il codice sconto se ne possiedi uno');
const priceKm = 0.21;


// const Discount
const discount20 = ((km * priceKm) * 20) / 100;
const discount40 = ((km * priceKm) * 40) / 100;


let totalPrice = km * priceKm;
console.log('senza sconto', totalPrice);

if (age < 18) {
  totalPrice = totalPrice - discount20; 
  console.log('sconto20', totalPrice);
} else if (age >= 65) {
  totalPrice = totalPrice - discount40;
  console.log('sconto40', totalPrice);
}

// Discount with code SCONTO20 if you are less 20 years
if (((discountCode === 'CODICE20') || (discountCode === 'codice20')) && (age < 20))
 {
  totalPrice = totalPrice - discount20;
  console.log('sconto dello sconto', totalPrice);
}

document.getElementById('output').innerHTML = totalPrice.toFixed(2) + '€';



console.log('totale biglietto 2 cifre', totalPrice);