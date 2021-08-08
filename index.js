const editForm = document.querySelector('.popup_edit');
const addForm = document.querySelector('.popup_add')
const imgForm = document.querySelector('.popup_big-img')

const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const editSaveBtn = document.querySelector('.popup__button_edit');

const addButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.popup__close-button_add');
const addSaveBtn = document.querySelector('.popup__button_add');

const imgCloseButton = document.querySelector('.popup__close-button_big-img');

const nameInput = document.querySelector('.popup__item_type_name');
const jobInput = document.querySelector('.popup__item_type_job');
const placeNameInput = document.querySelector('.popup__item_type_place-name');
const linkInput = document.querySelector('.popup__item_type_link');

const photoGrid = document.querySelector('.photo-grid');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__subtitle');

const popupImgTitle = document.querySelector('.popup__title_big-img');
const popupTitleEdit = document.querySelector('.popup__title_edit').textContent = 'Редактировать профиль';
const popupTitleAdd = document.querySelector('.popup__title_add').textContent = 'Новое место';

nameInput.placeholder = 'Имя';
jobInput.placeholder = 'О себе';
placeNameInput.placeholder = 'Название'; 
linkInput.placeholder = 'Ссылка на картинку';


const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click' , () => {
  openPopup(editForm);
})

closeButton.addEventListener('click' , () => {
  closePopup(editForm);
});

addButton.addEventListener('click' , () => {
  openPopup(addForm);
})

addCloseButton.addEventListener('click' , () => {
  closePopup(addForm);
});

editSaveBtn.addEventListener('click' , () => {
  closePopup(editForm);
})

addSaveBtn.addEventListener('click' , () => {
  closePopup(addForm);
})

imgCloseButton.addEventListener('click' , () => {
  closePopup(imgForm);
})

function userName () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
userName();

function formSubmitHandler (evt) {
  evt.preventDefault(); 

  nameInput.value;
  jobInput.value;
 
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
}

editForm.addEventListener('submit', formSubmitHandler);

const InitialCard= [
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

function createCard (cardData) {
  const photoTemplate = document.querySelector('#template').content;
  const cardElement = photoTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.photo-grid__img');
  const popupImg = document.querySelector('.popup__img');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  const cardTitle = cardElement.querySelector('.photo-grid__title').textContent = cardData.name;

  popupImg.src = cardData.link;
  popupImg.alt = cardData.name;
  popupImgTitle.textContent = cardData.name;

  cardImage.addEventListener('click' , () => {
    openPopup(imgForm)
    popupImg.src = cardData.link;
    popupImg.alt = cardData.name;
    popupImgTitle.textContent = cardData.name;
   })

  const likeBth = cardElement.querySelector('.photo-grid__like');
  likeBth.addEventListener('click' , function(evt){
    evt.target.classList.toggle('photo-grid__like_active');
  })

  const deleteBtn = cardElement.querySelector('.photo-grid__delete');
  deleteBtn.addEventListener('click' , (evt) => {
   evt.target.closest('.photo-grid__element').remove()
  })

  return cardElement;
}

InitialCard.forEach(item => {
  createCard(item);
})

function addCard(cardData){
const card = createCard(cardData);
photoGrid.prepend(card);
}

function generateInitialCards(defaultCardsArray) {
  defaultCardsArray.forEach((cardData) => {
    addCard(cardData);
  });
}
generateInitialCards(InitialCard);

function addNewCard(evt) {
  evt.preventDefault();
  let newobj = InitialCard.cardDataTwo = {
    name: placeNameInput.value,
    link: linkInput.value
  }
  addCard(newobj)
}

addForm.addEventListener('submit' , addNewCard);