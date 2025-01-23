const submitBtn = document.getElementById('submitButton');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const errorText = document.getElementById('errorText');

submitBtn.addEventListener('click', () => {
  const inputTextEl = inputText.value.trim();
  if (inputTextEl === '') {
    errorText.textContent = 'Будь ласка, введіть текст!';
    outputText.textContent = '';
  } else {
    errorText.textContent = '';
    outputText.textContent = inputTextEl;
  }
});
