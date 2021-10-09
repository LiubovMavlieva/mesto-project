import './index.css';
import { initialCard , handleAddNewCard , addCard , createCard } from '../components/card.js'
import { addForm , editForm , handleProfileFormSubmit} from '../components/modal.js';
import {showInputError , checkInputValidity , hasInvalidInput , setEventListeners, enableValidation , myObjValidation} from '../components/validate.js'

initialCard.forEach(item => {
  addCard(item);
})
enableValidation(myObjValidation);

addForm.addEventListener('submit', handleAddNewCard);
editForm.addEventListener('submit', handleProfileFormSubmit);

