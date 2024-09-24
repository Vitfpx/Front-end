'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // it's better

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////
// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  // );

  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////
// Page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add event listener to commom parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  // Abaixo tentamos usar parentElements pois o span estava retornando ele mesmo ao invés do botão. Porém se fizermos isso teremos o span retornando certo mas o próprio botão retornando o valor acima da hierarquia dele. Então o melhor foi utilizar closest...
  const clicked = e.target.closest('.operations__tab ');

  // Guard Clause
  if (!clicked) return; // Serve para encerrar a função aqui caso uma certa condição não seja satisfeita

  // Remove active classes
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__tab--active');
});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

/////////////////////////////
// How the DOM Really Works

// ### Primeiro Mapa Mental: "What is the DOM?"

// - **DOM (Document Object Model)**:
//   O DOM é uma interface que permite que o JavaScript interaja com o navegador. Ele representa a estrutura de um documento HTML em uma árvore de nós (DOM Tree). Esses nós podem ser elementos, atributos ou texto.

// - **Interação JavaScript e DOM**:
//   - Podemos usar o JavaScript para criar, modificar e deletar elementos HTML.
//   - Também podemos alterar atributos, classes, estilos e ouvir eventos no DOM, como cliques.

// - **API do DOM**:
//   - A API do DOM é uma coleção de métodos e propriedades que permitem interagir com a árvore DOM. Alguns exemplos de métodos são `.querySelector()`, `.addEventListener()`, `.textContent`, etc.

// ### Segundo Mapa Mental: "How the DOM API is organized behind the scenes?"

// - **Node**:
//   Todos os elementos do DOM (parágrafos, botões, divs, etc.) herdam da interface **Node**, que é o nó básico. Isso significa que qualquer nó no DOM pode acessar métodos como `.textContent` ou `.childNodes`.

// - **Elementos e Tipos de Elementos**:
//   Abaixo do **Node**, temos elementos específicos como `<p>` (parágrafos) ou **Text**, que pode ser o conteúdo dentro de um parágrafo. No DOM, todos os elementos HTML, como `<button>` ou `<div>`, são derivados da interface `HTMLElement`, que tem acesso a métodos comuns como `.querySelector()` e `.remove()`.

// - **EventTarget**:
//   Uma interface especial que permite que qualquer nó ou o próprio **Window** possa ouvir e manipular eventos com `.addEventListener()` e `.removeEventListener()`.

// ### Resumo Simples:

// - O DOM é uma maneira de representar o HTML como uma estrutura em árvore que o JavaScript pode manipular. Cada elemento da página é um "nó" nessa árvore.
// - O **Node** é a base de tudo no DOM, com todos os elementos HTML, textos e outros objetos herdando propriedades e métodos dele.
// - Métodos como `.querySelector()` e `.addEventListener()` permitem selecionar e modificar esses elementos ou ouvir eventos (como cliques).

///////////////////////////////////////////////
// Selecting, Creating and Deleting Elements

// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// utilizar uma querySelectorAll cria uma nodeList com todos os elementos selecionados enquanto getElementsByTagName por exemplo cria um HTMLCollection que é atualizado automaticamente.

// Creating and Inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
// message.innerHTML =
// 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // Começo de header
// header.append(message); // Final de header
// No caso ele foi inserido pelo prepend e movido pelo append. Só pode existir um elemento específico, por isso, ele não foi duplicado e sim movido.

// header.append(message.cloneNode(true)); // Aqui ele foi clonado para contrariar a regra anterior kkk

// header.before(message); // Leva o elemento message uma posição acima na hierarquia, no caso ele vira irmão de header e aparece antes do mesmo
// header.after(message); // Mesma coisa, porém, agora aparece depois do header

// Delete elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message); // Método antigo
//   });

////////////////////////////////////
// Styles, Attributes and Classes

// Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color); // Não podemos obter uma classe que não esteja num inline style
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color); // Assim, conseguimos contrariar a regra anterior
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // O 30 tem que ser um Number pois caso seja uma String, ele vai concatenar com o valor do height

// document.documentElement.style.setProperty('--color-primary', 'orangered');
// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

// Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // Retorna o valor absoluto
// console.log(logo.getAttribute('src')); // Retorna o valor relativo

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // Retorna o valor absoluto
// console.log(link.getAttribute('href')); // Retorna o valor relativo

// Data attributs
// console.log(logo.dataset.versionNumber);

// Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c'); // not includes

// Don't use
// logo.className = 'Vitor';

// Caso tenha duvida na diferença desses 3...

// logo.setAttribute('company', 'Bankist'); // Definir atributo
// logo.classList.add('c', 'j'); // Definir classe
// logo.alt = 'Beautiful minimalist logo'; // Também definir atributo

//////////////////////////////////
// Implementing Smooth Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   // Obtém a posição e o tamanho de um elemento em relação à viewport.
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   // Obtém a posição e o tamanho do elemento que disparou o evento
//   console.log(e.target.getBoundingClientRect());

//   // Indicam o quanto a página foi rolada
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   // Mostram as dimensões da área visível da janela do navegador.
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   // Scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

///////////////////////////////////////
// Types of events and events handler
// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading a heading :D');
//   // h1.removeEventListener('mouseenter', alertH1); // Serve para um evento não se repetir mais de uma vez
// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// Forma antiga de se fazer ⬇⬇⬇
// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

//////////////////////
// Event Propagation

// 1. **Capturing Phase (Fase de Captura):**
//
//  Definição: Nesta fase, o evento se propaga de cima para baixo, ou seja, começa no `document` e vai descendo pela árvore do DOM até o alvo do evento (elemento clicado).
//  Diagrama (seta roxa): Mostra que o clique começa no `document`, passa pelo elemento `<html>`, depois `<body>`, `<section>`, `<p>`, e finalmente chega ao elemento `<a>`.
//  Observação: Nem todos os eventos disparam essa fase. Alguns eventos específicos podem pular a fase de captura.

// 2. **Target Phase (Fase do Alvo):**
//
//  Definição: É a fase em que o evento realmente atinge o **elemento alvo** (no caso, o link `<a>` que foi clicado).
//  Diagrama: Quando o clique chega no `<a>`, a execução do evento ocorre aqui.

// 3. **Bubbling Phase (Fase de Borbulhamento):**
//
//   Definição: Após o evento atingir o alvo, ele começa a subir de volta pela árvore do DOM. Isso é chamado de "bubbling" porque o evento "borbulha" do elemento alvo de volta para os elementos pais.
//   Diagrama (seta vermelha): Após atingir o alvo `<a>`, o evento começa a subir de volta para os elementos pai, passando pelo `<p>`, `<section>`, `<body>`, `<html>`, até o `document`.

// #### Resumo:
// - Quando você clica em um elemento, o evento passa por três fases:
//   1. **Captura** (de cima para baixo até o alvo),
//   2. **Alvo** (onde o evento é executado no elemento específico),
//   3. **Borbulhamento** (de baixo para cima, subindo de volta pelos pais do alvo).

/////////////////////////////////
// Event Propagation in Practice

// rgb(255, 255 ,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// // console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
//   // e.target: É o elemento que foi clicado.
//   // e.currentTarget: É o elemento que está ouvindo o evento de clique.
//   console.log(e.currentTarget === this);

//   // Stop propagation
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// document.querySelector('.nav__link').removeAttribute('href');

////////////////////
// DOM Traversing

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// O closest é o contrário do querySelector, ele vai subir na hierarquia até achar o acestral mais próximo correspondente, enquanto query faz o mesmo até achar o filho mais próximo correspondente
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
