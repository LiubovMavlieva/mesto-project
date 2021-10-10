export const initialCard = [
  {
    name: 'Самара',
    link: 'https://images.unsplash.com/photo-1627680384350-24bf46c0b1fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
  },
  {
    name: 'Волгоград',
    link: 'https://images.unsplash.com/photo-1613863501971-ccb1757e40ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'Краснодар',
    link: 'https://images.unsplash.com/photo-1625862796301-e6658293d54f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
  },
  {
    name: 'Москва',
    link: 'https://images.unsplash.com/photo-1626772857836-ff0078fe0b61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1595849948760-cc6dcea6c162?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
  },
  {
    name: 'Астрахань',
    link: 'https://images.unsplash.com/photo-1592926487153-0d344eaff0ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80jmyv5Dgsw'
  }
];

export const placeNameInput = document.querySelector(".popup__item_type_place-name");
export const linkInput = document.querySelector(".popup__item_type_link");

const nameInput = document.querySelector(".popup__item_type_name");
const jobInput = document.querySelector(".popup__item_type_job");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const editButton = document.querySelector(".profile__edit-button");
const editCloseButton = document.querySelector(
  ".popup__close-button_type_edit"
);
const editSaveBtn = document.querySelector(".popup__button_type_edit");

const addButton = document.querySelector(".profile__add-button");
const addSaveButton = document.querySelector(".popup__button_type_add");
const addCloseButton = document.querySelector(".popup__close-button_type_add");

const imgCloseButton = document.querySelector(
  ".popup__close-button_type_big-img"
);

const myObjValidation = {
  formSelector: '.form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
}; 

export {myObjValidation ,nameInput , jobInput , profileJob, profileName , editButton , editSaveBtn , editCloseButton , addButton , addCloseButton , imgCloseButton,  addSaveButton}