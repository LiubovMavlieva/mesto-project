export const config = {
  baseUrl: "https://mesto.nomoreparties.co/v1/plus-cohort-2",
  header: {
    authorization: "6786088b-6175-4e86-b92f-0589f68d9def",
    "Content-Type": "application/json",
  },
};

export const cardConfig = {
  cardImage: ('.photo-grid__img'),
  likeBtn: ('.photo-grid__like'),
  activeLike: ('photo-grid__like_active'),
  deleteBtn: ('.photo-grid__delete'),
  likesCounter: ('.photo-grid__likes-amount')
};

export const popupEditConfig = {
  nameInput: document.querySelector('input[name="name"]'),
  jobInput: document.querySelector('input[name="about"]'),
  formEdit: document.querySelector('.form_edit'),
  editBtn: document.querySelector('.profile__edit-button'),
  nameInfo: document.querySelector('.profile__title'),
  jobInfo: document.querySelector('.profile__subtitle')
};

export const popupAddConfig = {
  formAdd: document.querySelector('.form_add'),
  closePopupAdd: document.querySelector('.popup__close-button_type_add'),
  addButton: document.querySelector('.profile__add-button'),
  inputPlace: document.querySelector('.popup__item_type_place-name'),
  inputSource: document.querySelector('.popup__item_type_link')
};


export const imagePreviewConfig = {
  photoImage: document.querySelector('.popup__image'),
  altModal: document.querySelector('.popup__title')
};

export const popupsConfig = {
  popups: document.querySelectorAll('.popup'),
  buttonClosePopup: 'popup__close-button',
  buttonCloseModal: document.querySelector('.popup__close-button_type_big-img'),
  popupOpened: 'popup_opened'
};

export const popupPhoto = document.querySelector('.popup_type_big-img');

export const profileAvatar = document.querySelector('.profile__avatar-button')

export const avatarImg = document.querySelector('.profile__avatar')

export const avatarObj = {
  avatarPopup: document.querySelector('.popup_type_avatar'),
  avatarInput: document.querySelector('input[name="avatar"]')
}

export const validateConfig = {
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__item_type_error',
  errorClass: '.popup__item-error_active'
};

export const buttons = {
  avatar: document.querySelector('.popup__button_type_avatar'),
  add: document.querySelector('.popup__button_type_add'),
  edit: document.querySelector('.popup__button_type_edit'),
}

export const popupsWithForm = {
  editPopup: document.querySelector('.popup_type_edit'),
  addPopup: document.querySelector('.popup_type_add'),
  avatar: document.querySelector('.popup_type_avatar'),
}