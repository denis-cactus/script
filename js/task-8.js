const inputEl = document.getElementById('name');
const btnClearText = document.getElementById('clear-btn');
const message = document.querySelector('.message');

inputEl.addEventListener('focus', () => {
  message.textContent = 'Ви можете ввести текст';
  message.style.color = 'green';
});

inputEl.addEventListener('blur', () => {
  message.textContent = 'Ви більше не можете вводити текст';
  message.style.color = 'red';
});

btnClearText.addEventListener('click', () => {
  inputEl.value = '';
  inputEl.focus();
    message.textContent = 'Поле очищено!';
    message.style.color = 'blue';
});
