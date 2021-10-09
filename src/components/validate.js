const myObjValidation = {
  formSelector: '.form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}; 


function showInputError (input, objValidation) {
  const errorElement = document.querySelector(`.${input.id}-error`);
  input.classList.add(objValidation.inputErrorClass);
  errorElement.textContent = input.validationMessage;
  errorElement.classList.add(objValidation.errorClass);
};

function hideInputError (input, objValidation) {
  const errorElement = document.querySelector(`.${input.id}-error`);
  input.classList.remove(objValidation.inputErrorClass);
  errorElement.classList.remove(objValidation.errorClass);
  errorElement.textContent = '';
};


function checkInputValidity (input,objValidation) {
  if (!input.validity.valid) {
    showInputError(input,objValidation);
  } else {
    hideInputError(input, objValidation);
  }
}

function hasInvalidInput (inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  })
}
function disabledButton (submitButton, objValidation) {
  submitButton.classList.add(objValidation.inactiveButtonClass);
  submitButton.setAttribute('disabled' , 'disabled');
}
function activeButton (submitButton, objValidation) {
  submitButton.classList.remove(objValidation.inactiveButtonClass);
  submitButton.removeAttribute('disabled');
}

import { toggleButtonState } from "./utils.js";

function setEventListeners (form, objValidation) {
  const inputList = Array.from(form.querySelectorAll(objValidation.inputSelector));
  const submitButton = form.querySelector(objValidation.submitButtonSelector);
  toggleButtonState(inputList , submitButton, objValidation)
  inputList.forEach((input) => {
    input.addEventListener('input', function () {
      toggleButtonState(inputList , submitButton, objValidation);
      checkInputValidity(input, objValidation);
    });
  });
};

function enableValidation (objValidation) {
  const formList = Array.from(document.querySelectorAll(objValidation.formSelector));
  formList.forEach((form) => {
    setEventListeners(form, objValidation);
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  });
};

export {showInputError , checkInputValidity , hasInvalidInput , disabledButton, activeButton , setEventListeners , enableValidation, myObjValidation} 