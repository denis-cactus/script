const addInputBtn = document.getElementById('changeText');
const textChange = document.querySelector('h1');

addInputBtn.addEventListener('click', () => {
  textChange.textContent = 'New text';
  textChange.style.color = 'yellow';
  
});
