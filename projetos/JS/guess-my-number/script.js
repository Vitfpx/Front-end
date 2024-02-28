'use strict';

// Variáveis
const background = document.querySelector('body');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const joker = document.querySelector('.joker');
let scorePoints = document.querySelector('.scorePoints');
let highscorePoints = document.querySelector('.highscorePoints');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    check.click();
  }
});

// Função da mensagem
const displayMessage = msg => {
  message.textContent = msg;
};

// Funcionalidade do botão 'check'
check.addEventListener('click', function () {
  let guessValue = Number(guess.value);
  console.log(guessValue, typeof guessValue);

  // Quando o valor não for um número
  if (!guessValue) {
    displayMessage('⛔ No number!');

    // Quando o valor for o certo
  } else if (guessValue === secretNumber) {
    displayMessage('🎉 Correct Number!');
    background.style.backgroundColor = '#60b347';
    joker.style.width = '30rem';
    joker.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscorePoints.textContent = highscore;
    }

    // Quando o valor for errado
  } else if (guessValue !== secretNumber) {
    if (score > 1) {
      score--;
      scorePoints.textContent = score;
      displayMessage(
        guessValue > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      console.log(score);
    } else {
      displayMessage('🥺 You Lost The Game!');
      scorePoints.textContent = 0;
    }

    // Quando o valor for maior
    // } else if (guessValue > secretNumber) {
    //   if (score > 1) {
    //     score--;
    //     scorePoints.textContent = score;
    //     message.textContent = '📈 Too High!';
    //   } else {
    //     message.textContent = '🥺 You Lost The Game!';
    //     scorePoints.textContent = 0;
    //   }

    //   // Quando o valor for menor
    // } else if (guessValue < secretNumber) {
    //   if (score > 1) {
    //     score--;
    //     scorePoints.textContent = score;
    //     message.textContent = '📉 Too Low!';
    //   } else {
    //     message.textContent = '🥺 You Lost The Game!';
    //     scorePoints.textContent = score;
    //   }
  }
});

// Funcionalidade do botão 'again'
again.addEventListener('click', () => {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scorePoints.textContent = score;
  background.style.backgroundColor = '#222';
  joker.style.width = '15rem';
  joker.textContent = '?';
  guess.value = ''; // Para mudar o value
});
