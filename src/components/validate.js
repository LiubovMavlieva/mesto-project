import {disabledButton , activeButton} from './utils.js'
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

export function toggleButtonState (inputList, submitButton, objValidation) {
  if (hasInvalidInput(inputList)) {
    disabledButton(submitButton , objValidation)
  } else {
    activeButton(submitButton , objValidation)
  }
}

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

export {enableValidation} 