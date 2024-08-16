'use strict';

// starting condition
const reactionValue = document.querySelector('#reaction-value');
const memoryValue = document.querySelector('#memory-value');
const verbalValue = document.querySelector('#verbal-value');
const visualValue = document.querySelector('#visual-value');
const sumBtn = document.querySelector('.summary__btn');
const resultDescription = document.querySelector('.result__description-text');
const resultAssessment = document.querySelector('.result__assessment');
let result = document.querySelector('.result__stats-number');

// reset
result.textContent = 0;

// calcular a media da pontuação
sumBtn.addEventListener('click', () => {
  const resultValue = Math.floor(
    (Number(reactionValue.value) +
      Number(memoryValue.value) +
      Number(verbalValue.value) +
      Number(visualValue.value)) /
      4
  );

  // mostrar resultado
  result.textContent = resultValue;

  // descrição e avaliação adaptáveis
  const getEvaluation = value => {
    // mapeamento das possibilidades
    const evaluations = [
      {
        min: 0,
        max: 0,
        title: 'Critical',
        text: 'The score is at its lowest possible. Immediate improvement is necessary.',
      },
      {
        min: 1,
        max: 24,
        title: 'Needs Work',
        text: 'The score is low, consider practicing more.',
      },
      {
        min: 25,
        max: 49,
        title: 'Fair',
        text: 'Not bad, but you can definitely do better.',
      },
      {
        min: 50,
        max: 74,
        title: 'Good',
        text: 'You did well, but there is room for improvement.',
      },
      {
        min: 75,
        max: 99,
        title: 'Excellent',
        text: 'Great performance! Keep it up!',
      },
      {
        min: 100,
        max: 100,
        title: 'Perfect',
        text: 'You achieved the maximum score! Outstanding!',
      },
      {
        min: 101,
        max: 1000,
        title: 'Unexpected Value',
        text: 'Please review the information provided.',
      },
    ];

    return evaluations.find(
      evaluations => value >= evaluations.min && value <= evaluations.max
    );
  };

  const assessmentAndDescription = getEvaluation(resultValue);

  // atribuindo à interface
  resultAssessment.textContent = assessmentAndDescription.title;
  resultDescription.textContent = assessmentAndDescription.text;
});
