import { closePopup , openPopup } from "./utils.js";
const editForm = document.querySelector(".popup_type_edit");
const addForm = document.querySelector(".popup_type_add");
const imgForm = document.querySelector(".popup_type_big-img");
export { editForm, addForm , imgForm};
const editButton = document.querySelector(".profile__edit-button");
const editCloseButton = document.querySelector(
  ".popup__close-button_type_edit"
);
const editSaveBtn = document.querySelector(".popup__button_type_edit");

const addButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector(".popup__close-button_type_add");
const addSaveBtn = document.querySelector(".popup__button_type_add");

const imgCloseButton = document.querySelector(
  ".popup__close-button_type_big-img"
);

const nameInput = document.querySelector(".popup__item_type_name");
const jobInput = document.querySelector(".popup__item_type_job");

const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

export function closePopupEsc(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

editButton.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(editForm);
  document.addEventListener("keydown", closePopupEsc);
});

editCloseButton.addEventListener("click", () => {
  closePopup(editForm);
  document.removeEventListener("keydown", closePopupEsc);
});

addButton.addEventListener("click", () => {
  openPopup(addForm);
  document.addEventListener("keydown", closePopupEsc);
});

addCloseButton.addEventListener("click", () => {
  closePopup(addForm);
  document.removeEventListener("keydown", closePopupEsc);
});

imgCloseButton.addEventListener("click", () => {
  closePopup(imgForm);
  document.removeEventListener("keydown", closePopupEsc);
});

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(editForm);
}

function closePopupOverlay(e) {
  if (e.target === editForm || e.target === addForm || e.target === imgForm) {
    closePopup(document.querySelector(".popup_opened"));
  }
}
document.addEventListener("click", closePopupOverlay);


