'use strict';

// Starting Conditions
const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.roll-dice');
const newGame = document.querySelector('.new-game');
const hold = document.querySelector('.hold');
const current0 = document.querySelector('#current-0');
const current1 = document.querySelector('#current-1');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const score = document.querySelector('.score');
const score0 = document.querySelector(`#score-0`);
const score1 = document.querySelector(`#score-1`);
const player0 = document.querySelector(`.player0`);
const player1 = document.querySelector(`.player1`);

let currentValue, activePlayer, playing, scoreArr;

// Função para dar reset no game
const init = () => {
  scoreArr = [0, 0];
  currentValue = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current1.textContent = 0;
  current0.textContent = 0;

  dice.classList.add('hidden');
  player0.classList.remove('win');
  player1.classList.remove('win');
  left.classList.add('player-active');
  right.classList.remove('player-active');
};

init();

// Função para trocar de jogador
const switchPlayer = () => {
  document.querySelector(`#current-${activePlayer}`).textContent = 0;
  currentValue = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  left.classList.toggle('player-active');
  right.classList.toggle('player-active');
};

// Ao pressionar o botão ROLL DICE
rollDice.addEventListener('mousedown', () => {
  rollDice.classList.add('effect');
  rollDice.classList.remove('no-effect');
});

// Ao soltar o botão ROLL DICE
rollDice.addEventListener('mouseup', () => {
  if (playing) {
    let numberDice = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    rollDice.classList.remove('effect');

    // console.log(numberDice);

    // Valor do dado
    dice.src = `dice/dice-${numberDice}.png`;

    // Checar se o dado tem valor 1
    if (numberDice !== 1) {
      // Adicionar o dado há pontuação atual
      currentValue += numberDice;
      document.querySelector(`#current-${activePlayer}`).textContent =
        currentValue;
    } else {
      // Trocar com o outro player
      switchPlayer();
    }
  }
});

// Ao pressionar o botão HOLD
hold.addEventListener('mouseup', () => {
  if (playing) {
    // 1. Adicionar a pontuação atual do jogador
    scoreArr[activePlayer] += currentValue;
    // score[i] = score[i] + currentValue
    // console.log(scoreArr[activePlayer]);
    document.querySelector(`#score-${activePlayer}`).textContent =
      scoreArr[activePlayer];

    // 3. Ver se o jogador tem pontuação >= 100
    if (scoreArr[activePlayer] >= 100) {
      // 4. Finish the game
      playing = false;
      document.querySelector(`.player${activePlayer}`).classList.add('win');
      document
        .querySelector(`.player${activePlayer}`)
        .classList.remove('player-active');
      dice.classList.add('hidden');
    } else {
      // 5. Trocar com o outro player
      switchPlayer();
    }
  }
});

// Ao pressionar o botão NEW GAME
newGame.addEventListener('mouseup', init);
