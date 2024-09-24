// 'use strict';

// // 1.
// const num = [1, 7, 3, 6, 4];
// num.forEach(n => console.log(n));

// const greeter = [
//   {
//     greet: 'Hey',
//     name: 'Vit',
//   },
//   {
//     greet: 'Hi',
//     name: 'X',
//   },
//   {
//     greet: 'Hello',
//     name: 'Z',
//   },
//   {
//     greet: `What's up`,
//     name: 'Y',
//   },
// ];
// greeter.forEach(el => console.log(`${el.greet} ${el.name}!`));

// // 2.
// const numArr = [1, 7, 3, 6, 4];
// const doubleNumArr = numArr.map(cur => cur * 2);
// console.log(doubleNumArr);

// const strArr = ['airton', 'bruno', 'clarencio', 'duartina', 'ely'];
// const strArrLength = strArr.map(el => el.length);
// console.log(strArrLength);

// // 3.
// const numArr2 = [1, 7, 3, 6, 4];
// const numArr2Par = numArr2.filter(el => el % 2 === 0 && el);
// console.log(numArr2Par);

// const shopping = [
//   {
//     name: 'toy',
//     price: 50,
//   },
//   {
//     name: 'bottle',
//     price: 12,
//   },
//   {
//     name: 'backpack',
//     price: 78,
//   },
//   {
//     name: 'food',
//     price: 25,
//   },
//   {
//     name: 'acoustic guitar',
//     price: 390,
//   },
// ];

// const only50 = shopping.filter(el => el.price >= 50);
// console.log(only50);

// // 4.
// const sumArrEl = strArrLength.reduce((acc, cur) => acc + cur, 0);
// console.log(sumArrEl);

// const concatStr = strArr.reduce((acc, cur) => `${acc + cur}`, '');
// console.log(concatStr);

// // 5.
// const plusTen = doubleNumArr.find(el => el > 10);
// console.log(plusTen);

// const guitar = shopping.filter(el => el.name === 'acoustic guitar');
// console.log(guitar);

// // 6.
// const arr = [14, 3, -25, 6];

// const negativeNum = arr.some(el => el < 0);
// console.log(negativeNum);

// const positiveNum = arr.every(el => el > 0);
// console.log(positiveNum);

// // 7.
// console.log(arr.flat());

// // 8.
// const cres = arr.sort((a, b) => a - b);
// console.log(cres);
// const decres = arr.sort((a, b) => b - a);
// console.log(decres);

/*
// Challenge 1
const transactions = [
  { type: 'deposit', amount: 500 },
  { type: 'withdrawal', amount: 200 },
  { type: 'deposit', amount: 300 },
  { type: 'withdrawal', amount: 150 },
  { type: 'deposit', amount: 1000 },
  { type: 'withdrawal', amount: 500 },
  { type: 'deposit', amount: 50 },
  { type: 'withdrawal', amount: 75 },
];

const banco = function (arr) {
  // Depósitos e Retiradas
  const deposit = arr.filter(el => el.type === 'deposit');
  const withdrawal = arr.filter(el => el.type === 'withdrawal');

  withdrawal.forEach(el => (el.amount = -el.amount));

  // .map(el => -el.amount);
  console.log(withdrawal);

  // Nova moeda
  const reais = arr.map(el => Math.floor(el.amount * 5.5));

  // Saldo final
  const final = arr.reduce(
    (acc, el) => (el.type === 'deposit' ? acc + el.amount : acc - el.amount),
    0
  );

  // Ordernar por valor
  const sortedTransactions = arr.sort((a, b) => b.amount - a.amount);
  console.log(sortedTransactions);

  // Resumo das transações ordenadas
  return sortedTransactions.forEach((el, i) =>
    console.log(
      `Your ${el.type} was U$${Math.abs(el.amount)} (${el.amount * 5.5}R$)`
    )
  );
};
banco(transactions);
*/

// Challenge 2
const produtos = [
  {
    name: 'Camiseta Básica',
    category: 'Roupas',
    price: 39.9,
    stock: 120,
  },
  {
    name: 'Tênis Esportivo',
    category: 'Calçados',
    price: 249.9,
    stock: 80,
  },
  {
    name: 'Relógio Digital',
    category: 'Acessórios',
    price: 199.9,
    stock: 50,
  },
  {
    name: 'Calça Jeans',
    category: 'Roupas',
    price: 89.9,
    stock: 60,
  },
  {
    name: 'Fone de Ouvido Bluetooth',
    category: 'Eletrônicos',
    price: 129.9,
    stock: 30,
  },
  {
    name: 'Mochila Escolar',
    category: 'Acessórios',
    price: 99.9,
    stock: 40,
  },
  {
    name: 'Smartphone',
    category: 'Eletrônicos',
    price: 1999.9,
    stock: 15,
  },
  {
    name: 'Chinelo de Borracha',
    category: 'Calçados',
    price: 29.9,
    stock: 100,
  },
  {
    name: 'Jaqueta de Couro',
    category: 'Roupas',
    price: 349.9,
    stock: 25,
  },
];

// criar um array com apenas os produtos em uma categoria específica.
produtos.filter(el)

// aplicar um desconto de 10% a todos os produtos da categoria selecionada.
// para calcular o valor total do estoque (preço x quantidade) da categoria selecionada.
// para verificar se há algum produto fora de estoque.
// para localizar um produto específico pelo nome.
// para criar uma lista com todas as combinações possíveis de nome e categoria dos produtos.
