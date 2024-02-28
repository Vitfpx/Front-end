'use strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const secretNumber = Math.trunc(Math.random() * 20) + 1;

number.textContent = secretNumber;

check.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  if (!guessValue) {
    message.textContent = '⛔ No number!';
  }
});
