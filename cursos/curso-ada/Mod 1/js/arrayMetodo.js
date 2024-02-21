const arr1 = [30, 12, 45, 34, 29];
const arr2 = [];

// slice
console.log(arr1.slice(0, 2)); // Antes do segundo parâmetro
console.log(arr1.slice(2)); // Até o final
console.clear();

// push | unshift
console.log("Anets de adicionar:", arr2);

arr2.push(3);
arr2.push(10, 80, 60);

console.log("Depois de adicionar:", arr2);

console.log("Antes de adicionar: ", arr2);

arr2.unshift(32);

console.log("Depois de adicionar: ", arr2);
console.clear();

// pop | shift

console.log("Depois de adicionar com pop: ", arr2);

const elementoRemovido = arr2.pop();

console.log("Depois de remover com pop: ", arr2);
console.log("O elemento removido foi:", elementoRemovido);
console.clear();

//shift é o primeiro elemento...

// concatenar arrays

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));
console.clear();

// indexOf | lasIndexOf

console.log(arr1);

let indiceElemento34 = arr1.indexOf(34); // se a variavel não existir, retorna -1

console.log(indiceElemento34);

let arr3 = [1, 2, 3, 3, 5, 3];

console.log(arr3.lastIndexOf(3));
console.clear();

// includes
console.log(arr1);

console.log(arr1.includes(12));
console.clear();

// reverse
console.log("arr1 normal:", arr1);

const arr1Invertido = arr1.reverse();

console.log("arr1 invertido:", arr1Invertido);

