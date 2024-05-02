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

const carbValue = document.querySelector('#carb-value');
const proteinValue = document.querySelector('#protein-value');
const fatValue = document.querySelector('#fat-value');

updateTotalEnergyExpenditure();

console.log(totalEnergyExpenditure, savedWeightValue);

// **************
// Macro Numbers
// **************

let cuttingMacros = totalEnergyExpenditure - 600;
console.log(cuttingMacros);


fatValue.textContent = savedWeightValue;
proteinValue.textContent = savedWeightValue * 2.5;
carbValue.textContent = (cuttingMacros - (savedWeightValue * 9 + savedWeightValue * 2.5 * 4)) / 4;
