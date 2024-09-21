'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal)); // better

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

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
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// utilizar uma querySelectorAll cria uma nodeList com todos os elementos selecionados enquanto getElementsByTagName por exemplo cria um HTMLCollection que é atualizado automaticamente.

// Creating and Inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // Começo de header
header.append(message); // Final de header
// No caso ele foi inserido pelo prepend e movido pelo append. Só pode existir um elemento específico, por isso, ele não foi duplicado e sim movido.

// header.append(message.cloneNode(true)); // Aqui ele foi clonado para contrariar a regra anterior kkk

header.before(message); // Leva o elemento message uma posição acima na hierarquia, no caso ele vira irmão de header e aparece antes do mesmo
header.after(message); // Mesma coisa, porém, agora aparece depois do header

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message); // Método antigo
  });

////////////////////////////////////
// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
