const form = {
  form: ".popup__form",
  input: ".popup__input",
  button: ".popup__button",
  error: ".popup__error",
  inputError: "popup__input_type_error",
};

function enableValidation(config) {
  const form = Array.from(document.querySelectorAll(config.form));
  form.forEach((form) => {
    form.addEventListener("input", (evt) => handleFormInput(evt, config));
  });
}

function handleFormInput(evt, config) {
  const input = evt.target;
  const form = evt.currentTarget;
  const button = form.querySelector(config.button);
  if (!input.validity.valid) {
    showFieldError(input, form, config);
  } else {
    hideFieldError(input, form, config);
  }
  setSubmitButtonState(form, button);
}


function showFieldError(input, form, config) {
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = input.validationMessage;
  input.classList.add(config.inputError);
}

function hideFieldError(input, form, config) {
  const span = form.querySelector(`.${input.name}-error`);
  span.textContent = "";
  input.classList.remove(config.inputError);
}


function setSubmitButtonState(form, button) {
  const isValid = form.checkValidity();
  if (!isValid) {
    button.setAttribute("disabled", true);
  } else {
    button.removeAttribute("disabled");
  }
}

enableValidation(form);
