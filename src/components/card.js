import {addForm , imgForm , closePopupEsc} from "./modal.js";
import { openPopup , closePopup } from "./utils.js";

const photoGrid = document.querySelector('.photo-grid');
const placeNameInput = document.querySelector(".popup__item_type_place-name");
const linkInput = document.querySelector(".popup__item_type_link");
const popupImgTitle = document.querySelector(".popup__title_type_big-img");

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
    document.addEventListener("keydown", closePopupEsc);
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

export function handleAddNewCard(evt) {
  evt.preventDefault();
  const newObj = {
    name: placeNameInput.value,
    link: linkInput.value
  }
  addCard(newObj)
  placeNameInput.value = '';
  linkInput.value = '';
  
  closePopup(addForm);
}
