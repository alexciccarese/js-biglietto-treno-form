// select input elements
const nameEl = document.getElementById('nome')
const ageEl = document.getElementById('età')
const kmEl = document.getElementById('km')
const button = document.querySelector('button')

// selezioniamo gli elementi del form
const fullName = document.getElementById('fullname')
const userAge = document.getElementById('userage')
const totalKm = document.getElementById('totalkm')
const finalDiscount = document.getElementById('discount')
const priceEl = document.getElementById('price')

//al click stampiamo in console
button.addEventListener('click', function() {
  event.preventDefault()

  const name = nameEl.value
  console.log(`Il tuo nome: ${name}`);

  const age = ageEl.value
  console.log(`La tua età: ${age}`);
  
  const km = kmEl.value
  console.log(`I km che vuoi percorrere: ${km}`);

  const kmPrice = 0.21
  let totallPrice = kmPrice * km
  console.log(`Prezzo base: ${totallPrice.toFixed(2)} €`);

  let discount = 0
  let discountText = '-'
    
  
  if (age < 18 ) {
    discount = totallPrice * 0.2
    discountText = 'Sconto 20%'
    console.log(discountText)
    
    
  } else if (age >= 65) {
    discount = totallPrice * 0.4
    discountText = 'Sconto 40%'    
    console.log(discountText)
  }
  
  // calcoliamo prezzo finale
  const finalPrice = totallPrice - discount
  console.log(`Il prezzo del tuo biglietto sarà di: ${finalPrice.toFixed(2)} €`);


  // aggiorniamo i valori del form
  fullName.innerHTML = nameEl.value
  userAge.innerHTML = ageEl.value
  totalKm.innerHTML = kmEl.value
  finalDiscount.innerHTML = discountText
  priceEl.innerHTML = finalPrice.toFixed(2)


  return finalDiscount
})


