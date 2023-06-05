const count = document.getElementById("count");
const inputNumber = document.getElementById('value');
const resetBtn = document.getElementById('reset');
const btns = document.getElementById('btns');
const otherBtn = document.getElementById('otherBtn');
let counter = 0;

function displayBtn() {
    const minus = document.createElement('button');
    minus.innerHTML = '-';
    minus.id = 'decrement';
    minus.className = 'btn';
    btns.appendChild(minus);

    const plus = document.createElement('button');
    plus.innerHTML = '+';
    plus.id = 'increment';
    plus.className = 'btn';
    btns.appendChild(plus);

    const decBtn = document.createElement('button');
    decBtn.innerHTML = 'REM';
    decBtn.className = 'btn';
    decBtn.id = 'remValue';
    otherBtn.appendChild(decBtn);

    const incBtn = document.createElement('button');
    incBtn.innerHTML = 'ADD';
    incBtn.className = 'btn';
    incBtn.id = 'addValue';
    otherBtn.appendChild(incBtn);
}

document.addEventListener("DOMContentLoaded", function() {
    displayBtn();

    // Event Delegation per i pulsanti di incremento, decremento, aggiunta e rimozione, reset e input di aggiunta
    document.addEventListener("click", (event) => {
        const target = event.target;

        if (target.id === "increment") {
            if (counter < 9999) {
                counter++;
            }
        } else if (target.id === "decrement") {
            if (counter > 0) {
                counter--;
            }
        } else if (target.id === "addValue") {
            const currentValue = counter;
            const numberToAdd = Number(inputNumber.value);
            const newValue = isNaN(numberToAdd) ? currentValue : currentValue + numberToAdd;
            counter = newValue > 9999 ? 9999 : newValue;
        } else if (target.id === "remValue") {
            const currentValue = counter;
            const numberToRem = Number(inputNumber.value);
            const newValue = isNaN(numberToRem) ? currentValue : currentValue - numberToRem;

            if (newValue < 0) {
                return;
            }

            counter = newValue;
        } else if (target.id === "reset") {
            counter = 0;
        }

        count.textContent = counter.toString().padStart(4, '0');
    });

    // Event listener per l'input del pulsante di aggiunta con gestione del valore non numerico
    inputNumber.addEventListener('input', () => {
        if (isNaN(parseInt(inputNumber.value))) {
            count.textContent = "0000";
        }
    });
});
