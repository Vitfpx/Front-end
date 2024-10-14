'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// btn.style.display = 'none';

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// Asynchronous JS
/*
RESUMO: 
1. Código assíncrono é útil quando algo leva tempo para ser processado.
2. Ele é não-bloqueante, permitindo que o resto do código seja executado enquanto esperamos.
3. O uso de funções de callback (como a que aparece dentro do setTimeout()) permite que o JavaScript saiba o que fazer depois que a tarefa em segundo plano for concluída.

Ex: 
const img = document.querySelector('.dog')
img.src = 'dog.jpg'
img.addEventListener('load'. function() {
  img.classList.add('fadeIn');
})
p.style.width = '300px';

O evente só vai ocorrer quando a imagem estiver carregada, enquanto isso não acontece, 
o resto do código funciona normalmente, mas quando carregar, o evento será executado.

Um evento de click por exemplo, não é assíncrono, ele apenas está esperando para ser disparado. 
O que faz o exemplo da imagem ser assíncrono é o fato da imagem estar constantemente carregando 
no background da página.
*/

// AJAX
/*
Asynchronous JavaScript And XML

1. O que é AJAX?
AJAX é uma tecnologia que permite que o navegador (cliente) se comunique 
com um servidor web sem precisar recarregar a página inteira.

Ela usa JavaScript para enviar solicitações ao servidor (como pedir ou enviar dados) 
e depois atualizar partes específicas da página com a resposta, dinamicamente 
e assíncronamente.

2. Assíncrono e Dinâmico
Assíncrono significa que enquanto o navegador espera uma resposta do servidor, 
o usuário ainda pode continuar interagindo com a página sem interrupção. 
Isso torna a navegação mais rápida e fluida, já que não há a necessidade de 
recarregar a página inteira cada vez que algo é solicitado ao servidor.
*/

// API
/*
1. O que é uma API?

API (Interface de Programação de Aplicações) é uma peça de software que permite que diferentes aplicações conversem entre si.
Em desenvolvimento web, uma API permite que o front-end (interface do usuário) solicite e receba dados de um servidor ou outro serviço.

2. Tipos de APIs

Existem vários tipos de APIs usados no desenvolvimento web. Alguns exemplos listados no slide incluem:

DOM API: Interface que permite manipular o HTML e CSS da página web.
Geolocation API: Interface que permite acessar a localização geográfica do usuário.
Own Class API: Uma API customizada que você pode criar para resolver problemas específicos.
"Online" API: APIs que rodam em servidores remotos e que fornecem dados através de solicitações 
feitas por uma aplicação. 
Geralmente, quando alguém menciona "API" hoje em dia, eles estão se referindo a esse tipo.

3. APIs Online

Uma Online API é uma aplicação que fica em um servidor e responde a requisições de dados.
Você pode construir sua própria API (utilizando frameworks como Node.js) ou usar 
APIs de terceiros (como o Google Maps ou APIs de clima).

4. Como AJAX Interage com APIs?

Formatos de dados: As APIs geralmente usam dois formatos de dados principais:

XML: Antigamente, XML era o formato de dados mais usado para APIs, mas hoje é menos comum.
JSON (JavaScript Object Notation): O formato mais popular atualmente, sendo leve e fácil de trabalhar, 
especialmente em JavaScript.
*/

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//     </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = '1';
//   });
// };
// getCountryData('brazil');
// getCountryData('usa');

// Como o AJAX acontece de forma assícrona, ou seja, ao mesmo tempo, as vezes os dados de uma API
// chegam mais rápido que os de outra, por isso a ordem é aleatória, mas concertaremos isso com callback hell

/////////////////////////////////////////////
// How the web works: request and response

/*

DNS Lookup (Pesquisa DNS)

Quando um cliente (como um navegador) quer acessar um site, ele primeiro precisa descobrir 
o endereço IP do servidor. Isso é feito através de uma pesquisa DNS (Domain Name System),
que converte o domínio (por exemplo, restcountries.eu) em um endereço IP (exemplo no slide: 104.27.142.889).
Importância: O DNS funciona como uma "agenda de telefones" para a web, ajudando a localizar o servidor certo.

2. Conexão TCP/IP

Depois de descobrir o endereço IP, o cliente faz uma conexão TCP/IP com o servidor, 
que estabelece o canal de comunicação para a troca de dados.
Protocolo: A conexão usa o protocolo HTTP ou HTTPS (HTTP seguro) para enviar as solicitações 
e receber respostas.

3. HTTP Request (Solicitação HTTP)

O cliente envia uma requisição HTTP ao servidor. A requisição contém várias informações:

Start Line: Inclui o método HTTP (ex: GET), o caminho do recurso (ex: /rest/v2/alpha/PT), 
e a versão do HTTP (ex: HTTP/1.1).

Headers: São dados adicionais que fornecem informações sobre a solicitação, como o host (www.google.com), 
o user-agent (navegador do cliente), e o idioma aceito (en-US).

Body (Corpo da solicitação): O corpo só é incluído em alguns métodos, como POST, 
quando o cliente está enviando dados para o servidor (não exibido neste exemplo de GET).

4. HTTP Response (Resposta HTTP)

O servidor processa a requisição e responde com uma resposta HTTP. A resposta inclui:

Start Line: Inclui a versão do HTTP (HTTP/1.1), um status code (ex: 200 OK para sucesso)
e uma mensagem de status.

Headers: Cabeçalhos da resposta com detalhes sobre o tipo de conteúdo (Content-Type), 
o tamanho, e a codificação de transferência.

Body: O conteúdo da resposta (geralmente em JSON ou HTML), que é o dado solicitado pelo cliente.

*/

/////////////////////////////
// Welcome to callback hell

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     'GET',
//     `https://countries-api-836d.onrender.com/countries/name/${country}`
//   );
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('brazil');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Callback hell são muitas callback functions uma dentro da outra, normalmente tem esse formato triangular...
// Não é uma boa prática pois torna o código complicado e difícil de ler, e isso é um código ruim...

////////////////////////////
// Promisses and Fetch API

// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/brazil'
// );
// console.log(request);

// TEORIA
/*
O que são Promises?

1. Promise: Um objeto que serve como um placeholder para o resultado de uma operação assíncrona no futuro.
2. A Promise atua como um "container" para um valor que será entregue de forma assíncrona, ou seja, 
o valor que será conhecido no futuro (assim que a operação terminar).
3. Em vez de usar eventos ou callbacks para tratar resultados assíncronos, podemos usar Promises para
organizar operações assíncronas de forma sequencial, o que evita o "callback hell" (uma situação onde 
temos callbacks aninhados demais).

O ciclo de vida de uma Promise
Uma Promise tem três estados:

Pending (Pendente): Quando a operação assíncrona ainda está em andamento. Ainda não sabemos o resultado.
Fulfilled (Cumprida): Quando a operação é bem-sucedida, e o valor esperado foi entregue.
Rejected (Rejeitada): Quando algo deu errado durante a operação assíncrona, e temos um erro.

Enquanto a Promise está pendente, ela está "esperando" o resultado. Quando a operação termina, 
a Promise vai para o estado Settled (resolvido), que pode ser Fulfilled (com sucesso) ou Rejected (com erro).
O ponto principal é que podemos manipular esses estados com código, usando .then() para o estado 
Fulfilled e .catch() para o estado Rejected.
*/

////////////////////////
// Consuming Promises
// const request = fetch(
//   'https://countries-api-836d.onrender.com/countries/name/brazil'
// );
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

///////////////////////
// Chaining Promises

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response);

//       // Throw retorna o promise como rejected, levando ao catch que mostra o erro e a mensagem abaixo.
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       // Neste caso, teriamos que copiar a mesagem de erro, porém não é uma boa prática repertirmos o código, então precisamos de uma helper function
//       const neighbour = 'asdksadnjan';

//       // Country 2
//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`
//       );
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💣💣💣`);
//       renderError(`Something went wrong 💣💣💣${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };
// getCountryData('brazil');

// O valor do próximo parâmetro de .then() será sempre o retorno do .then() anterior
// Nunca coloque o .then() em seguida da função retornada, pois assim, estariamos utilizando novamente o callback hell function

////////////////////////////////
// Handling Rejected Promises
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://countries-api-836d.onrender.com/countries/name/${country}`,
//     'Country not found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💣💣💣`);
//       renderError(`Something went wrong 💣💣💣${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = '1';
//     });
// };

// btn.addEventListener('click', function () {
// getCountryData('brazil');
// });

// Caso o país não tenha vizinhos, precisamos emitir um erro específico, caso contrário, retornará o erro do catch, que não é válido para o usuário
// getCountryData('japan');
// getCountryData('aaaaaaaaaaaaaaa');

// Sempre use catch, não é uma boa prática deixar promises vagando sem serem tratadas.

////////////////////////
// Coding Challenge #1
// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error(`Error ${data.status}`);
//       return response.json();
//     })
//     .then(data => {
//       const { city, countryName, latitude, longitude, continent, countryCode } =
//         data;
//       console.log(data);
//       console.log(`You are in ${city}, ${countryName}`);

//       if (!city || !countryName) throw new Error(`Error ${data.status}`);

//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${countryName}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Error ${data.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err =>
//       console.error(`Error, coordinates is not founded. (${err.message})`)
//     );
// };
// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   whereAmI(19.037, 72.873);
//   whereAmI(-33.933, 18.474);
// });

// Test data:
// § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
// § Coordinates 2: 19.037, 72.873
// § Coordinates 3: -33.933, 18.474

/////////////////////////////////////////////////
// How Asynchronous JS Works Behind The Scenes

/*
Fluxo de Execução Assíncrono:
Call Stack (Pilha de Execução):

O Call Stack é a pilha de execução onde o JavaScript executa as funções de forma síncrona. 
Quando uma função é chamada, ela é empilhada no Call Stack e só é removida quando termina 
sua execução.

Exemplo: Funções como log() ou querySelector() entram na pilha e são executadas imediatamente.

Web APIs:
Quando o JavaScript encontra uma função assíncrona, como setTimeout(), fetch(), 
ou manipuladores de eventos (addEventListener()), ele delega essas tarefas às Web APIs.
As Web APIs são executadas no "background" (por exemplo, carregamento de imagens ou 
requisições de rede).
Essas tarefas não bloqueiam o Call Stack.

Event Loop:
O event loop monitora o Call Stack e as filas de tarefas.
Ele verifica se o Call Stack está vazio, e então decide qual função será processada 
a seguir das filas de callbacks ou microtasks.

Callback Queue:
Quando uma tarefa assíncrona (como um setTimeout) é concluída, seu callback é enviado 
para a Callback Queue.
O event loop irá mover esses callbacks para o Call Stack quando a pilha estiver vazia.

Microtasks Queue:
A Microtasks Queue lida principalmente com Promises resolvidas ou rejeitadas.
Importante: Microtasks têm prioridade sobre a Callback Queue, então são executadas primeiro.
Exemplo: Um .then() associado a uma Promise resolvida entra na fila de microtarefas e será 
processado antes de outros callbacks como setTimeout.

Em Resumo:
O JavaScript é single-threaded, mas através das Web APIs, Event Loop, Callback Queue
e Microtasks Queue, ele consegue executar código de forma não-bloqueante. Isso significa 
que o JavaScript pode realizar várias tarefas ao mesmo tempo (como manipular eventos de 
DOM ou buscar dados de um servidor) sem parar a execução do restante do código.
*/

///////////////////////////////
// The Events Loop In Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
// for (let i = 0; i < 10000000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

/////////////////////////////
// Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, rejected) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) resolve('You WIN 💰');
//     else rejected(new Error('You lost your money 💩. F'));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// Comparação com callback hell ⬇⬇⬇

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

///////////////////////////
// Simple Create Promises

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('nt')).catch(x => console.error(x));

////////////////////////////////////
// Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
// navigator.geolocation.getCurrentPosition(
//   position => resolve(position),
//   err => reject(err)
// );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { longitud: lat, latitude: lng } = pos.coords;

//       return fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//       );
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${data.status}`);
//       return response.json();
//     })
//     .then(data => {
//       const { city, countryName, latitude, longitude, continent, countryCode } =
//         data;
//       console.log(data);
//       console.log(`You are in ${city}, ${countryName}`);

//       return fetch(
//         `https://countries-api-836d.onrender.com/countries/name/${countryName}`
//       );
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Error ${data.status}`);
//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err =>
//       console.error(`Error, coordinates is not founded. (${err.message})`)
//     );
// };
// btn.addEventListener('click', whereAmI);

////////////////////////
// Coding Challenge #2
const images = document.querySelector('.images');

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       // document.body.appendChild(img);
//       images.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function (err) {
//       reject(new Error(`Image not found. (${err.status})`));
//     });
//   });
// .then(img =>
// img.addEventListener('load', function () {
// document.insertAdjacentHTML('afterend', img);
// })
// );
// };

// Com variável no global scope...
// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));

// Sem variável no global scope...
// createImage('img/img-1.jpg')
//   .then(img => wait(2).then(() => img))
//   .then(img => {
//     img.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => wait(2).then(() => img))
//   .then(img => {
//     img.style.display = 'none';
//     return img;
//   })
//   .catch(err => console.error(err));

/////////////////
// Async/Await

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// fetch(
//   `https://countries-api-836d.onrender.com/countries/name/${country}`
// ).then(res => res.json());

// const whereAmI = async function () {
//   try {
//     // Geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     // Reverse geocoding
//     const resGeo = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//     );

//     // Temos que colocar essa condição aqui manualmente pois na teoria, a chamada do fetch não deu erro, pois não teve nenhum problema com a conexão de internet ou algo assim. Então para obtermos a rejeição dessa promise, temos que apontar o erro manualmente, que seria através do status de resGeo.ok.
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // Country data
//     const res = await fetch(
//       `https://countries-api-836d.onrender.com/countries/name/${dataGeo.countryName}`
//     );
//     if (!res.ok) throw new Error('Problem getting country');

//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
//   } catch (err) {
//     console.error(`${err} 💣`);
//     renderError(`💣 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };

// console.log('1: will get location');
// const city = whereAmI();
// console.log(city); // Promise

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} 💣`))
//   .finally('3: finished getting location');

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message} 💣`);
//   }
//   console.log('3: finished getting location');
// })();

/*
city resulta em uma Promise, pois o JavaScript não tem como
saber qual é o retorno dessa função pois ela está a todo 
momento rodando no background do projeto
*/

// console.log('FIRST');

////////////////////////////////////
// Error Handling With Try...Catch

// Neste código, ao invés de resultar em um erro dentro do código e matar o próprio JS,
// conseguirmos mostrar esse erro de uma forma que o script continue rodando normalmente.
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

////////////////////////////////
// Running Promises in Parallel
// const get3countries = async function (c1, c2, c3) {
//   try {
// const [data1] = await getJSON(
//   `https://countries-api-836d.onrender.com/countries/name/${c1}`
// );
// const [data2] = await getJSON(
//   `https://countries-api-836d.onrender.com/countries/name/${c2}`
// );
// const [data3] = await getJSON(
//   `https://countries-api-836d.onrender.com/countries/name/${c3}`
// );
// console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c1}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c2}`),
//       getJSON(`https://countries-api-836d.onrender.com/countries/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };
// get3countries('french', 'canada', 'brazil');

/*
Por que fazer diferente do convencional?
  O código acima não está errado, porém, os 3 retornos do AJAX de getJSON vão ser carregados um após o outro e, isso meio que não faz sentido num contexto de Asynchronous JavaScript...

Importante colocar em evidência:
  .Se uma das chamadas for rejeitada, todas serão rejeitadas;
  .Sempre que precisar fazer várias operações assíncronas e que não dependem uma da outra, não exite em chamá-las paralelamente.
*/

////////////////////////////
// race, allSetlled and any

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/italy`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//     getJSON(`https://countries-api-836d.onrender.com/countries/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://countries-api-836d.onrender.com/countries/name/egypt`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

/*
Importante colocar em evidência:
  .Promise.race() sempre retornará apenas um valor, e não um array, que será o valor que retornar mais rápido do callback de fetch(API);
  .Não importa se esse retorno é RESOLVE ou REJECT, o que importa é quem retorna mais rápido.

  .No exemplo acima, Promise.race() serve para monitorar o tempo que a async function demora para ser resolvida. Caso demore mais que 5 segundo, ela é rejeitada.
*/

// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

// Retorna os valores sem dar erro independente de serem resolve ou reject.

// Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

// Funciona que nem o race porém só retorna promises resolvidas

///////////////////////
// Coding Challenge #3

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      images.append(img);
      resolve(img);
    });
    img.addEventListener('error', function (err) {
      reject(new Error(`Image not found. (${err.status})`));
    });
  });
};

// const loadNPause = async function (url1, url2) {
//   try {
//     let img = await createImage(url1);
//     if (!img) throw new Error('Image not found!');
//     await wait(2);
//     img.style.display = 'none';

//     img = await createImage(url2);
//     if (!createImage) throw new Error('Image not found!');
//     await wait(2);
//     img.style.display = 'none';
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// };
// loadNPause('img/img-1.jpg', 'img/img-2.jpg');

const loadAll = async function (imgArr) {
  try {
    const imgs = await Promise.all(imgArr.map(img => createImage(img)));
    if (!imgs) throw new Error('Image not found!');
    console.log(imgs);
    imgs.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
