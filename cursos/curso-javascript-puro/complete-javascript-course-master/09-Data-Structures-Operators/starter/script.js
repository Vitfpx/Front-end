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
};

/////////////////////////////////////
// Destructuring Arrays

const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // Apesar de parecer um array, sempre que o conjunto de elementos estiver do lado esquerdo, ele será uma desestruturação
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories; // O espaço serve para pular uma categoria sendo [0, 2] no array
// console.log(main, secondary);

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

// Nested Destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested; // Para mostrar um elemento como array

const [i, , [j, k]] = nested; // Para mostrar os elementos como elementos
console.log(i, j, k);

// Default Values
// const [p, q, r] = [8, 9]; // Undefined no último valor
const [p = 0, q = 0, r = 0] = [8, 9]; // Define valores padrões caso não exista um valor designado...
console.log(p, q, r);

/////////////////////////////////////
// Destructuring Objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Named
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
