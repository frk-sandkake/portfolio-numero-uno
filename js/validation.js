const contactForm = document.getElementById('contactForm');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const messageSent = document.getElementById('submit');


contactForm.addEventListener('submit', e => {
  e.preventDefault();
  inputValidation();
});

function inputValidation() {

  if(checkLength(fullName.value, 5)) {
    setSuccess(fullName);
  } else {
    setError(fullName, "What's your name, dear?");
  }
  if(emailValidation(email.value)) {
    setSuccess(email);
  } else {
    setError(email, "Don't forget your email address");
  }
  if(checkLength(subject.value, 15)) {
    setSuccess(subject);
  } else {
    setError(subject, "Give your message a good title");
  }
  if(checkLength(message.value, 25)) {
    setSuccess(message);
  } else {
    setError(message, "Could you tell me a bit more?");
  }
  if((checkLength(fullName.value, 5)) && (emailValidation(email.value)) && (checkLength(subject.value, 15)) && (checkLength(message.value, 25))) {
    sentSuccess(messageSent, "Awesome, can't wait to read your message!!");
    contactForm.reset();
  } else {
    sentSuccess(messageSent, "I'm sorry, but I think there's something you've missed");
  }
}

function checkLength(value, len) {
  return value.trim().length > len;
}

function emailValidation(email) {
  const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}