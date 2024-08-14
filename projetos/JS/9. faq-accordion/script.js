'use strict';

// Starting Conditions
const faqHeaders = document.querySelectorAll('.faq__question__header');
const faqButtons = document.querySelectorAll('.faq__question__button');
const faqTexts = document.querySelectorAll('.faq__question__text');
const faqAnswer = document.querySelectorAll('.faq__answer');

// Reset
const init = () => {
  faqTexts.forEach(faqText => faqText.classList.remove('hover'));
};

init();

// Objects de mapeamento dos IDs
const faqButtonMap = {
  faqButton1: 'question1',
  faqButton2: 'question2',
  faqButton3: 'question3',
  faqButton4: 'question4',
};

const faqTextAnswerMap = {
  question1: 'ans1',
  question2: 'ans2',
  question3: 'ans3',
  question4: 'ans4',
};

const faqButtonAnswerMap = {
  faqButton1: 'ans1',
  faqButton2: 'ans2',
  faqButton3: 'ans3',
  faqButton4: 'ans4',
};

// Trocar cor do texto
const colorChangeText = element => element.classList.toggle('hover');

// Trocar a cor ao passar o mouse no botão
const colorChangeBtn = element => {
  const targetId = faqButtonMap[element.id];
  const targetElement = document.getElementById(targetId);
  colorChangeText(targetElement);
};

// Mostrar a resposta ao clicar no texto
const showAnswerText = element => {
  const targetId = faqTextAnswerMap[element.id];
  const targetElement = document.getElementById(targetId);
  targetElement.classList.toggle('hidden');
};

// Mostrar a resposta ao clicar no botão
const showAnswerButton = element => {
  const targetId = faqButtonAnswerMap[element.id];
  const targetElement = document.getElementById(targetId);
  targetElement.classList.toggle('hidden');
};

// Mudanças ao interagir com o texto
faqTexts.forEach(faqText => {
  faqText.addEventListener('mouseover', () => colorChangeText(faqText));
  faqText.addEventListener('mouseleave', () => colorChangeText(faqText));
  faqText.addEventListener('click', () => showAnswerText(faqText));
});

// Mudanças ao interagir com o botão
faqButtons.forEach(faqButton => {
  faqButton.addEventListener('mouseover', () => colorChangeBtn(faqButton));
  faqButton.addEventListener('mouseleave', () => colorChangeBtn(faqButton));
  faqButton.addEventListener('click', () => showAnswerButton(faqButton));
});
