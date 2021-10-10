const editForm = document.querySelector(".popup_type_edit");
const addForm = document.querySelector(".popup_type_add");
const imgForm = document.querySelector(".popup_type_big-img");


function closePopupEsc(e) {
  if (e.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

export const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

export function closePopupOverlay(e) {
 if (e.target.classList.contains('popup')) {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export { editForm, addForm , imgForm};