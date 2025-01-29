const changeBtnText = document.getElementById('changeTextBtn');
changeBtnText.addEventListener('click', () => {
  changeBtnText.style.transition = 'background-color 0.5s ease';

  if (changeBtnText.textContent === '📤 Натисни мене') {
    changeBtnText.textContent = '✔️ Ти мене натиснув';
    changeBtnText.style.backgroundColor = 'green';
  } else {
    changeBtnText.textContent = '📤 Натисни мене';
    changeBtnText.style.backgroundColor = 'red';
  }
});
