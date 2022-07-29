const form = {
  form: ".popup__form",
  input: ".popup__input",
  button: ".popup__button",
};

function enableValidation(config) {
  const form = Array.from(document.querySelectorAll(config.form));
  form.forEach((form) => {
    form.addEventListener('input', (evt) => handleFormInput(evt, config));
  });
  form.forEach((form) => {
    form.addEventListener('submit', (evt) => handleFormSubmit(evt, config));
  });
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;

  showFieldError(input);
  setSubmitButtonState(form, config);
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  const form = evt.currentTarget;
  const isValid = form.checkValidity();

  if(isValid) {
    form.reset();
  }
}

function showFieldError(input) {
  const span = input.nextElementSibling;
  if (!input.validity.valid) {
  span.textContent = input.validationMessage;
  input.classList.add('popup__input_type_error');
  } else {
    span.textContent = "";
    input.classList.remove('popup__input_type_error');
  }
}

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.button);
  const isValid = form.checkValidity();
  if(!isValid) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }
}

enableValidation(form);
