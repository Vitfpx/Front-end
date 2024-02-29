'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
const body = document.querySelector('body');
// console.log(btnShowModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', function () {
    if (i === 0) {
      overlay.style.backdropFilter = 'invert(100%)';
      openModal();
    } else if (i === 1) {
      overlay.style.backdropFilter = 'blur(3px)';
      openModal();
    } else if (i === 2) {
      overlay.style.backdropFilter = 'hue-rotate(45deg)';
      openModal();
    }
  });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
