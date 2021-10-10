export function disabledButton (submitButton, objValidation) {
  submitButton.classList.add(objValidation.inactiveButtonClass);
  submitButton.setAttribute('disabled' , 'disabled');
}
export function activeButton (submitButton, objValidation) {
  submitButton.classList.remove(objValidation.inactiveButtonClass);
  submitButton.removeAttribute('disabled');
}