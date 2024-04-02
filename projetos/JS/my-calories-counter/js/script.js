'use strict';

// Starting Conditions
const male = document.querySelector('#male');
const female = document.querySelector('#female');
const height = document.querySelector('#height-info');
const weight = document.querySelector('#weight-info');
const age = document.querySelector('#age-info');
const tmbResult = document.querySelector('.tmb-number-result');
const calculate = document.querySelector('.calculate');

// Reset
const init = () => {
};

init();

// Cálculo do tmb
calculate.addEventListener('click', () => {
  male = 66.473;
  female = 655.0955;
  if (sex === male) {
    const maleCalculation = (sex, height, weight, age) => {
      tmbResult.textContent =
        sex + 13.7516 * weight + 5.0033 * height - 6.755 * age;
    };
  } else {
    const femaleCalculation = (height, weight, age) => {
      tmbResult.textContent =
        sex + 9.5634 * weight + 1.8496 * height - 4.6756 * age;
    };
  }
});
