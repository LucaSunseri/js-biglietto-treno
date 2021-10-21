const km = 46;
const age = 65;
const priceKm = 0.21;

let totalPrice = km * priceKm;
console.log ('totale biglietto', totalPrice);

const discount20 = ((km * priceKm) * 20) / 100;
const discount40 = ((km * priceKm) * 40) / 100;


if (age < 18){
  totalPrice = (km * priceKm) - discount20;
}

if (age => 65){
  totalPrice = (km * priceKm) - discount40;
}

console.log ('totale biglietto 2 cifre', totalPrice.toFixed(2));