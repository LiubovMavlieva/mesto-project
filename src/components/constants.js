export const placeNameInput = document.querySelector(".popup__item_type_place-name");
export const linkInput = document.querySelector(".popup__item_type_link");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

const editButton = document.querySelector(".profile__edit-button");

const editSaveBtn = document.querySelector(".popup__button_type_edit");

const addButton = document.querySelector(".profile__add-button");
const addSaveButton = document.querySelector(".popup__button_type_add");

const nameInput = document.querySelector(".popup__item_type_name");
const jobInput = document.querySelector(".popup__item_type_job");

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

const editForm = document.querySelector(".popup_type_edit");
const addForm = document.querySelector(".popup_type_add");
const imgForm = document.querySelector(".popup_type_big-img");
const avaForm = document.querySelector(".popup_type_avatar");
const avaBtn = document.querySelector('.profile__avatar-button')
const avaSaveBtn = document.querySelector('.popup__button_type_avatar')
const avatarInput = document.querySelector('.popup__item_type_avatar')
const avatar = document.querySelector('.profile__avatar')


export {myObjValidation , nameInput, jobInput,avatar ,avaSaveBtn ,avaForm, avatarInput,avaBtn,profileJob , profileName , editButton , editSaveBtn , addButton , imgCloseButton,  addSaveButton , editForm ,addForm ,imgForm}