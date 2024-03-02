'use strict';

const dice = document.querySelector('.dice');
const rollDice = document.querySelector('.roll-dice');

rollDice.addEventListener('mousedown', e => {
  rollDice.classList.add('effect');
});

rollDice.addEventListener('mouseup', () => {
  let numberDice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  rollDice.classList.remove('no-effect')
  console.log(numberDice);
  switch (numberDice) {
    case 1:
      dice.src = 'dice-1.png';
      break;
    case 2:
      dice.src = 'dice-2.png';
      break;
    case 3:
      dice.src = 'dice-3.png';
      break;
    case 4:
      dice.src = 'dice-4.png';
      break;
    case 5:
      dice.src = 'dice-5.png';
      break;
    default:
      dice.src = 'dice-6.png';
  }
});
