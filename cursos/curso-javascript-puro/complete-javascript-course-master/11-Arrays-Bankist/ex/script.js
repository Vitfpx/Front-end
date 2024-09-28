'use strict';

// 1
// const orders = ['Pedido1', 'Pedido2', 'Pedido3', 'Pedido4', 'Pedido5'];
// console.log(orders.slice(2, 5));

// 2
// const fruits = ['Maçã', 'Banana', 'Pera', 'Uva', 'Laranja'];
// fruits.splice(2, -1);

// 3
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.sort((a, b) => b - a));

// 4
// const groceries1 = ['Arroz', 'Feijão'];
// const groceries2 = ['Pão', 'Leite'];

// const allGroceries = groceries1.concat(groceries2);
// console.log(allGroceries);

// 5
// const words = ['Eu', 'amo', 'programar'];
// console.log(words.join(' '));

// 6
// const nums = [10, 20, 30, 40, 50];
// console.log(nums.slice(-1));

// 7
// const names = ['Ana', 'Carlos', 'Beatriz'];
// names.map(name => console.log(`Hey ${name}`));

// 8
// const countries = new Map([
//   ['Brasil', 'Brasília'],
//   ['Portugal', 'Lisboa'],
//   ['Canadá', 'Ottawa'],
// ]);

// countries.forEach(function (capital, country) {
// console.log(`${country}: ${capital}`);
// });

// 9
// const ulCreate = function () {
//   const ul = document.createElement('ul');
//   const li1 = document.createElement('li');
//   const li2 = document.createElement('li');
//   const li3 = document.createElement('li');

//   ul.innerHTML = 'grupo de listas';
//   li1.innerHTML = 'lista 1';
//   li2.innerHTML = 'lista 2';
//   li3.innerHTML = 'lista 3';
//   document.querySelector('body').append(ul);
//   ul.append(li1);
//   li1.after(li2);
//   ul.append(li3);
// };
// ulCreate();

// 10
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(el => el * 2));

// 11
// const ages = [12, 21, 17, 30, 15, 19];
// console.log(ages.filter(el => el > 18));

// 12
// const prices = [29.99, 49.99, 9.99, 19.99];
// console.log(prices.reduce((acc, el) => acc + el, 0));

// 13
// const products = [
//   { name: 'Camiseta', price: 45 },
//   { name: 'Calça', price: 60 },
//   { name: 'Tênis', price: 100 },
// ];
// console.log(
//   products
//     .filter(el => el.price > 50)
//     .map(el => el.price * 2)
//     .reduce((acc, el) => acc + el, 0)
// );

// 14
// const users = [
// { name: 'Ana', age: 25 },
// { name: 'Carlos', age: 32 },
// { name: 'João', age: 19 },
// ];
// console.log(users.find(user => user.name === 'Carlos'));

// 15
// const nums = [15, 23, 53, 67, 30];
// console.log(nums.findIndex(num => num > 50));

// 16
const numbers = [34, 90, 12, 67];
// console.log(numbers.some(el => el > 100));
// console.log(numbers.every(el => el < 100));

// 17
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// console.log(arr.flat());

// 18
const phrases = ['Eu amo programar', 'A vida é bela', 'Javascript é incrível'];
// console.log(phrases.flatMap(el => el.split(' ')));

// 19
const nums = [34, 12, 87, 23, 45];
// console.log(nums.sort((a, b) => a - b));

// 20
const str = '12345';
// console.log(Array.from(str));

// 21
// const ar = new Array(5).fill(7)
const ar = Array.from({ length: 5 }, () => 7);
// console.log(ar);
