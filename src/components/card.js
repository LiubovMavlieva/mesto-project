import { deleteCard, likeCard, dislikeCard } from "./api";
import { myId } from "../pages/index";
import { openPopup } from "./modal";
import {imgForm} from './constants.js'

const photoGrid = document.querySelector('.photo-grid');
const popupImgTitle = document.querySelector(".popup__title_type_big-img");

export const photo = document.querySelector('.photo')
function createCard(cardData) {
  const photoTemplate = document.querySelector('#template').content;
  const cardElement = photoTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-grid__img');
  const popupImg = document.querySelector('.popup__img');
  const likeBth = cardElement.querySelector('.photo-grid__like');
  const amountOfLikes = cardElement.querySelector('.photo-grid__likes-amount')
  const deleteBtn = cardElement.querySelector('.photo-grid__delete');

  const cardTitle = cardElement.querySelector('.photo-grid__title').textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  cardImage.addEventListener("click", () => {
    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupImgTitle.textContent = cardData.name;

    openPopup(imgForm)
  });
  amountOfLikes.textContent = cardData.likes.length;
  if (!checkCardId(myId, cardData.owner._id)) {
    deleteBtn.style.display = "none";
  }
  if (checkLikesId(myId, cardData.likes)) {
   likeBth.classList.add("photo-grid__like_active");
  }
  deleteBtn.addEventListener("click", () => {
    removeMyCard(cardElement, cardData._id);
  });
  likeBth.addEventListener("click", () => {
    handleLike(likeBth, cardData._id, amountOfLikes);
  });
  return cardElement;
}

export function addCard(cardData) {
  const card = createCard(cardData);
  photoGrid.prepend(card);
}

function removeMyCard(cardElement, cardId) {
  deleteCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
}

function handleLike(cardlikeElement, cardId, likenQuantity) {
  if (!cardlikeElement.classList.contains("photo-grid__like_active")) {
    likeCard(cardId)
      .then((result) => {
        cardlikeElement.classList.toggle("photo-grid__like_active");
        likenQuantity.textContent = result.likes.length;
      })
      .catch((err) => console.log(err));
  } else {
    dislikeCard(cardId)
      .then((result) => {
        cardlikeElement.classList.toggle("photo-grid__like_active");
        likenQuantity.textContent = result.likes.length;
      })
      .catch((err) => console.log(err));
  }
}

function checkCardId(myId, cardUserId) {
  if(myId === cardUserId) {
    return true;
  } else{
    return false;
  }
}

function checkLikesId(userId, likes) {
  const likesArray = Array.from(likes);
  return likesArray.some(function (element) {
    if (element._id === userId) {
      return element._id === userId;
    }
    return false;
  });
}
