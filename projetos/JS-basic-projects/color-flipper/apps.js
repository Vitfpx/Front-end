const button = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const a = document.querySelectorAll("a");
const updateColor = [h1, h2, ...document.querySelectorAll("a")];

const colors = [
  "Turquoise",
  "rgb(161,128,190)",
  "hsl(187, 50.8%, 61%)",
  "#4B2D75",
  "rgb(2,147,139)",
  "hsl(323, 65.1%, 53%)",
  "Black",
  "#F4D321",
];

let getColor = (color) => {
  return color[Math.floor(Math.random() * colors.length)];
};

button.addEventListener("click", () => {
  let pallete = getColor(colors);
  main.style.backgroundColor = color.style.color = h1.style.color = h2.style.color = pallete;
  color.innerText = pallete;
  updateColor.forEach((elements) => {
    elements.style.color = pallete;
  });
});
