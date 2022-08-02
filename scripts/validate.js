const form = {
  form: ".popup__form",
  input: ".popup__input",
  button: ".popup__button",
  error: ".popup__error",
};

function enableValidation(config) {
  const form = Array.from(document.querySelectorAll(config.form));
  form.forEach((form) => {
    form.addEventListener("input", (evt) => handleFormInput(evt, config));
  });
  form.forEach((form) => {
    form.addEventListener("submit", (evt) => handleFormSubmit(evt, config));
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

  if (isValid) {
    form.reset();
  }
}

function showFieldError(input) {
  const span = input.nextElementSibling;
  if (!input.validity.valid) {
    span.textContent = input.validationMessage;
  } else {
    span.textContent = "";
  }
}

function setSubmitButtonState(form, config) {
  const button = form.querySelector(config.button);
  const isValid = form.checkValidity();
  if (!isValid) {
    button.setAttribute("disabled", true);
  } else {
    button.removeAttribute("disabled");
  }
}

enableValidation(form);
