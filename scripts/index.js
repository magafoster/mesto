const profileEditButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const addCardButton = document.querySelector(".profile__add-button");

const popupProfile = document.querySelector("#popup-profile");
const profileClose = popupProfile.querySelector("#closeProfile");
const profileForm = popupProfile.querySelector("#profileForm");
const inputName = popupProfile.querySelector("#nameInput");
const inputAbout = popupProfile.querySelector("#professionInput");

const popupCard = document.querySelector("#popup-card");
const cardClose = popupCard.querySelector("#closeCard");
const cardForm = popupCard.querySelector("#cardForm");
const cardNameInput = popupCard.querySelector("#cardNameInput");
const cardLink = popupCard.querySelector("#cardLinkInput");

const cardsContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector("#card-template").content;
const cardsBlock = cardTemplate.querySelector(".elements__block");

const popupImg = document.querySelector("#popup-img");
const previewImg = popupImg.querySelector(".popup__img");
const previewText = popupImg.querySelector(".popup__text-img");
const previewCloseButton = popupImg.querySelector("#imgClose");

function createCards(cardData) {
  const card = cardsBlock.cloneNode(true);
  const cardImage = card.querySelector(".elements__image");
  const cardName = card.querySelector(".elements__title");
  const cardDlt = card.querySelector(".elements__delete-button");
  const cardLike = card.querySelector(".elements__like-button");

  cardImage.src = cardData.link;
  cardName.textContent = cardData.name;

  function openImgPopup() {
    previewImg.src = cardData.link;
    previewText.textContent = cardData.name;
    popupImg.classList.add("popup_opened");
  }

  function closeImgPopup() {
    popupImg.classList.remove("popup_opened");
  }

  function handleRemoveCard() {
    card.remove();
  }

  function handleLikeCard() {
    cardLike.classList.toggle("elements__like-button_active");
  }

  cardImage.addEventListener("click", openImgPopup);
  previewCloseButton.addEventListener("click", closeImgPopup);

  cardLike.addEventListener("click", handleLikeCard);
  cardDlt.addEventListener("click", handleRemoveCard);

  return card;
}

initialCards.forEach((cardData) => {
  cardsContainer.prepend(createCards(cardData));
});

function openCardPopup() {
  popupCard.classList.add("popup_opened");
}

function closeCardPopup() {
  popupCard.classList.remove("popup_opened");
}

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = [
    {
      name: cardNameInput.value,
      link: cardLink.value,
    },
  ];
  newCard.forEach((cardData) => {
    cardsContainer.prepend(createCards(cardData));
  });
  closeCardPopup();
  cardNameInput.value = "";
  cardLink.value = "";
}

function openProfilePopup(evt) {
  evt.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupProfile.classList.add("popup_opened");
}

function closeProfilePopup() {
  popupProfile.classList.remove("popup_opened");
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeProfilePopup();
}

profileEditButton.addEventListener("click", openProfilePopup);
profileClose.addEventListener("click", closeProfilePopup);
profileForm.addEventListener("submit", handleEditProfileSubmit);

addCardButton.addEventListener("click", openCardPopup);
cardClose.addEventListener("click", closeCardPopup);
cardForm.addEventListener("submit", handleAddCard);
