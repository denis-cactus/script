const mainTitle = document.getElementById('main-title');
const changeBtn = document.getElementById('change-btn');
const addBtn = document.getElementById('add-btn');
const container = document.getElementById('container');
changeBtn.addEventListener('click', () => {
  const newText = '😘 hi chatgpt';
  if (mainTitle.textContent === 'Привіт, Денчик!') {
    mainTitle.textContent = newText;
  } else {
    mainTitle.textContent = 'Привіт, Денчик!';
  }
});
addBtn.addEventListener('click', () => {
  const newEl = document.createElement('h2');
  newEl.textContent = 'Hi Amina!💋';
  container.append(newEl);
  newEl.style.fontSize = '3.6rem';
  newEl.style.textAlign = 'center';
  newEl.style.background = 'purple';
  newEl.style.borderRadius = '1rem';
  newEl.style.height = '20rem';
});
