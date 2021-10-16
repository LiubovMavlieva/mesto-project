export {closePopupEsc , openPopup , closePopupOverlay , closePopup}

function closePopupEsc(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

function closePopupOverlay(e) {
  if (e.target.classList.contains('popup')) {
     closePopup(document.querySelector(".popup_opened"));
   }
 }