'use strict';

const background = document.querySelector('body');
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const joker = document.querySelector('.joker');
const scorePoints = document.querySelector('.scorePoints');

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;

joker.textContent = secretNumber;

check.addEventListener('click', function () {
  const guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  // Quando o valor não for um número
  if (!guessValue) {
    message.textContent = '⛔ No number!';

    // Quando o valor for o certo
  } else if (guessValue === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    background.style.backgroundColor = '#60b347';
    joker.style.width = '30rem';

    // Quando o valor for maior
  } else if (guessValue > secretNumber) {
    if (score > 1) {
      score--;
      scorePoints.textContent = score;
      message.textContent = '📈 Too High!';
    } else {
      message.textContent = '🥺 You Lost The Game!';
      scorePoints.textContent = 0;
    }

    // Quando o valor for menor
  } else if (guessValue < secretNumber) {
    if (score > 1) {
      score--;
      scorePoints.textContent = score;
      message.textContent = '📉 Too Low!';
    } else {
      message.textContent = '🥺 You Lost The Game!';
      scorePoints.textContent = 0;
    }
  }
});
