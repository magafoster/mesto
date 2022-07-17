const initialCards = [
  {
    name: 'Лондон',
    link: './images/London.jpg'
  },
  {
    name: 'Лос-Анджелес',
    link: './images/Los_Angeles.jpg'
  },
  {
    name: 'Милан',
    link: './images/Milano.jpg'
  },
  {
    name: 'Москва',
    link: './images/Moscow.jpg'
  },
  {
    name: 'Токио',
    link: './images/Tokyo.jpg'
  },
  {
    name: 'Дубай',
    link: './images/Dubai.jpg'
  }
];

const profileEditButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const addCardButton = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('#popup-profile');
const profileClose = popupProfile.querySelector('#closeProfile');
const profileForm = popupProfile.querySelector('#profileForm');
const inputName = popupProfile.querySelector('#nameInput');
const inputAbout = popupProfile.querySelector('#professionInput');
const profileSubmit = popupProfile.querySelector('#profileSubmit');

const popupCard = document.querySelector('#popup-card');
const cardClose = popupCard.querySelector('#closeCard');
const cardForm = popupCard.querySelector('#cardForm');
const cardSubmit = popupCard.querySelector('#submitCard');
const cardNameInput = popupCard.querySelector('#cardNameInput');
const cardLink = popupCard.querySelector('#cardLinkInput');

const cardTemplate = document.querySelector('#card-template').content;
const allCards = document.querySelector('.elements');

function cards(item) {
  const card = cardTemplate.querySelector('.elements__block').cloneNode(true);
  const cardImage = card.querySelector('.elements__image');
  const cardName = card.querySelector('.elements__title');
  const cardDlt = card.querySelector('.elements__delete-button');
  const cardLike = card.querySelector('.elements__like-button');

  const popupImg = document.querySelector('#popup-img');
  const previewImg = popupImg.querySelector('.popup__img');
  const previewText = popupImg.querySelector('.popup__text-img');
  const previewCloseButton = popupImg.querySelector('#imgClose');

  cardImage.src = item.link
  cardName.textContent = item.name

  cardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_active')
})

  cardDlt.addEventListener('click', (evt) =>{
    evt.target.closest('.elements__block').remove()
})

  cardImage.addEventListener('click', function(){
  popupImg.classList.add('popup_opened')
  previewImg.src = item.link
  previewText.textContent = item.name
})

  previewCloseButton.addEventListener('click', function(){
  popupImg.classList.remove('popup_opened')
})

return card
};

initialCards.forEach((item) => {allCards.prepend(cards(item))});

function openCard() {
  popupCard.classList.add('popup_opened');
}

function closeCard() {
  popupCard.classList.remove('popup_opened');
}

function addCard(evt) {
  evt.preventDefault();
    newCard = [
      {
        name: cardNameInput.value,
        link: cardLink.value,
      }
    ]
newCard.forEach((item) => {allCards.prepend(cards(item))})
closeCard()
}

function openProfile(evt) {
  evt.preventDefault();
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  popupProfile.classList.add('popup_opened');
}

function closeProfile() {
  popupProfile.classList.remove('popup_opened');
}

function formSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closeProfile();
}

profileEditButton.addEventListener('click', openProfile);
profileClose.addEventListener('click', closeProfile);
profileForm.addEventListener('submit', formSubmit);

addCardButton.addEventListener('click', openCard);
cardClose.addEventListener('click', closeCard);
cardForm.addEventListener('submit', addCard);
