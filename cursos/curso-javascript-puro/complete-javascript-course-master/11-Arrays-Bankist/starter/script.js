'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; // slice() é utilizado para criar uma cópia do parâmetro movements, ja que sort() altera o valor original, e não queremos isso

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
        `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name.at(0))
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts.map(acc => acc.username));

// Event handler
// Prevent form from submitting. Serve para não recarregar a página ao clicar em um botão de formulário...

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }
      `;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // Faz com que o campo perca seu focus

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    inputTransferAmount.value = inputTransferTo.value = '';

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    ); // Mesma coisa que o find, porém retorna o índice ao invés do valor

    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
}); // Isso funciona pois é a mesma coisa que criar uma função no qual alteramos uma variável que está no escopo global. No caso, mudamos sorted com base nos clicks que ativam a função do botão Sort

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/////////////////////////
// Simple Array Methods

// Arrays são objetos e tem acesso a métodos (funções) especiais que são ferramentas importantes para os arrays

let arr = ['a', 'b', 'c', 'd', 'e'];

// 1. SLICE

// Não altera o array inicial, apenas faz uma cópia
// console.log(arr.slice(2)); // c, d, e
// console.log(arr.slice(2, 4)); // c, d. O último índice retorna um a menos (2, 3)
// console.log(arr.slice(-2)); // d, e
// console.log(arr.slice(-1)); // e
// console.log(arr.slice(1, -2)); // b, c
// console.log(arr.slice()); // a, b, c, d, e
// console.log([...arr]); // a, b, c, d, e

// 2. SPLICE

// Altera o array inicial. Splice é mais útil para remover elementos do array do que realmente o retorno que ele tras
// console.log(arr.splice(2)); // a, b, d
// arr.splice(-1);
// console.log(arr); // a, b, c, d
// arr.splice(1, 2);
// console.log(arr); // a, d, e. Retorna o último índice corretamente (1, 2)

// 3. REVERSE

// Altera o array inicial
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); // f, g, h, i, j
// console.log(arr2);

// 4. CONCAT

// Não altera o array inicial, apenas faz uma cópia
// const letters = arr.concat(arr2);
// console.log(letters); // a, b, c, d, e, f, g, h, i, j
// console.log([...arr, ...arr2]); // A mesma coisa do concat

// 5. JOIN

// Não altera o array inicial, apenas faz uma cópia
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
// console.log(letters);

//////////////////////
// The new at Method

// 6. AT
// Tentar utilizar o que for mais legível possível. Em um código pequeno [] pode ser melhor, em um mais robusto, at() talvez seja mais fácil de se entender no meio de muita confusão
// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23

// getting last array element
// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64

// Também funciona com Strings
// console.log('Vitor'.at(-1)); // r

///////////////////////////
// Looping Arrays: ForEach

// 7. ForEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('----- FOR OF -----');

// for (const [i, movement] of movements.entries()) {
//   movement > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${movement}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
// }

// console.log('----- FOREACH -----');

// movements.forEach(function (mov, i, arr) {
//   mov > 0
//     ? console.log(`Movement ${i + 1}: You deposited ${mov}`)
//     : console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
// });
// 0: function(200)
// 1: function(450)
// 2: function(-400)
// Break e continue não funcionam em forEach

//////////////////////////////
// ForEach with Maps and Sets

// 8. Map.forEach
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// 9. Set.forEach
// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

////////////////////////
// Coding Challenge #1
//
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
//
// Your tasks:
//
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
//
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// 🐶
// ")
// 4. Run the function for both test datasets
//
// Test data:
// Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
//
// Hints: Use tools from all lectures in this section so far 😉

const checkDogs = function (dogsJulia, dogsKate) {
  const correctDogsJulia = dogsJulia.slice(1, -2);
  const allData = correctDogsJulia.concat(dogsKate);

  allData.forEach((data, i) => {
    if (data >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${data} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//////////////////////////////////////////////
// Data transformation: Map, Filter, Reduce

// Map: outro método para fazer loop em arrays, parecido com forEach, porém ele cria um novo array baseado no array original.
// Ele mapeia os valores de saída...

// Filter: um método que define uma condição, os valores de um array que satisfazerem essa condição, serão agrupados em um novo array. Lembra um filtro, por isso o nome...

// Reduce: esse método adiciona (reduz) todos os valores de um array em um resultado, que não é um array, criando assim uma espécie de bola de neve. Por exemplo somar todos os valores de um array...

///////////
// 10. Map

// Sempre usar o return (não no caso da arrow function) pois você não quer mostrar algo no console e sim ter a saída de um novo array

// const eurToUsd = 1.1;

// Maneira nova e moderna de programar (programação funcional)
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// arrow map
// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDArrow); // não precisa de () depois do nome por que não é uma função, lembre-se que o retorno é um array, portanto, movementsUSDArrow é um array

// Algumas pessoas acham essa forma ruim por não estar escrito function e nem return no código, por conta disso perder legibilidade. Porém ainda sim é muito mais clean e curto, então eu prefiro.

// Maneira antiga de se programar
// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescription);

///////////////
// 11. filter
// const deposits = movements.filter(function (mov) {
// return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// for of
// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

///////////////
// 12. reduce

// Accumulator --> SNOWBALL (acc)
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// Arrow function
const balance = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance);

// for of
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
// console.log(balanceFor);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);

////////////////////////
// Coding Challenge #2
//
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
//
// Your tasks:
//
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
//
// 1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4;
// 2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old);
// 3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages �);
// 4. Run the function for both test datasets.
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / arr.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };
// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/////////////////////////////////
// The magic of Chaining methods

// Em uma cadeia de métodos, o reduce precisa ser obrigatóriamente o último método a ser utilizado, pois ele não retorna mais um array para os outros métodos trabalharem, ele retorna um valor

// PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, _, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
// .map(mov => mov * eurToUsd)
// .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// O parâmetro arr é muito útil para debugar nosso código utilizando ele para mostrar ao console o resultado do array do método anterior

// Não é uma boa prática utilizar Chaining methods com métodos que mutam o array original, isso pode causar muitos problemas em projetos maiores...
// Não abusar do Chaining methods, principalmente em arrays muito grandes. Isso pode comprementer performance, não utilizar maps descenessários por exemplo...

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
//
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

///////////////////
// 13. Find method
const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

let accountFor;
for (const account of accounts) {
  if (account.owner === 'Jessica Davis') accountFor = account;
}
// console.log(accountFor);

///////////////////
// Some and Every

// EQUALITY
// console.log(movements.includes(-130));

// Apesar do código abaixo fazer o mesmo que o de cima, para valores já definidos como no caso o -130, é mais útil utilizar includes. Com condições mais específicas utilize some
// console.log(movements.some(mov => mov === -130));

// 14. SOME: CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
// console.log(anyDeposits);

// 15. EVERY
// console.log(movements.every(mov => mov > 9));
// console.log(account4.movements.every(mov => mov > 0));
// Faz a mesma coisa que o some, porém, só é true se todos os elementos satisfazerem a condição

// Separate callback
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/////////////////////
// flat and flatMap
// o nível de aninhamento em que ele trabalha é 1
const arr2 = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr2.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2)); // aqui configuramos o nível de aninhamento para 2 para conseguir retornar os valores primitivos no array

// 16. flat
const overBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
// console.log(overBalance);

// 17. flatMap
const overBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov);
// console.log(overBalance2);

////////////
// 18. sort

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// Numbers
// console.log(movements); // Ele muta o array original

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; // precisa ser positivo, não necessariamente 1
//   if (a < b) return -1; // mesma coisa
// });
movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
// console.log(movements);

// Caso aja uma matriz mista, ou seja, que tenha tanto numbers quanto strings, não utilize sort

//////////////////////////////////////////////
// More ways of creating and filling arrays
const arr3 = [1, 2, 3, 4, 5, 6, 7];
// console.log(new Array[(1, 2, 3, 4, 5, 6, 7)]());

// 19. Empty arrays + fill methods
const x = new Array(7);
// console.log(x); // empty * 7
// console.log(x.map(() => 5));
// x.fill(1)
x.fill(1, 3, 5); // Parecido com slice
// console.log(x); // empty * 3, 1, 1, empty * 2

arr3.fill(23, 4, 6);
// console.log(arr3); // 1, 2, 23, 23, 23, 23, 7

// 20. array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // Utilizar igual ao map
// console.log(z);

const dados = Array.from({ length: 100 }, (_, i) =>
  Math.trunc(Math.random() * 10)
);
// console.log(dados);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', '')) // Lembre-se que o el representa cada um dos elementos desse array.from, ele funciona como um map...
  );
  // console.log(movementsUI);

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});

//////////////////////////////////
// WHICH ARRAY METHOD TO SEU?🤔

///////////////////////////
// Array methods practice

// 1.
const bankDepositSum = accounts
  .flatMap(cur => cur.movements)
  .filter(cur => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(mov => mov.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(mov => mov.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// Prefixed ++ operator
// O a++ incrementa o valor da variável a porém retorna o valor original
let a = 10;
// console.log(a++); // 10
// console.log(a); // 11
// console.log(++accounts); 11

// 3.
const { deposits, withdrawals } = accounts
  .flatMap(mov => mov.movements)
  .reduce(
    (acc, cur) => {
      // cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur; // acc['x'] é o mesmo que acc.x
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
// console.log(deposits, withdrawals);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements.reduce((acc, mov) => {
//   mov > 0 ? acc.push(Math.trunc(mov * eurToUsd)) : acc;
//   return acc;
// }, []);
// console.log(totalDepositsUSD);

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little. Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite. Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!".
// 5. Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false).
// 6. Log to the console whether there is any dog eating an okay amount of food (just true or false).
// 7. Create an array containing the dogs that are eating an okay amount of food (try to reuse the condition used in 6.).
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects �).

// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them �.
// § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
// GOOD LUCK �

// task 1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

// task 2
// filter and map methods
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(dogSarah);
// console.log(`Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'}.`);

// task 3
const ownersEatTooLittle = dogs
  .filter(cur => cur.curFood < cur.recommendedFood)
  .flatMap(cur => cur.owners);
// console.log(ownersEatTooLittle);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);
// console.log(ownersEatTooMuch);

// task 4
console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// task 5 and 6
const checkEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log(dogs.some(checkEatingOkay));

// task 7
console.log(dogs.filter(checkEatingOkay));

// task 8
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
