// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - Selecionando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// 3 - Selecionando por Id
const title = document.getElementById("title");

console.log(title);

// 4 - Selecionando por classe
const products = document.getElementsByClassName("product");

console.log(products);

// 5 - Selecionado por CSS
const productQuery = document.querySelectorAll(".product");

console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);
