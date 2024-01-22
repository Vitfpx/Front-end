// Ex. 1
// function mostraMensagem() {
//   document.write("Bom dia, Mundo!!!");
// }

// mostraMensagem();

// // Ex. 2
// const n = Number(prompt("Digite um número: ").trim());

// function cubo(n) {
//   return n * n * n;
// }

// console.log(cubo(n));

// Ex. 3
// const conversorTemp = Number(prompt("Digite uma temperatura em Fahrenheit para ser convertido para Celcius: "));

// const n = Number(prompt("Digite uma temperatura em Fahrenheit para ser convertido para Celcius: "));

// const conversor = (n) => {
//   return ((n - 32) * 5 / 9);
// };

// console.log(conversor(n));

// Ex. 4
const base = Number(prompt("Digite a base do triângulo: "));
const altura = Number(prompt("Digite a altura do triângulo: "));

const area = (a, b) => {
  return a * b * 0.5;
};

console.log(`A área do triângulo desejado é ${area(base, altura)}`);
