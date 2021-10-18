import "./index.css"
import {
  addCard
}
from "../components/card";
import {
  enableValidation,
}
from "../components/validate";
import {
  getProfileData,
  getCards,
  createNewCard,
  changeAvatar,
  setUserInfo
}
from "../components/api.js";
import {
  closePopup,
  openPopup,
  closePopupOverlay,
}
from "../components/modal.js";
import {
  myObjValidation,
  placeNameInput,
  linkInput,
  nameInput,
  jobInput,
  avaForm,
  avaBtn,
  avaSaveBtn,
  avatarInput,
  avatar,
  profileJob,
  profileName,
  editButton,
  addButton,
  addSaveButton,
  addForm,
  editForm,
  imgForm
}
from '../components/constants.js';
import { disabledButton } from "../components/utils";
export let myId = null;

Promise.all([getProfileData(), getCards()])
  .then(([userData, cardArray]) => {
    profileName.textContent = userData.name;
    profileJob.textContent = userData.about;
    avatar.src = userData.avatar;
    myId = userData._id;
    cardArray.reverse().forEach((item) => {
      addCard(item);
    });
  })
  .catch((err) => {
    console.log(err);
  });

enableValidation(myObjValidation);

function formPlaceSubmitHandler() {
  addSaveButton.textContent = "Сохранение ...";
  createNewCard(placeNameInput.value, linkInput.value)
    .then((result) => {
      addCard(result);
      placeNameInput.value = "";
      linkInput.value = "";
      disabledButton(addSaveButton, myObjValidation)
      closePopup(addForm);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addSaveButton.textContent = "Сохранить";
    });
}

function formAvatarSubmitHandler() {
  avaSaveBtn.textContent = "Сохранение ...";
  changeAvatar(avatarInput.value)
    .then(() => {
      avatar.src = avatarInput.value;
      avatarInput.value = ""
      disabledButton(avaSaveBtn, myObjValidation)
      closePopup(avaForm);
    })
    .finally(() => {
      avaSaveBtn.textContent = "Сохранить";
    });
}

addForm.addEventListener("submit", formPlaceSubmitHandler);
avaForm.addEventListener("submit", formAvatarSubmitHandler);

function formProfileSubmitHandler(btn, nameInput, aboutInput, nameText, professionText, popup) {
  btn.textContent = "Сохранение ...";
  setUserInfo(nameInput.value, aboutInput.value)
    .then(() => {
      nameText.textContent = nameInput.value;
      professionText.textContent = aboutInput.value;
      closePopup(popup);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  editForm.addEventListener("submit", function() {
    formProfileSubmitHandler(editButton, nameInput, jobInput, profileName, profileJob, editForm
    );
  });

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editForm);
});

addButton.addEventListener("click", () => {
  openPopup(addForm);
});
avaBtn.addEventListener("click", () => {
  openPopup(avaForm)
})

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    })
})
