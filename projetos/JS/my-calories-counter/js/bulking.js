'use strict';

// ********
// Imports
// ********

import {
  updateTotalEnergyExpenditure,
  totalEnergyExpenditure,
} from './training.js';
import { savedWeightValue } from './script.js';

// ********************
// Variable Assignment
// ********************

const carbValue = document.querySelector('#carb-value-bulking');
const proteinValue = document.querySelector('#protein-value-bulking');
const fatValue = document.querySelector('#fat-value-bulking');
const finalBulking = document.querySelector('#final-bulking');
const preBulking = document.querySelector('#pre-bulking');

updateTotalEnergyExpenditure();

console.log(totalEnergyExpenditure, savedWeightValue);

// **************
// Macro Numbers
// **************

let bulkingMacros = totalEnergyExpenditure + 500;
finalBulking.textContent = bulkingMacros;
preBulking.textContent = bulkingMacros - 300;

fatValue.textContent = Math.trunc(savedWeightValue);
proteinValue.textContent = Math.trunc(savedWeightValue * 1.6);
carbValue.textContent =
  Math.trunc((bulkingMacros - (savedWeightValue * 9 + savedWeightValue * 1.6 * 4)) / 4);
