'use strict';

// 1. Exercício: Crie uma função chamada multiplyBy que retorna uma nova função que multiplica um número por um fator especificado. Teste sua função passando diferentes fatores e números.
// const multiplyBy = function(num) {
//   return function(fator) {
//     return fator * num
//   }
// }
const multiplyBy = num => fator => fator * num;
// const result = multiplyBy(2)
// console.log(result(4))

// 2. Exercício: Crie uma função applyOperation que aceita dois números e uma função como argumentos. A função deve aplicar a função fornecida aos dois números e retornar o resultado.
const operation = (a, b) => console.log(a + b);
// const applyOperation = function (a, b, fn) {
//   return fn(a, b);
// };
const applyOperation = (a, b, fn) => fn(a, b);
// applyOperation(2, 3, operation);

// 3. Exercício: Crie uma função filterArray que aceita um array e uma função de callback. A função deve retornar um novo array contendo apenas os elementos que passam na função de callback.
const filter = arr => arr.filter(el => el > 5);
const filterArray = (arr, fn) => fn(arr);
// console.log(filterArray([5, 4, 7, 8], filter));

// 4. Exercício: Crie uma função createGreeter que retorna uma função de saudação personalizada com base no nome fornecido.
const createGreeter = function () {
  return function (name) {
    return `Hey ${name}. Good job!`;
  };
};
const greet = createGreeter();
// console.log(greet('vitor'));

// 5. Exercício: Crie um objeto person com um método greet. Use call e bind para alterar o contexto de this e chamar o método com diferentes objetos.
const person = {
  name: 'vitor',
  greet(time) {
    console.log(`Hey ${this.name}. Good ${time}!`);
  },
};
const person2 = {
  name: 'John',
};
const person3 = {
  name: 'Steve',
};
const johnPerson = person.greet.bind(person2);
// johnPerson('afternoon');
// person.greet.call(person3, 'morning');

// Exercício: Crie uma IIFE que calcula a soma de dois números e exibe o resultado no console.
(function (a, b) {
  console.log(a + b);
})(5, 7);

// Exercício Complexo 1: Sistema de Registro de Tarefas.
// Descrição: Crie um sistema de tarefas onde você pode adicionar, concluir e listar tarefas. Use funções de ordem superior, funções que aceitam callbacks, e funções retornando funções. Utilize call e bind para manipular o contexto.



// Exercício Complexo 2: Sistema de Votação com Callbacks e Closures.
// Descrição: Construa um sistema de votação onde usuários podem votar em diferentes opções. Use bind para manipular o contexto e closure para armazenar o estado da votação.
