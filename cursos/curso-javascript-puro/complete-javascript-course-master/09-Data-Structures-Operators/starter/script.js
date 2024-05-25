'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function ({ ing1, ing2, ing3 }) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); // Parece confuso porém você só está passando um objeto como parâmetro da função do método orderDelivery. E como qualquer parâmetro, as informações vão substituí-lo

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

/////////////////////////////////////
// Destructuring Arrays

// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr; // Apesar de parecer um array, sempre que o conjunto de elementos estiver do lado esquerdo, ele será uma desestruturação
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories; // O espaço serve para pular uma categoria sendo [0, 2] no array
// console.log(main, secondary);

/////////////////////////////////////
// Switching Variables

// const temp = main // Armazenar a variável pois o valor dela mudará na linha abaixo, e portanto, na secondary = main (secondary), então, secondary = temp (main)
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Fazendo o mesmo do código acima, porém, com destructuring
[main, secondary] = [secondary, main];
// console.log(main, secondary);

// Receive 2 return values from a function

// console.log(restaurant.order(1, 0)); // Normal
const [starter, mainMeal] = restaurant.order(0, 1); // Destructuring
// console.log(starter, mainMeal);

/////////////////////////////////////
// Nested Destructuring

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // Para mostrar um elemento como array

const [i, , [j, k]] = nested; // Para mostrar os elementos como elementos
// console.log(i, j, k);

/////////////////////////////////////
// Default Values

// const [p, q, r] = [8, 9]; // Undefined no último valor
const [p = 0, q = 0, r = 0] = [8, 9]; // Define valores padrões caso não exista um valor designado...
// console.log(p, q, r);

/////////////////////////////////////
// Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

////////////////////////////////////
// Named
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

//////////////////////////////////
// Default Values

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

//////////////////////////////////
// Mutating Variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b);

//////////////////////////////////
// Nested Objects

// const { fri } = openingHours;
// console.log(fri);
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

/////////////////////////////////////
// Spread Operators

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// or
// arr.unshift(1, 2);
// console.log(arr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // Como o spread operator trabalha individualmente no valor registrado, exibir o próprio ...newArr tirará os valores de dentro do array
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // Adicionou um valor ao objeto (array) mainMenu

///////////////////////////////
// Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

///////////////////////////////
// Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu, ...mainMenuCopy]; Mesmo Resultado do código acima, achei mais intuitivo nesse contexto...

console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Vitor';
// const letters = [...str, '', 'B.'];
// console.log(letters); // Como trabalha com valores individuais, a string fica dividida em cada letra (valor)
// console.log(...str);
// console.log(`${...str} Barbosa Raimundo`); 🚫

// Spread Operator apenas pode ser utilizado como parâmetro em uma função ou ao criar um array

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]); // Jeito podre de se fazer
// restaurant.orderPasta(...ingredients); // Jeito bom de se fazer

//////////////////////////////
// Objects with Spread Operator

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
