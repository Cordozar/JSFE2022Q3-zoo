const submit = document.querySelector('.footer__form-submit');
const email = document.querySelector('.footer__form-email');

email.addEventListener('focus', () => {
  submit.style.borderColor = '#4b9200';
  submit.style.color = '#4b9200';
});
email.addEventListener('blur', () => {
  submit.style.borderColor = '#ff0000';
  submit.style.color = '#ff0000';
});

submit.addEventListener('click', (e) => {
  e.preventDefault();

  if (email.value !== '') {
    submit.style.borderColor = '#333B41';
    submit.style.color = '#333B41';
    email.value = '';
  } else {
    submit.style.borderColor = '#ff0000';
    submit.style.color = '#ff0000';
    email.value = '';
  }
});
