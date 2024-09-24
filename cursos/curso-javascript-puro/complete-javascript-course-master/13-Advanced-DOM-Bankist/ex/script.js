'use strict';

console.log(document.documentElement);

const btnEx = document.createElement('button');
btnEx.classList.add('revisão');
document.body.append(btnEx);

btnEx.style.width = '20rem';
btnEx.style.height = '5rem';
console.log(getComputedStyle(btnEx).color);
console.log(btnEx.style.color);

btnEx.innerHTML = 'Estou utilizando este botão para revisão apenas';
btnEx.style.fontWeight = '600';
