const myForm = document.getElementById('myForm');
const message = document.getElementById('message');

myForm.addEventListener('submit', regFormSubmit);

function regFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name').value.trim();
  const emailInput = document.getElementById('email').value.trim();
  message.style.color = 'red';

  if (nameInput === '') {
    message.textContent = 'Please enter your name!';
  } else if (emailInput === '') {
    message.textContent = 'Please enter your email!';
  } else if (!emailInput.includes('@')) {
    message.textContent = 'Please enter valid email!';
  } else {
    message.textContent = `Thank you, ${nameInput}. Your email is ${emailInput}`;
    message.style.color = 'green';
  }
}
