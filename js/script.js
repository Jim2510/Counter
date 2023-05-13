const count = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const inputNumber = document.getElementById('value');
const addButton = document.getElementById('addValue');
const remButton = document.getElementById('remValue');
let counter = 0;

incrementBtn.addEventListener("click", () => {
    counter++;
    count.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        count.textContent = counter;
    }
});

addButton.addEventListener('click', () => {
    const currentValue = counter;
    const numberToAdd = Number(inputNumber.value);
    const newValue = isNaN(numberToAdd) ? currentValue : currentValue + numberToAdd ;
    counter = newValue;
    count.textContent = counter;
    
});

addButton.addEventListener('input', () => {
    if (isNaN(parseInt(inputNumber.value))) {
        count.textContent = 0;
        }
});

remButton.addEventListener('click', () => {
    const currentValue = counter;
    const numberToRem = Number(inputNumber.value);
    const newValue = isNaN(numberToRem) ? currentValue : currentValue - numberToRem;
    counter = newValue;
    count.textContent = counter;
});

remButton.addEventListener('input', () => {
    if (isNaN(parseInt(inputNumber.value))) {
        count.textContent = 0;
    }
});

