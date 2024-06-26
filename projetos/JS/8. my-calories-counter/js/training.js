'use strict';

// ********
// Imports
// ********

import savedTmbResult from './script.js';

// ********************
// Variable Assignment
// ********************

const btnShowRecommendation = document.querySelector('.card');
const btnCloseRecommendation = document.querySelector('.close-modal');
const modalRecommendatiton = document.querySelector('.recommendation');
const overlay = document.querySelector('.overlay');
const frequencyRadio = document.querySelectorAll('.frequency-radio');
const objectiveRadio = document.querySelectorAll('.objective-radio');
const decideTheNextStep = document.querySelector('.decide-next-step');
const decideTheNextStepNav = document.querySelector('.decide-next-step-nav');
let totalEnergyExpenditure = 0;
let frequencyRadioClicked;

const updateTotalEnergyExpenditure = () => {
  totalEnergyExpenditure =
    Number(sessionStorage.getItem('totalEnergyExpenditure')) || 0;
};

let originalTmbResult = savedTmbResult;
let originalTotalEnergyExpenditure = totalEnergyExpenditure;

// **************************************************
// Calculating Frequency training in relasion to TMB
// **************************************************

frequencyRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    let savedTmbResult = originalTmbResult;
    switch (radio.id) {
      case 'sedentary':
        savedTmbResult = Math.round(savedTmbResult * 1.2);
        console.log(savedTmbResult);
        break;
      case 'light':
        savedTmbResult = Math.round(savedTmbResult * 1.375);
        console.log(savedTmbResult);
        break;
      case 'moderate':
        savedTmbResult = Math.round(savedTmbResult * 1.55);
        console.log(savedTmbResult);
        break;
      case 'high':
        savedTmbResult = Math.round(savedTmbResult * 1.725);
        console.log(savedTmbResult);
        break;
      case 'very-high':
        savedTmbResult = Math.round(savedTmbResult * 1.9);
        console.log(savedTmbResult);
        break;
    }
    sessionStorage.setItem('totalEnergyExpenditure', savedTmbResult);
    updateTotalEnergyExpenditure();
    frequencyRadioClicked = true;
  });
});

// *************
// Modal Window
// *************

const openAndCloseModal = () => {
  if (!modalRecommendatiton.classList.contains('hidden')) {
    modalRecommendatiton.classList.add('hidden');
    overlay.classList.add('hidden');
  } else {
    modalRecommendatiton.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

if (btnShowRecommendation) {
  btnShowRecommendation.addEventListener('click', openAndCloseModal);
  btnCloseRecommendation.addEventListener('click', openAndCloseModal);
  overlay.addEventListener('click', openAndCloseModal);
}

document.addEventListener('keydown', e => {
  if (
    e.key === 'Escape' &&
    !modalRecommendatiton.classList.contains('hidden')
  ) {
    openAndCloseModal();
  }
});

// *****************
// Objective Button
// *****************

objectiveRadio.forEach(radio => {
  radio.addEventListener('click', () => {
    if (frequencyRadioClicked) {
      totalEnergyExpenditure = originalTotalEnergyExpenditure;
      if (radio.id === 'bulking') {
        updateTotalEnergyExpenditure();
        totalEnergyExpenditure += 500;
        console.log(totalEnergyExpenditure);
        decideTheNextStep.setAttribute('href', 'bulking.html');
        decideTheNextStepNav.setAttribute('href', 'bulking.html');
      } else {
        updateTotalEnergyExpenditure();
        totalEnergyExpenditure -= 600;
        console.log(totalEnergyExpenditure);
        decideTheNextStep.setAttribute('href', 'cutting.html');
        decideTheNextStepNav.setAttribute('href', 'cutting.html');
      }
    }
  });
});

export { updateTotalEnergyExpenditure, totalEnergyExpenditure };
