'use strict';

// starting condition
const emailButton = document.querySelector('.send-email--btn');
const inputEmail = document.querySelector('#send-email--input');
const acceptMessage = document.querySelector('.accept-message');
const errorMessage = document.querySelector('.error-message');
const errorIcon = document.querySelector('.send-email--error');

let inputMessage = '';

function errorMessageAlert() {
  inputEmail.style.border = '2px solid #f96262';
  errorMessage.style.visibility = 'visible';
  errorIcon.style.display = 'block';
  acceptMessage.style.visibility = 'hidden';
}

function acceptMessageAlert() {
  inputEmail.style.border = '1px solid #00000033';
  acceptMessage.style.visibility = 'visible';
  errorMessage.style.visibility = 'hidden';
  errorIcon.style.display = 'none';
}

emailButton.addEventListener('click', () => {
  inputMessage = inputEmail.value;
  if (inputMessage.includes('@') && inputMessage.includes('.com'))
    acceptMessageAlert();
  else errorMessageAlert();
});
