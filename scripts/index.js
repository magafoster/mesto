let popupElem = document.querySelector('.popup');
let popupContainer = popupElem.querySelector('.popup__container');
let popupForm = popupElem.querySelector('.popup__form');
let popupClose = popupElem.querySelector('.popup__close-button');
let popupInput = popupElem.querySelectorAll('.popup__input_type_text');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');
let profileEditButton = document.querySelector('.profile__edit-button');

let inputName = popupInput[0];
let inputAbout = popupInput[1];
inputName.value = profileName.textContent;
inputAbout.value = profileAbout.textContent;

popupClose.addEventListener('click', closePopup);

profileEditButton.addEventListener('click', openPopup);
popupForm.addEventListener('submit', formSubmitHandler);

function closePopup () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupElem.style.display = 'none';
}

function openPopup () {
  popupElem.style.display = 'flex';
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  popupElem.style.display = 'none';
}


