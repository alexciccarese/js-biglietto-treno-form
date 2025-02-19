// select input elements
const nameEl = document.getElementById('nome')
const ageEl = document.getElementById('età')
const kmEl = document.getElementById('km')
const button = document.querySelector('button')



//al click stampiamo in console
button.addEventListener('click', function() {
  const name = nameEl.value
  console.log(`Il tuo nome: ${name}`);

  const age = ageEl.value
  console.log(`La tua età: ${age}`);
  
  const km = kmEl.value
  console.log(`I km che vuoi percorrere: ${km}`);

  const kmPrice = 0.21
  let totallPrice = kmPrice * km
  console.log(`Prezzo base: ${totallPrice.toFixed(2)} €`);
    
  
  if (age < 18 ) {
    totallPrice = totallPrice * 0.8
    console.log('Sconto 20% applicato');
    
    
  } else if (age >= 65) {
    totallPrice = totallPrice * 0.6
    console.log('sconto 40% applicato');
    
    
  }
  
  console.log(`Il prezzo del tuo biglietto sarà di: ${totallPrice.toFixed(2)} €`);
})


