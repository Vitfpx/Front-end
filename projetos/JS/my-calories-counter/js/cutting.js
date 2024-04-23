import totalEnergyExpenditure from './training.js';

console.log(totalEnergyExpenditure);

const carbValue = document.querySelector('#carb-value');

// **************
// Macro Numbers
// **************

carbValue.textContent = totalEnergyExpenditure;
