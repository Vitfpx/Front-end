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

// Função para transformar variáveis snake_case para camelCase
document.body.querySelector('button').addEventListener('click', function () {
  const text = document.body.querySelector('textarea').value;
  let outputRows = [];

  // Percorrer cada linha do text
  for (const [i, row] of text.toLowerCase().split('\n').entries()) {
    const [first, second] = row.trim().split('_');

    // Conversão para camelCase e adição de checkmarks
    outputRows.push(
      `${first}${second.replace(second[0], second[0].toUpperCase())}`.padEnd(
        18
      ) + `${'✅'.repeat(i + 1)}`
    );
  }
  // Atualiza o textarea com a saída do for e desabilita o botão
  const output = outputRows.join('\n');
  document.body.querySelector('textarea').value = output;
  document.body.querySelector('button').disabled = true;
});

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
