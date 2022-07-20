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

const openPopup = function (popup) {
  popup.classList.add("popup_opened");
};

const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
};

function createCard(cardData) {
  const card = cardsBlock.cloneNode(true);
  const cardImage = card.querySelector(".elements__image");
  const cardName = card.querySelector(".elements__title");
  const cardDlt = card.querySelector(".elements__delete-button");
  const cardLike = card.querySelector(".elements__like-button");

  cardImage.src = cardData.link;
  cardName.textContent = cardData.name;
  cardImage.alt = cardData.cardName;

  function handleRemoveCard() {
    card.remove();
  }

  function handleLikeCard() {
    cardLike.classList.toggle("elements__like-button_active");
  }

  cardImage.addEventListener("click", function () {
    openPopup(popupImg);
    previewImg.src = cardData.link;
    previewText.textContent = cardData.name;
    previewImg.alt = cardData.name;
  });

  cardLike.addEventListener("click", handleLikeCard);
  cardDlt.addEventListener("click", handleRemoveCard);

  return card;
}

initialCards.forEach((cardData) => {
  cardsContainer.prepend(createCard(cardData));
});

function handleAddCard(evt) {
  evt.preventDefault();
  const newCard = [
    {
      name: cardNameInput.value,
      link: cardLink.value,
      alt: cardNameInput.value,
    },
  ];
  newCard.forEach((cardData) => {
    cardsContainer.prepend(createCard(cardData));
  });
  closePopup(popupCard);
  cardNameInput.value = "";
  cardLink.value = "";
}

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

profileEditButton.addEventListener("click", function () {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
});
profileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});
profileForm.addEventListener("submit", handleEditProfileSubmit);

addCardButton.addEventListener("click", function () {
  openPopup(popupCard);
});
cardClose.addEventListener("click", function () {
  closePopup(popupCard);
});
cardForm.addEventListener("submit", handleAddCard);

previewCloseButton.addEventListener("click", function () {
  closePopup(popupImg);
});
