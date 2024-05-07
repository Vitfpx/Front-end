'use strict';

const number = document.querySelector('#number');
const decreaseButton = document.querySelector('.decrease');
const resetButton = document.querySelector('.reset');
const increaseButton = document.querySelector('.increase');

let somaNumber = 0;

number.textContent = 0;

const count = () => {
  if (somaNumber < 0) {
    number.style.color = 'red';
    document.querySelector('h1').style.color = 'red';
  } else if (somaNumber > 0) {
    number.style.color = 'green';
    document.querySelector('h1').style.color = 'green';
  } else {
    number.style.color = 'white';
    document.querySelector('h1').style.color = 'white';
  }
};

// Decrease Button
decreaseButton.addEventListener('click', function () {
  somaNumber -= 1;
  number.textContent = somaNumber;
  count();
});

// Reset Button
resetButton.addEventListener('click', function () {
  somaNumber = 0;
  number.textContent = somaNumber;
  count();
});

// Increase Button
increaseButton.addEventListener('click', function () {
  somaNumber += 1;
  number.textContent = somaNumber;
  count();
});
