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
let savedWeightValue = sessionStorage.getItem('savedWeightValue');

let tmbResult = 0;
let weightValue = 0;

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
    weightValue = weight.value;
  } else if (femaleTmb.checked) {
    tmbResult = femaleCalculation();
    tmbNumber.textContent = femaleCalculation();
    weightValue = weight.value;
  }
  sessionStorage.setItem('savedTmbResult', tmbResult);
  sessionStorage.setItem('savedWeightValue', weightValue);
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
console.log(savedTmbResult);

export default savedTmbResult;
export { savedWeightValue };
