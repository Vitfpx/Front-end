let arr = [1, 2, 3, 4];

console.log(arr);

console.log("primeiro alemento:", arr[0]);
console.log("primeiro alemento:", arr[1]);
console.log("primeiro alemento:", arr[2]);
console.log("primeiro alemento:", arr[3]);

console.log("O tamanho do arrayé:", arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.clear();

for (let elemento of arr) {
  console.log(elemento);
}

console.clear();

for (let indice in arr) {
  console.log(indice, arr[indice]);
}
