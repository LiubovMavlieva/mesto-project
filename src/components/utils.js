import { activeButton , disabledButton , hasInvalidInput } from "./validate.js";

export function toggleButtonState (inputList, submitButton, objValidation) {
  if (hasInvalidInput(inputList)) {
    disabledButton(submitButton , objValidation)
  } else {
    activeButton(submitButton , objValidation)
  }
}

export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
};

export const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
};