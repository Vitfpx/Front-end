'use strict';

// Starting Conditions
const maleTmb = document.querySelector('#male');
const femaleTmb = document.querySelector('#female');
const height = document.querySelector('#height-info');
const weight = document.querySelector('#weight-info');
const age = document.querySelector('#age-info');
const tmbResult = document.querySelector('.tmb-number-result');
const calculate = document.querySelector('.calculate');

let finalResult = 0;

// Cálculando TMB
const maleCalculation = () => {
  let maleTmb = 66.473;
  return Math.trunc(
    maleTmb + 13.7516 * weight.value + 5.0033 * height.value - 6.755 * age.value
  );
};

const femaleCalculation = () => {
  let femaleTmb = 655.0955;
  return Math.trunc(
    femaleTmb +
      9.5634 * weight.value +
      1.8496 * height.value -
      4.6756 * age.value
  );
};

const frequencyCalculation = () => {
  let sedentaryOption = document.querySelector('.sedentary');
  let lightOption = document.querySelector('.light');
  let moderateOption = document.querySelector('.moderate');
  let highOption = document.querySelector('.sedentary');
  let veryHighOption = document.querySelector('.sedentary');

  if (sedentaryOption.checked) finalResult *= 1.2;
};

calculate.addEventListener('click', () => {
  event.preventDefault();

  if (maleTmb.checked) {
    tmbResult.textContent = maleCalculation();
    finalResult = maleCalculation();
  } else if (femaleTmb.checked) {
    tmbResult.textContent = femaleCalculation();
    finalResult = femaleCalculation();
  }
});

console.log(frequencyCalculation(finalResult));