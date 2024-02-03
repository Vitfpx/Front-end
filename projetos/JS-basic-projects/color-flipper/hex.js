const button = document.querySelector("#btn");
const color = document.querySelector(".color");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const a = document.querySelectorAll("a");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getColor()];
  }
  // console.log(hexColor);
  main.style.backgroundColor =
    color.style.color =
    h1.style.color =
    h2.style.color =
    color.innerText = 
      hexColor;
  a.forEach((element) => {
    element.style.color = hexColor;
    element.addEventListener("mouseenter", () => {
      element.style.color = "#FFF";
      element.style.backgroundColor = hexColor;
    });
    element.addEventListener("mouseleave", () => {
      element.style.color = hexColor;
      element.style.backgroundColor = "#FFF"
    });
  });
});

getColor = () => {
  return Math.floor(Math.random() * hex.length);
};