import {imgForm} from './constants.js'
import { openPopup } from './modal.js';
const photoGrid = document.querySelector('.photo-grid');
const popupImgTitle = document.querySelector(".popup__title_type_big-img");

export function createCard(cardData) {
  const photoTemplate = document.querySelector('#template').content;
  const cardElement = photoTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-grid__img');
  const popupImg = document.querySelector('.popup__img');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  const cardTitle = cardElement.querySelector('.photo-grid__title').textContent = cardData.name;

  cardImage.addEventListener('click', () => {
    openPopup(imgForm);
    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupImgTitle.textContent = cardData.name;
  });

  const likeBth = cardElement.querySelector('.photo-grid__like');
  likeBth.addEventListener('click', function (evt) {
    evt.target.classList.toggle('photo-grid__like_active');
  });

  const deleteBtn = cardElement.querySelector('.photo-grid__delete');
  deleteBtn.addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__element').remove();
  });

  return cardElement;
}

export function addCard(cardData) {
  const card = createCard(cardData);
  photoGrid.prepend(card);
}


