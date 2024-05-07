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

const carbValue = document.querySelector('#carb-value-cutting');
const proteinValue = document.querySelector('#protein-value-cutting');
const fatValue = document.querySelector('#fat-value-cutting');
const finalCutting = document.querySelector('#final-cutting');
const preCutting = document.querySelector('#pre-cutting');

updateTotalEnergyExpenditure();

console.log(totalEnergyExpenditure, savedWeightValue);

// **************
// Macro Numbers
// **************

let cuttingMacros = totalEnergyExpenditure - 600;
finalCutting.textContent = cuttingMacros;
preCutting.textContent = cuttingMacros - 300;

fatValue.textContent = Math.trunc(savedWeightValue);
proteinValue.textContent = Math.trunc(savedWeightValue * 2);
carbValue.textContent = Math.trunc(
  (cuttingMacros - (savedWeightValue * 9 + savedWeightValue * 2 * 4)) / 4
);
