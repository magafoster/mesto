let profileEditButton = document.querySelector('.profile__edit-button');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');

let popupElem = document.querySelector('.popup');
let popupContainer = popupElem.querySelector('.popup__container');
let popupForm = popupElem.querySelector('.popup__form');
let popupClose = popupElem.querySelector('.popup__close-button');
let popupInput = popupElem.querySelectorAll('.popup__input_type_text');

let inputName = popupInput[0];
let inputAbout = popupInput[1];

function openPopup () {
  popupElem.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function closePopup () {
  popupElem.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup ();
}

popupClose.addEventListener('click', closePopup);
profileEditButton.addEventListener('click', openPopup);
popupForm.addEventListener('submit', formSubmitHandler);
