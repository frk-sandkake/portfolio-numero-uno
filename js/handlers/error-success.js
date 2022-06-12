const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const successDisplay = inputControl.querySelector('.error');

  successDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const sentSuccess = (element, message) => {
  const inputControl = element.parentElement;
  const sentDisplay = inputControl.querySelector('.message-sent');

  sentDisplay.innerText = message;
  inputControl.classList.add('message-sent');
}