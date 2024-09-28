'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

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

// Menu Fade Animation

// A diferença entre 'mouseenter' e 'mouseover' é que 'mouseenter' não utiliza bubbling...
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', e => handleHover(e, 0.5));

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// EXPLICAÇÃO E LINHA DE RACIOCÍNIO 📋
// O "e" de function (e) sempre será o evento do addEventListener. Exemplo: mouseover, mouseenter, etc.
// Bind não altera o parâmetro de handleHover, o número dentro dele na verdade altera apenas o this..

/////////////////////
// Sticky Navigation

// Este código afetará o desempenho do aparelho pois vai sempre retornar um número a cada scrolling, portanto, não é o melhor caminho...

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

/////////////////////////////////////////////////
// Sticky navigation: Intersection Observer API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  // console.log(entries);
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// SUMMARY 📋
// root: viewport, uma referência para calcular interseções
// threshold: a condição (no caso, ver pelo menos 10% de section1)
// obsCallback: A função que será chamada quando as condições de interseção forem atendidas.
// obsOptions: Um objeto que define as opções para o observador, incluindo o root e o threshold.
// observer: agora está atento às mudanças na visibilidade de section1 em relação ao root especificado (ou ao viewport, se root for null).

/*
RESUMO: O IntersectionObserver oferece uma maneira eficiente de monitorar mudanças na 
interseção de elementos no navegador, permitindo reações dinâmicas baseadas na visibilidade 
dos elementos. A combinação de obsOptions e obsCallback permite configurar quais condições
devem ser atendidas para que a função de callback seja disparada, proporcionando uma 
abordagem poderosa e eficaz para interações baseadas em visibilidade no frontend.
*/

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src');
// console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries; // Precisamos desestruturar pois entries é um array de objetos e cada elemento foi uma mudança observada

  if (!entry.isIntersecting) return; // Ese código serve para a função agir apenas quando entry.isIntersecting === true, ou seja, mesmo que tenha uma interação quando a imagem sair da tela, essa função não fará nada...

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  // entry.target.classList.remove('lazy-img') // Não utilizar este código aqui pois demoraria muito carregar as mudanças nas imagems para quem não tem uma internet boa...

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
  // rootMargin: '200px', // Idealmente seria melhor utilizar esse código para não aparecerem as imagens com filtro. Porém, achei interessante o efeito
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////
// Slider

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlides = slides.length - 1;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  // const nextSlide = function () {
  //   if (curSlide >= maxSlides) {
  //     curSlide = 0;
  //   } else {
  //     curSlide++;
  //   }
  //   goToSlide(curSlide);
  // };

  // Previous slide
  // const prevSlide = function () {
  //   if (curSlide === 0) {
  //     curSlide = maxSlides;
  //   } else {
  //     curSlide--;
  //   }
  //   goToSlide(curSlide);
  // };

  const changeSlide = function (direction) {
    if (direction === 'next') {
      curSlide >= maxSlides ? (curSlide = 0) : curSlide++;
    } else if (direction === 'prev') {
      curSlide === 0 ? (curSlide = maxSlides) : curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    activateDot(0);
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', () => changeSlide('next'));
  btnLeft.addEventListener('click', () => changeSlide('prev'));

  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowRight' && changeSlide('next');
    e.key === 'ArrowLeft' && changeSlide('prev');
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

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

////////////////////////////////////
// Creating and Inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'We use cookied for improved functionality and analytics.'; // Sem html
// message.innerHTML =
// 'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'; // Com html

// header.prepend(message); // Começo de header
// header.append(message); // Final de header
// No caso ele foi inserido pelo prepend e movido pelo append. Só pode existir um elemento específico, por isso, ele não foi duplicado e sim movido.

// header.append(message.cloneNode(true)); // Aqui ele foi clonado para contrariar a regra anterior kkk

// header.before(message); // Leva o elemento message uma posição acima na hierarquia, no caso ele vira irmão de header e aparece antes do mesmo
// header.after(message); // Mesma coisa, porém, agora aparece depois do header

///////////////////////
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
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // 120px = 120 + 30 + px = 150px
// O 30 tem que ser um Number pois caso seja uma String, ele vai concatenar com o valor do height

// document.documentElement.style.setProperty('--color-primary', 'orangered');

//////////////
// Attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo';

////////////////
// Non-standard

// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src); // Retorna o valor absoluto
// console.log(logo.getAttribute('src')); // Retorna o valor relativo

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); // Retorna o valor absoluto
// console.log(link.getAttribute('href')); // Retorna o valor relativo

////////////////////
// Data attributs

// console.log(logo.dataset.versionNumber);

/////////////
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
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

////////////////////////
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

/////////////////////
// Script Loading

/////////////
// 1. Defer
// Uso: Quando você quer garantir que o script seja executado após o HTML ser completamente carregado (DOM totalmente construído).

// Características:

// O script com defer é carregado em paralelo com o HTML.
// A execução do script só ocorre após o DOM estar completamente carregado.
// Os scripts com defer mantêm a ordem de execução em que aparecem no código HTML.

// Quando usar defer:

// Quando seu script depende do DOM estar totalmente carregado (ex.: manipuladores de DOM).
// Quando você tem vários scripts que precisam ser executados em uma ordem específica.
// Ideal para scripts que modificam o conteúdo da página.

/////////////
// 2. Async
// Uso: Quando você quer carregar e executar o script assim que ele estiver disponível, sem esperar pelo carregamento completo do HTML.

// Características:

// O script com async também é carregado em paralelo com o HTML.
// A execução ocorre assim que o script é baixado, independentemente do carregamento do DOM.
// Os scripts com async não mantêm a ordem de execução em relação aos outros scripts, ou seja, são executados assim que carregam.

// Quando usar async:

// Quando o script não depende do DOM (por exemplo, scripts de analytics ou publicidade).
// Quando a ordem de execução dos scripts não é importante.
// Ideal para scripts independentes e de terceiros.
