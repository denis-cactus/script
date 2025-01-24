const titleEl = document.getElementById('main-title');
const changeTextButton = document.getElementById('change-btn');
const addButton = document.getElementById('add-btn');
const container = document.querySelector('.container');
changeTextButton.addEventListener('click', () => {
  titleEl.style.color = 'yellow';
  titleEl.style.textDecoration = 'underline';
});

addButton.addEventListener('click', () => {
  const newTextEl = document.createElement('h2');
  newTextEl.textContent = 'Hi, ChatGPT';
  container.appendChild(newTextEl);
  newTextEl.style.color = '#fdfdfd';
});
