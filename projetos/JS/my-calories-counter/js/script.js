'use strict';

// Starting Conditions
const btnShowRecommendation = document.querySelector('.card');
const btnCloseRecommendation = document.querySelector('.close-modal');
const modalRecommendatiton = document.querySelector('.recommendation');
const overlay = document.querySelector('.overlay');
const maleTmb = document.querySelector('#male');
const femaleTmb = document.querySelector('#female');
const height = document.querySelector('#height-info');
const weight = document.querySelector('#weight-info');
const age = document.querySelector('#age-info');
const calculate = document.querySelector('.calculate');
const frequencyRadio = document.querySelectorAll('.frequency-radio');
let savedTmbResult = sessionStorage.getItem('savedTmbResult');

let tmbResult = 0;

// Cálculando TMB masculino
const maleCalculation = () => {
  let maleTmb = 66.473;
  return Math.trunc(
    maleTmb + 13.7516 * weight.value + 5.0033 * height.value - 6.755 * age.value
  );
};

// Cálculando TMB feminino
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

// Botão de cálculo TMB
document.addEventListener('DOMContentLoaded', () => {
  event.preventDefault();
  const tmbNumber = document.querySelector('.tmb-number-result');

  if (tmbNumber) {
    calculate.addEventListener('click', tmbCalc);
  }
});

// Cálculo da frequência de treino em relação ao TMB
// while ()
frequencyRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    switch (radio.id) {
      case 'sedentary':
        savedTmbResult *= 1.2;
        // console.log(savedTmbResult);
        break;
      case 'light':
        savedTmbResult *= 1.375;
        // console.log(savedTmbResult);
        break;
      case 'moderate':
        savedTmbResult *= 1.55;
        console.log(savedTmbResult);
        break;
      case 'high':
        savedTmbResult *= 1.725;
        console.log(savedTmbResult);
        break;
      case 'very-high':
        savedTmbResult *= 1.9;
        // console.log(savedTmbResult);
        break;
    }
  });
});
// const frequencyCalculation = () => {
//   let sedentaryOption = document.querySelector('.sedentary');
//   let lightOption = document.querySelector('.light');
//   let moderateOption = document.querySelector('.moderate');
//   let highOption = document.querySelector('.sedentary');
//   let veryHighOption = document.querySelector('.sedentary');

//   if (sedentaryOption.checked) console.log('result');
// };

// console.log(frequencyCalculation());

// Modal Window
const openModal = () => {
  modalRecommendatiton.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnShowRecommendation.addEventListener('click', openModal);
