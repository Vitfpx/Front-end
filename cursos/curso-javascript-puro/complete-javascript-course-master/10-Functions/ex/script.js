'use strict';

// 1. Sistema de Reservas em um Hotel
// const createBooking = function (hotelName, roomsAvailable, roomsBooked = 1) {
//   const hotel = {
//     name: hotelName,
//     available: roomsAvailable,
//     booked: roomsBooked,
//   };
//   console.log(hotel);
// };

// createBooking('Paramore', [2, 4, 5, 6], [1, 3, 7]);
// createBooking('Paramore', 10, 3);
// createBooking('Paramore', 10);

// 2. Pagamento de Salários
// Arrow Function ⬇⬇⬇
// const calculateBonus = salary => bonus =>
//   `Salário atual: ${salary}R$\nBônus: ${salary * (bonus / 100)}R$`;

// const calculateBonus = function (salary) {
//   return function (bonus) {
//     return `Salário atual: ${salary}R$\nBônus: ${salary * (bonus / 100)}R$`;
//   };
// };
// console.log(calculateBonus(2500)(10));
// console.log(calculateBonus(2500)(20));

// 3. Contador de Cliques
const btnCounter = document.createElement('button');
btnCounter.classList.add('btn__counter');
btnCounter.innerHTML = 'Counter';
document.querySelector('body').append(btnCounter);

let counter = 1;

const createClickCounter = () => (btnCounter.textContent = counter++);

btnCounter.addEventListener('click', createClickCounter);

// 4.
// const btnClient = document.createElement('button');
// btnClient.classList.add('btn__client');
// btnClient.innerHTML = 'Client Informations';
// btnCounter.after(btnClient);

// const client = {};

// const xico = {
//   name: 'xico',
//   phone: 987,
// };
// const lari = {
//   name: 'lari',
//   phone: 654,
// };

const addInfo = function (name, number) {
  (client.name = name), (client.phone = number);
  console.log(client);
};

const info = function (fn) {
  // const infoName = prompt('Name: ');
  // const infoNumber = prompt('Phone: ');

  // return addInfo(infoName, infoNumber);
  return fn(this.name, this.phone);
};

// const person = function (name, number) {
//   (client.name = name), (client.phone = number);
//   console.log(client);
// };

// btnClient.addEventListener('click', info);
// btnClient.addEventListener('click', info.bind(xico, addInfo));
// btnClient.addEventListener('click', info.bind(lari, addInfo));

// 5.
// const stock = { apples: 10, oranges: 15 };

// const increaseStock = function (item, amount) {
//   return this[item] += amount;
// };

// const updateStock = function (obj, item, fn, amount) {
//   return fn.call(obj, item, amount);
// };
// updateStock(stock, 'apples', increaseStock, 4);
// updateStock(stock, 'oranges', increaseStock, 12);
// console.log(stock);

// 6.
const convertCurrency = function (rate) {
  return function (amount) {
    return Math.round(amount / rate);
  };
};

const toDollar = convertCurrency(5.44);
const toEuro = convertCurrency(6.08);
const toIene = convertCurrency(0.038);
const toLibraEsterlina = convertCurrency(7.3);

// console.log(toDollar(4000));
// console.log(toEuro(4000));
// console.log(toIene(4000));
// console.log(toLibraEsterlina(4000));

// 7.
// const users = [];

// const registerUser = (name, email) => age =>
//   users.push({ user: name, address: email, age: age });
// const vitor = registerUser('Vitor', 'vitor@gmail.com');
// const zaum = registerUser('Zaum', 'Zaum123@gmail.com');
// vitor(21);
// zaum(22);
// console.log(users);

// 8.
// const transactions = [
//   [1150, 'débito'],
//   [270, 'débito'],
//   [829, 'crédito'],
//   [129, 'débito'],
//   [829, 'crédito'],
// ];

// const filterFunction = function (arr) {
//   return arr.filter(function (el) {
//     const [_, style] = el;
//     return style === 'débito';
//   });
// };

// const filterTransactions = function (arr, fn) {
//   return fn(arr);
// };
// console.log(filterTransactions(transactions, filterFunction));

// 9.
const calculateDiscount = function (amount, discount = 5) {
  return (discount = (amount * discount) / 100);
};

// console.log(calculateDiscount(2750, 35));
// console.log(calculateDiscount(350, 15));
// console.log(calculateDiscount(220, 10));
// console.log(calculateDiscount(100));

// 10.
// (function welcomeMessage(name) {
//   console.log(
//     'Bem-vindo ao Hotel Paramore! Esperamos que você tenha uma ótima estadia.'
//   );
// })();

// 11.
// const applyServiceCharge = valueTax => (valueTax += 15);
// const applyTax = value => (value += value * 0.1);
// const processOrder = function (value) {
//   // tax
//   const taxValue = applyTax(value);

//   // service change
//   const finalValue = applyServiceCharge(taxValue);

//   return finalValue;
// };
// console.log(processOrder(145));

// 12.
// const report = {
//   name: 'vitor',
//   theme: '',
//   text: 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
// };

// const monitorForm = function (form) {
//   for (const value of Object.values(form)) {
//     if (value === '')
//       return function (name) {
//         console.log(`Mr(s). ${name}, please fill out the entire form`);
//       };
//   }
//   return form;
// };
// monitorForm(report)(report.name);

// Exercício 1 - Complexo
// const createBills = function (name, amount, dueDate) {
//   return {
//     name,
//     amount,
//     dueDate: new Date(dueDate),
//     paid: false,
//   };
// };

// const checkDueDate = function (bill) {
//   // if (dueDate)
//   const time = Math.ceil((bill.dueDate - new Date()) / 1000 / 60 / 60 / 24);
//   const tax = bill.amount * 0.02;
//   if (bill.dueDate - new Date() < 0) {
//     console.log(
//       `A conta está atrasada ${Math.abs(
//         time
//       )} dias, portanto, será aplicado uma multa de R$${tax},00`
//     );
//     bill.amount += bill.amount * 0.02;
//   } else {
//     bill.paid = true;
//   }
//   return bill;
// };

// const payBill = function (bill) {
//   bill = checkDueDate(bill);

//   if (bill.paid) console.log(`A conta de ${bill.name} já foi paga.`);
//   else
//     console.log(
//       `Pagamento da conta de ${bill.name} no valor de R$${bill.amount.toFixed(
//         2
//       )} processado.`
//     );
// };

// const jonas = createBills('Jonas', 5400, '2024-09-20');
// const vitor = createBills('Vitor', 450, '2024-09-28');

// payBill(jonas);
// payBill(vitor);

// Exercício 2 - Complexo
const players = [];
const createBids = function (name, bidValue) {
  players.push({ name: name, bid: bidValue });
  console.log(`Novo lance registrado: ${name} ofereceu R$${bidValue},00`);
};

const determineWinner = function (bids) {
  const winner = bids.reduce((acc, el) => (el.bid > acc.bid ? el : acc));
  
  return console.log(`${winner.name} is the winner!!!`);
};

const vit = createBids('Vit', 42000);
const xico = createBids('Xico', 16500);
const dug = createBids('Dug', 27800);
const mor = createBids('Mor', 30000);
determineWinner(players);
// console.log(players);
