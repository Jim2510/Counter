const count = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const inputNumber = document.getElementById('value');
const addButton = document.getElementById('addValue');
const remButton = document.getElementById('remValue');
let counter = 0;

// Event listener per il pulsante di incremento
incrementBtn.addEventListener("click", () => {
    if (counter < 9999) {
        counter++;
        count.textContent = counter.toString().padStart(4, '0');
    }
});

// Event listener per il pulsante di decremento
decrementBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        count.textContent = counter.toString().padStart(4, '0');
    }
});

// Event listener per il pulsante di decremento con gestione della prevenzione dell'evento
decrementBtn.addEventListener("click", (event) => {
    if (counter === 0) {
        event.preventDefault();
    }
});


// Event listener per il pulsante di aggiunta
addButton.addEventListener('click', () => {
    const currentValue = counter;
    const numberToAdd = Number(inputNumber.value);
    const newValue = isNaN(numberToAdd) ? currentValue : currentValue + numberToAdd;
    counter = newValue > 9999 ? 9999 : newValue;
    count.textContent = counter;
});

// Event listener per l'input del pulsante di aggiunta con gestione del valore non numerico
addButton.addEventListener('input', () => {
    if (isNaN(parseInt(inputNumber.value))) {
        count.textContent = 0;
    }
});

// Event listener per il pulsante di rimozione
remButton.addEventListener('click', () => {
    const currentValue = counter;
    const numberToRem = Number(inputNumber.value);
    const newValue = isNaN(numberToRem) ? currentValue : currentValue - numberToRem;

    if (newValue < 0) {
        return;
    }

    counter = newValue;
    count.textContent = counter;
});

// Event listener per l'input del pulsante di rimozione con gestione del valore non numerico
remButton.addEventListener('input', () => {
    if (isNaN(parseInt(inputNumber.value))) {
        count.textContent = 0;
    }
});