// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
  8 motivos para o fracasso e como consertá-los:

  1º - Não ter um objetivo claro; 
  FIXXXX:
    .Deixar claro seus objetivos em algo mais palpavel, um papel, um bloco de notas
    .Ter um plano de como concluir esse objetivo
    .Ser realista e usar medição de tempo para conclusão dos objetivos
    .Imagine um grande projeto que você quer ser capaz de criar um dia
    .Procurar tecnologias que você precisa e então aprendê-las

  2º - Apenas seguir e copiar os códigos de um curso sem entender como funciona (no modo automático);
  FIXXXX:
    .Entender o código que você está estutdando e digitando nas aulas
    .Sempre digitar os códigos e nunca copiá-los

  3º - Não reforçar aprendizado com desafios e anotações;
  FIXXXX:
    .Depois de aprender algo novo, use-o imediatamente para fixar
    .Fazer anotações
    .Se desafiar e praticar com pequenos desafios e exercícios
    .Não tenha pressa para completar qualquer curso

  4º - Não codificar e criar projetos próprios, sem seguir um passo a passo, realmente criar algo;
  FIXXXX:
    .Faça seus próprios projetos, sem ninguém orientando você
    .Isso não é opcional, fazer cursos sem criar nada sozinho nunca vai te levar a nada
    .Se desafia sempre
    .Não fique preso no "tutorial hell"

  5º - Ficar frustrado quando seu código não está perfeitamente limpo e efetivo;
  FIXXX:
    .Nunca fique preso tentando escrever um código perfeito
    .Escreva o máximo de códigos que puder, não importando a qualidade
    .Código limpo e eficiente vai vir com o tempo
    .Você sempre pode voltar e refazer o código ou melhorar


  6º - Perder motivação por nunca saber o suficiente;
  FIXXXX:
    .Entenda que você nunca vai saber TUDO
    .Apenas foque no que você precisa aprender

  7º - Aprendendo sozinho, sem compartilhar seus progressos;
  FIXXX:
    .Compartilhar seus apredizados e ensinar aos outros para fixar melhor
    .Compartilhar seus objetivos
    .Compartilhar sua evolução

  8º - Depois de terminar alguns cursos, pensar que realmente vai entrar na área com todos esses erros acima;
  FIXXX:
    .Apenas terminar o curso não é o suficiente, também existe a preocupação de todos os outros pontos acima 
    para se tornar um bom programador e ser chamado para uma vaga

*/
/*
  Como falhar ao resolver problemas:

  1º - Resolver os problemas sem pensar muito;

  2º - Implementa suas soluções de forma não estruturada, sem muita abordagem lógica;

  3º - Ele se estressa quando as coisas não dão certo;

  4º - Orgulhoso demais para pesquisar quando não consegue encontrar uma solução própria.

  FIXXX:
    .Manter a calma e desacelerar, e não apenas pular para o problema sem um plano
    .Ter a mentalidade de fazer uma abordagem lógica e racional
    .Após isso, usar a estrutura abaixo de quatro etapas para resolver o problema

    4-STEPS FRAMEWORK

      1º - Entender o problema 100%. Fazer as perguntas certas para obter uma imagem clara 
      de todo o problema;

      EXAMPLE: 
      Project Manager: "We need a function that reverses whatever we pass into it"

      Precisamos fazer algumas perguntas para entender exatamente o que ele pediu...

      -O que deve ser revertido? Tudo que faz sentido reverter são numbers, strings e arrays
      -O que fazer se qualquer outra coisa passar nesta função?
      -O que deveria retornar? Uma string? Ou o mesmo tipo que foi passado?
      -Como reconhecer que o argumento é um number, string ou array?

      2º - Divide and Conquer: Quebrar um grande problema em pequenos sub-problemas, são eles:
        .Checar se o argumento é um number, string ou array
        .Implementar a o reverdo

      3º - Não ter medo de fazer tantas pesquisas quanto for necessário

      4º - Em problemas maiores, escrever um pseudo-código antes do código real
      
      Pseudo-código são códigos para humanos entenderem, como:

      function reverse(value)
        if value type !string && !number && !array
          return value

        if value type == string
          reverse string
        if value type == number
          reverse number
        if value type == array
          reverse array        
          
        return reverse value

*/

// Exemplo de como usar os ensinamentos acima:
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temps);

  let max = temps[0]
  let min = temps[0]

  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temps[i]
    if (typeof currentTemp !== 'number') continue

    if (currentTemp < max) max = currentTemp
    if (currentTemp < min) min = currentTemp
  }
  console.log(max, min);
  return max - min
};

const amplitudeNew = calcTempAmplitude([3, 5, 1], [9, 0, 5])
console.log(amplitudeNew);
*/

// Como debuggar o código
// 1. Identify - Identificar que existe um bug
// 2. Find - Encontrar o bug
// 3. Fix - Resolver o bug
// 4. Prevent - Prevenir que o bug não aconteça novamente

const myCharacterAfterWin = function () {
  const myCharacter = {
    rings: '2',
    items: 'current set',
    character: 'VI7IN',
    life: Number(prompt('Your XP: ')),
  };

  console.log(myCharacter);
  // console.table(myCharacter); // Visibilidade muito melhor :D

  const GiveXP = myCharacter.life + 280;
  return GiveXP;
};

// console.log(myCharacterAfterWin());

// Podemos usar também o debugger; no código para abrir o console e usá-lo do mesmo jeito que o breakpoint no source

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/
// 1) Understanding the problem
// Como printar várias vezes conforme um número random?
// Como mudar o número de dias?

// 2) Breaking up into sub-problems
// Fazer a lógica da função incial funcionar, mesmo que com os números e dias repetidos. Utilizando for ✔
// Mudar os dias conforme a quantidade de elementos no array ✔
// Adicionar texto no console.log final conforma o número de elementos

const testArr1 = [17, 21, 23];
const testArr2 = [12, 5, -5, 0, 4];

const printForecast = arr => {
  let message = '';
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    message += `... ${arr[i]}ºC in ${i + 1} days`;
  }
  // console.log(message);
  return message + ` ...`;
};
console.log(printForecast(testArr1));
console.log(printForecast(testArr2));
