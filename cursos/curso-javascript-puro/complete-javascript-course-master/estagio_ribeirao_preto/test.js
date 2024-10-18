// 1)
function isFibonacci(num) {
  let a = 0,
    b = 1,
    temp;

  while (a <= num) {
    if (a === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
    temp = a;
    a = b;
    b = temp + b;
  }
  return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Example
let numero = 21;
console.log(isFibonacci(numero));

// 2)
function countLettersA(text) {
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i].toLowerCase() === "a") {
      count++;
    }
  }
  return `The letter 'a' appears ${count} times in the string.`;
}

// Example
let string = "Estágio para desenvolvedor";
console.log(countLettersA(string));

// 3)
let INDICE = 12,
  SOMA = 0,
  K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // Result: 77

// 4)
/*
a) 1, 3, 5, 7, ___:
Próximo número: 9 (sequência de números ímpares).

b) 2, 4, 8, 16, 32, 64, ____:
Próximo número: 128 (potências de 2).

c) 0, 1, 4, 9, 16, 25, 36, ____:
Próximo número: 49 (quadrados perfeitos).

d) 4, 16, 36, 64, ____:
Próximo número: 100 (quadrados perfeitos).

e) 1, 1, 2, 3, 5, 8, ____:
Próximo número: 13 (sequência de Fibonacci).

f) 2, 10, 12, 16, 17, 18, 19, ____:
Próximo número: 20 (sequência baseada nos números com '2' na casa das dezenas).
*/

// 5
/*
1. Eu ligaria o primeiro interruptor e esperaria alguns minutos. Após isso, desligaria o mesmo.
2. Liguaria o segundo interruptor e iria à sala das lâmpadas.

Agora, ao chegar à sala das lâmpadas:

A lâmpada que está acesa é controlada pelo segundo interruptor (aquele que eu deixei ligado).
A lâmpada que está apagada, mas quente é controlada pelo primeiro interruptor (que eu liguei primeiro e depois desliguei).
A lâmpada que está apagada e fria é controlada pelo terceiro interruptor (que eu nunca liguei).
*/
