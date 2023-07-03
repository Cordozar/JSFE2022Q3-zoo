const inputNumber = document.querySelector('.make-donation__amount-donation');

inputNumber.addEventListener('input', (e) => {
  const input = inputNumber.value;

  if (input < 0) {
    inputNumber.value = '';
  }
  if (input.length > 4) {
    inputNumber.value = '9999';
  }
});
