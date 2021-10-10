import './index.css';
import { addCard , createCard } from '../components/card.js'
import {myObjValidation, initialCard , placeNameInput , linkInput, nameInput , jobInput , profileJob, profileName , editButton , editCloseButton , addButton , addCloseButton , imgCloseButton, addSaveButton} from '../components/constants.js';
import { addForm , editForm ,imgForm , closePopup , openPopup , closePopupOverlay} from '../components/modal.js';
import {showInputError , checkInputValidity , hasInvalidInput , setEventListeners, enableValidation} from '../components/validate.js'
import {disabledButton} from '../components/utils.js'
function handleAddNewCard(evt) {
  evt.preventDefault();
  const newObj = {
    name: placeNameInput.value,
    link: linkInput.value
  }
  addCard(newObj)
  const buttons = document.querySelectorAll('.popup__button');
  buttons.forEach((button) => {
    disabledButton(button, myObjValidation)
  })
  placeNameInput.value = '';
  linkInput.value = '';
  closePopup(addForm);
}

initialCard.forEach(item => {
  addCard(item);
})

enableValidation(myObjValidation);

addForm.addEventListener('submit', handleAddNewCard);
editForm.addEventListener('submit', handleProfileFormSubmit);

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editForm);
});

editCloseButton.addEventListener("click", () => {
  closePopup(editForm);
});

addButton.addEventListener("click", () => {
  openPopup(addForm);
});

addCloseButton.addEventListener("click", () => {
  closePopup(addForm);
});

imgCloseButton.addEventListener("click", () => {
  closePopup(imgForm);
});

editForm.addEventListener('click', closePopupOverlay);
addForm.addEventListener('click', closePopupOverlay);
imgForm.addEventListener('click' , closePopupOverlay);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(editForm);
}
