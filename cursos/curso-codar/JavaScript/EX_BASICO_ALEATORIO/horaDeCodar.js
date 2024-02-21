// 1
const n = "1234";

const trueN = Number(n);

console.log(typeof trueN);

// 2
const amazingJs = "JavaScript é incrível";
const wordsNumber = amazingJs.split(" ").length;
const characterNumber = amazingJs.length;

console.log(`O número de palavras é ${wordsNumber}`);
console.log(`E o número de caracteres é ${characterNumber}`);

// 3
const name = ["Vitor", "Lari", "Xico", "Pacoca", "Felipe"];

for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

// 5
const horario24 = prompt("Digite que horas são: ");

const conversorHorario = (horario24) => {
  if (horario24 > 12) {
    return `Agora é(são) ${horario24 - 12} p.m`;
  } else {
    return `Agora é(são) ${horario24} a.m`;
  }
};

console.log(conversorHorario(horario24));
