'use strict';

// ********************
// Starting Conditions
// ********************
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
const objectiveRadio = document.querySelectorAll('.objective-radio');
const decideTheNextStep = document.querySelector('.decide-next-step');
const decideTheNextStepNav = document.querySelector('.decide-next-step-nav');
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

// **************************************************
// Calculating Frequency training in relasion to TMB
// **************************************************

let originalTmbResult = savedTmbResult;

frequencyRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    savedTmbResult = originalTmbResult;
    switch (radio.id) {
      case 'sedentary':
        savedTmbResult *= 1.2;
        console.log(savedTmbResult);
        break;
      case 'light':
        savedTmbResult *= 1.375;
        console.log(savedTmbResult);
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
        console.log(savedTmbResult);
        break;
    }
  });
});

// *************
// Modal Window
// *************

const openModal = () => {
  modalRecommendatiton.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modalRecommendatiton.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnShowRecommendation.addEventListener('click', openModal);
btnCloseRecommendation.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !modalRecommendatiton.classList.contains('hidden')
  ) {
    closeModal();
  }
});

// *****************
// Objective Button
// *****************

objectiveRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    switch (radio.id) {
      case 'bulking':
        decideTheNextStep.setAttribute('href', 'bulking.html');
        decideTheNextStepNav.setAttribute('href', 'bulking.html');
        break;
      case 'cutting':
        decideTheNextStep.setAttribute('href', 'cutting.html');
        decideTheNextStepNav.setAttribute('href', 'cutting.html');
        break;
    }
  });
});
