const changeStyleBtn = document.getElementById('change-style-btn');
const itemList = document.getElementById('item-list');
const addItemBtn = document.getElementById('add-item-btn');
const paragraphStyle = document.querySelectorAll('p');

addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New Element';

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';

  newItem.appendChild(removeBtn);
  itemList.appendChild(newItem);

  removeBtn.addEventListener('click', () => {
    itemList.removeChild(newItem);
  });
});
