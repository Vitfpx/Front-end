'use strict';

// ********************
// Starting Conditions
// ********************
const maleTmb = document.querySelector('#male');
const femaleTmb = document.querySelector('#female');
const height = document.querySelector('#height-info');
const weight = document.querySelector('#weight-info');
const age = document.querySelector('#age-info');
const calculate = document.querySelector('.calculate');

let savedTmbResult = sessionStorage.getItem('savedTmbResult');

let tmbResult = 0;

// *********************
// calculating tmb
// *********************

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

const tmbCalc = () => {
  const tmbNumber = document.querySelector('.tmb-number-result');
  event.preventDefault();
  if (maleTmb.checked) {
    tmbResult = maleCalculation();
    tmbNumber.textContent = maleCalculation();
  } else if (femaleTmb.checked) {
    tmbResult = femaleCalculation();
    tmbNumber.textContent = femaleCalculation();
  }
  // console.log(tmbResult);
  sessionStorage.setItem('savedTmbResult', tmbResult);
};

// *********************
// TMB Calculate Button
// *********************

document.addEventListener('DOMContentLoaded', () => {
  event.preventDefault();
  const tmbNumber = document.querySelector('.tmb-number-result');

  if (tmbNumber) {
    calculate.addEventListener('click', tmbCalc);
  }
});

export default savedTmbResult;
