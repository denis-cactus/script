const title = document.getElementById('container');
const addBtn = document.createElement('button');
addBtn.innerHTML;
addBtn.addEventListener('click', () => {});

const inputField = document.getElementById('inputField');
inputField.addEventListener('keydown', event => {
  if (inputField.value.includes('.')) {
    inputField.value = inputField.value.replace('.', '😘');
  }
});

