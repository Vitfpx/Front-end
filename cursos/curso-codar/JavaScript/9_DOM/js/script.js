// 1 - Movendo-se pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].children); // O Children pode ser usado para não aparecerem nós invisíveis no html

console.log(document.body.childNodes[1].childNodes[1].textContent);

// exemplo para fixar
console.log(document.body.childNodes[3].childNodes[3].childNodes[3]); // Descrição

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
const productQuery = document.querySelectorAll(".product"); // Todos os elementos .product

console.log(productQuery);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// exemplo para fixar
const button = document.createElement("button");
button.textContent = "23,00U$";

const pQuery = document.querySelector(".descriptionP");

const description = pQuery.parentElement;

description.insertBefore(button, pQuery);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// exemplo para fixar
const footerQuery = document.querySelector("footer");

const a = document.createElement("a");

a.href = "https://www.amazon.com.br";

a.textContent = "Site para compra...";

footerQuery.appendChild(a);

// 8 - replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu Novo Título!";

header.replaceChild(h2, title);

// exemplo para fixar
const img = document.createElement("img");

img.src = "taishi.jpg";

const pLocal = document.createElement("p");

const ulQuery = document.querySelector("ul");

pLocal.textContent = "Localização:";

ulQuery.replaceChild(pLocal, li);

// 9 - createTextNode
// textContent será mais utilizado
const myText = document.createTextNode("Agora vamos colocar mais um título!");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// 10 - Manipulando Atributos
const firstlink = navLinks.querySelector("a");

console.log(firstlink);
// firstlink.href = "https://www.amazon.com" Forma mais facil :/
firstlink.setAttribute("href", "https://www.amazon.com.br");

console.log(firstlink.getAttribute("href"));

firstlink.setAttribute("target", "_blank");

// 11 - Width and Height
console.log(footerQuery.offsetWidth);
console.log(footerQuery.offsetHeight);

console.log(footerQuery.clientWidth);
console.log(footerQuery.clientHeight);

// 12 - getBoundingClientRect
const product1 = products[0];

console.log(product1.getBoundingClientRect());

// 13 - CSS com JS
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";
footerQuery.style.borderRadius = "10px";
footerQuery.style.padding = "0 10px 10px 10px";

// 14 - Alterango estilos de vários elementos
for (const li of listItens) {
  li.style.backgroundColor = "#F00";
}

pQuery.style.backgroundColor = "#0F0";
