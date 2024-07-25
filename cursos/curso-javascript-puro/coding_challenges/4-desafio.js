// Crianção e estilização dos elementos
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.body.querySelector('button').textContent = 'click me';
document.body.querySelector('textarea').style.height = '8rem';
document.body.querySelector('textarea').style.width = '15rem';
// document.body.querySelector('textarea').value = `underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure`;

// Função para converter snake_case para camelCase
const convert = () => {
  // inputText do textarea e arrays das linhas separadas
  const inputText = document.querySelector('textarea').value;
  const rows = inputText.toLowerCase().split('\n');

  // Output do array final
  let outputRows = [];

  // For para percorrer os elementos do array de rows
  for (const [i, line] of rows.entries()) {
    const trimmedRows = line.trim();
    const camelCaseRows =
      trimmedRows.slice(0, trimmedRows.lastIndexOf('_')) +
      trimmedRows.slice(trimmedRows.lastIndexOf('_') + 1)[0].toUpperCase() +
      trimmedRows.slice(trimmedRows.lastIndexOf('_') + 2);

    // Colocando os checks dentro de cada linha e transformando de volta em array para os resultados não se sobreporem
    outputRows.push(camelCaseRows.padEnd(20) + '✅'.repeat(i + 1));
  }

  // Output do Resultado final
  const output = outputRows.join('\n');

  // Aplicando o output dentro do textarea e desativando o botão
  document.querySelector('textarea').value = output;
  document.querySelector('button').disabled = true;
  console.log(output);
};

// Evento para o botão onde chamará a função acima
document.querySelector('button').addEventListener('click', convert);

/*
Resultado:
underscoreCase    ✅
firstName         ✅✅
someVariable      ✅✅✅
calculateAge      ✅✅✅✅
delayedDeparture  ✅✅✅✅✅
*/

/*
Recebido:
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
