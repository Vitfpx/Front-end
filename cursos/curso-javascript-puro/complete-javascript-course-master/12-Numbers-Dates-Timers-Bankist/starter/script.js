'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2023-09-13T18:49:59.371Z',
    '2023-09-19T12:01:20.894Z',
    '2024-09-20T14:43:26.374Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  // const options = {
  //   hour: 'numeric',
  //   minute: 'numeric',
  //   day: 'numeric',
  //   month: 'long', // month: 'numeric', month: '2-digit'
  //   year: 'numeric', // year: '2-digit',
  //   weekday: 'long', // short = Fri, Mon, etc. narrow = F, M, etc
  // };

  const options = {
    minute: 'numeric',
    hour: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  const formatLocale = new Intl.DateTimeFormat(
    currentAccount.locale,
    options
  ).format(date);

  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${month}/${day}/${year}`;

  // const hours = date.getHours();
  return formatLocale;
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements; // slice() é utilizado para criar uma cópia do parâmetro movements, ja que sort() altera o valor original, e não queremos isso

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, _, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
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
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the reminaning time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 10;

  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

/////////////////////
// Event Handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// day/month/year or month/day/year

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }
      `;
    containerApp.style.opacity = 100;

    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', // month: 'numeric', month: '2-digit'
      year: 'numeric', // year: '2-digit',
      weekday: 'long', // short = Fri, Mon, etc. narrow = F, M, etc
    };

    // O código abaixo serve para pegar a localização do navegador do usuário
    // const locale = navigator.language;
    // console.log(locale);
    // labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0); // Transformamos em string
    // const month = `${now.getMonth() + 1}`.padStart(2, 0); // zero based
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${month}/${day}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur(); // Faz com que o campo perca seu focus

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  // const amount = Math.floor(inputLoanAmount.value);
  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // update UI
      updateUI(currentAccount);
      inputLoanAmount.value = '';
    }, 2500);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
}); // Isso funciona pois é a mesma coisa que criar uma função no qual alteramos uma variável que está no escopo global. No caso, mudamos sorted com base nos clicks que ativam a função do botão Sort

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

////////////////////////////////////
// converting and checking number

// console.log(23 === 23.0); // trie

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333
// Binary base 2 - 0 1
// console.log(0.1 + 0.2); // 0.300000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// Coercion
// console.log(Number('23'));
// console.log(+'23');

// Parsing
// console.log(Number.parseInt('30px', 10)); // 30
// console.log(Number.parseInt('e23', 10)); // e23, Pois para funcionar deve sempre começar com um número

// console.log(Number.parseInt('    2.5rem    ')); // 2
// console.log(Number.parseFloat('    2.5rem  ')); // 2.5
// console.log(parseFloat('    2.5rem  '));
// Utilizar Number.object ao invés de só object é mais moderno e legível atualmente

// Check if value is NaN
// console.log(Number.isNaN(20)); // false (number)
// console.log(Number.isNaN('20')); // false (value)
// console.log(Number.isNaN(+'20X')); // true (NaN)
// console.log(Number.isNaN(23 / 0)); // false (infinity)

// Checking if value is number
// console.log(Number.isFinite(20)); // True
// console.log(Number.isFinite('20')); // False
// console.log(Number.isFinite(+'20X')); // False
// console.log(Number.isFinite(23 / 0)); // False

// console.log(Number.isInteger(23)); // True
// console.log(Number.isInteger(23.0)); // True
// console.log(Number.isInteger(23 / 0)); // False

// Utilize principalmente parseFloat e isFinite
// Essa é a forma de calcular a área de um círculo de 10px

///////////////////
// Math & Rounding
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5 (elevado a 1/2 = raíz de 25)
// console.log(8 ** (1 / 3)); // 2 (única forma que eu sei de fazer uma elevação cúbica)

// console.log(Math.max(5, 18, 23, 11, 2)); // 23
// console.log(Math.max(5, 18, '23', 11, 2)); // 23, esse método faz a coerção sozinha (mudar string para number)
// console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// console.log(Math.min(5, 18, 23, 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// console.log(Math.trunc(Math.random() * 6) + 1); // 1 to 6

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(1, 6)); // 1 to 6
// console.log(randomInt(10, 20)); // 10 to 20

// Rounding Integers
// Todos esses metodos fazem coverting

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor('23.9')); // 23

// console.log(Math.trunc(23.3)); // Em números positivos floor === trunc

// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.3)); // -24 floor acaba se tornando um pouco melhor

// Rounding decimals
// O resultado é transformado em String sem o + no começo
// console.log((2.7).toFixed(0)); // 2
// console.log((2.7).toFixed(3)); // 2.700
// console.log((2.345).toFixed(2)); // 2.35 (string)
// console.log(+(2.345).toFixed(2)); // 2.35 (number)

// Valores primitivos não tem métodos. Nos os transformamos em objetos e depois eles voltam ao normal através do próprio JS

///////////////////////////
// The Remainder Operator
// console.log(5 % 2); // 1
// console.log(5 % 2); // 5 = 2 * 2 + 1

// console.log(8 % 3); // 2
// console.log(8 / 3); // 8 = 3 * 3 + 2

// console.log(6 % 2); // 3
// console.log(6 / 2); // 6 = 3 * 2

// console.log(7 % 2); // 1
// console.log(7 / 2); // 7 = 2 * 3 + 1

// const isEven = n => n % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     i % 2 !== 0 ? (row.style.backgroundColor = 'orange') : row;
//     i % 2 === 0 ? (row.style.backgroundColor = 'orangered') : row;
//   });
// });

///////////////////////
// Numeric Separators
// 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = _3_.__1415_; // errors
// const PI = 3.1415;
// console.log(PI);

// console.log(Number('230_000')); // NaN
// console.log(parseInt('230_000')); // 230

///////////
// BigInt
// O js trabalha os números em 64 bits mas usa apenas 53, pois o resto é utilizado em sinais e decimais. Isso significa que o JS apenas mostra com segurança ou precisão valores até um certo número limite, que calcularemos abaixo:
// console.log(2 ** 53 - 1); // 9007199254740991
// 2 = base 2, 53 = 53 bits trabalhando, -1 = começa em 0 e não em 1
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(2 ** 53 + 0); // 9007199254740992 o mesmo resultado do valor abaixo, ou seja, errado
// console.log(2 ** 53 + 1); // 9007199254740992
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);
// // As vezes ele acerta e as vezes erra

// console.log(897498327417349712374091729034); // 8.974983274173497e+29
// console.log(897498327417349712374091729034n); //  897498327417349712374091729034n
// console.log(BigInt(897498327417349712374091729034)); // O resultado não será exatamente igual pois ele primeiro processa o número gigante e depois converte. Então utilize esse para valores menores

// Operations
// console.log(10000n + 10000n); // 20000n
// console.log(137941749172931n * 10000n); // 1379417491729310000n
// console.log(Math.sqrt(16n)); // doesn't work

// não podemos misturar os bigInt com regular numbers
// const huge = 136847623874236453563n;
// const num = 23;
// console.log(huge * BigInt(num)); // 3147495349107438431949n

// Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false (sem coercion)
// console.log(typeof 20n); // bigint
// console.log(20n == '20'); // true (com coercion)

// console.log(huge + ' is REALLY big !!!');

// Divisions
// console.log(10n / 3n); // 3n (retornará sem a parte decimal)
// console.log(10 / 3); // 3.33333

//////////////////
// Creating Dates

// Create a date
/*
const now = new Date();
console.log(now); // Thu Sep 19 2024 01:48:08 GMT-0300 (Horário Padrão de Brasília)

console.log(new Date('Sep 19 2024 01:48:08'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5)); 
// O 10 seria o mes, porém resultou em novembro que na verdade deveria ser o mes 11. 
// Isso por que o JS por algum motivo trabalha os meses com base 0
console.log(new Date(2037, 10, 33)); // Novembro tem 30 dias, porém o JS corrigi para o próximo dia (Dec, 3)

console.log(new Date(0)); // Jan 1, 1970. Dia de criação do UNIX
console.log(new Date(3 * 24 * 60 * 60 * 1000)); 
// Como a notação é feita em milisegundos, convertemos 3 dias para 24 horas para 60 minutos para 60 segundos para 1000 milisegundos. 
// Assim obtivemos o resultado de 3 dias após a criação do UNIX
*/

// Working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); // 2037, ano
// console.log(future.getMonth()); // 10, mesmo sendo novembro kk
// console.log(future.getDate()); // 19, dia do mês
// console.log(future.getDay()); // 4, dia da semana (começa no domingo)
// console.log(future.getHours()); // 15, horas
// console.log(future.getMinutes()); // 23, minutos
// console.log(future.getSeconds()); // 0, segundos
// console.log(future.toISOString()); // Padrão internacional (Z - Sem fuso horario e horario de verão)
// console.log(future.getTime()); // Mostra quanto tempo passou do dia da crição do UNIX até a data da variável future
// console.log(new Date(2142267780000)); // Mostra o tempo da criação do UNIX mais o tempo descrito em milisegundos
// console.log(Date.now()); // Criação UNIX até agora

// É possível fazer o código abaixo com qualquer um dos métodos acima
// future.setFullYear(2040);
// future.setDate(18);
// etc...
// console.log(future);

/////////////////////////
// Operations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future); // 2142267780000

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 1));
console.log(days1);
// Para casos diferentes como daylight saving podemos usar a biblioteca .moment

/////////////////////////////////////
// Internationalizing Numbers (Intl)
const num = 3884764.23;

const options = {
  style: 'currency', // percent, currency, unit
  unit: 'mile-per-hour', // Celsius
  currency: 'EUR', // Determinará como se escreve euro nos países abaixo, mas não necessariamente esses países utilizam euro
  // useGrouping: false, // Tira as vírgulas e pontos, exceto de decimais
};

// console.log('US:', new Intl.NumberFormat('en-US', options).format(num)); // US: 3,884,764.23
// console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num)); // Germany: 3.884.764,23
// console.log('Brazil:', new Intl.NumberFormat('pt-BR', options).format(num)); // Brazil: 3.884.764,23
// console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num)); // Syria: ٣٬٨٨٤٬٧٦٤٫٢٣

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
); // pt-BR 3.884.764,23

///////////////////////////////
// setTimeout and setInterval

// setTimeout
// const ingredients = ['olives', 'spinach'];
// const pizzaTimer = setTimeout(
// (ing1, ing2) => {
// console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
// },
// 3000,
// ...ingredients
// );
// console.log('Waiting...');

// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);
