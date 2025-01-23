const addInputText = document.getElementById('inputText');
const changeTextBtn = document.getElementById('changeText');

changeTextBtn.addEventListener('click', () => {
  const inputValue = addInputText.value;
  const heading = document.querySelector('h1');
  heading.textContent = inputValue;
  heading.style.color = 'yellow';
});
