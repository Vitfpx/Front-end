import totalEnergyExpenditure from './training.js';
import { savedWeightValue } from './script.js';

console.log(totalEnergyExpenditure, savedWeightValue);

const carbValue = document.querySelector('#carb-value');

// **************
// Macro Numbers
// **************

let cuttingMacros = totalEnergyExpenditure - 600;
console.log(cuttingMacros);

carbValue.textContent = carbValue;

// fatCalc = weight
// proteinCalc = weight * 2.5
// carbCalc = (carbCalc - (fatCalc * 9 + proteinCalc * 4)) / 4
//
//
//
//
