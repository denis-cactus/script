// // const people = [
// //   { name: 'John', age: 16 },
// //   { name: 'Jane', age: 25 },
// //   { name: 'Mike', age: 30 },
// //   { name: 'Anna', age: 17 },
// // ];
// //
// // const adultNames = people
// //   .filter(userAge => userAge.age > 18)
// //   .map(userAge => userAge.name);
// // console.log(adultNames);
//
// const numbers = [1, 2, 3, 4, 5];
// const doubleNum = numbers.map(number => number * 2);
// console.log(doubleNum);
//
// const birthYear = 2006; // Рік народження
// const birthMonth = 1; // Місяць народження (1 - січень, 12 - грудень)
//
// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// const currentMonth = currentDate.getMonth() + 1; // getMonth() повертає 0-11, тому додаємо 1
//
// let age = currentYear - birthYear;
//
// // Якщо поточний місяць ще не настав, віднімаємо 1 рік
// if (currentMonth < birthMonth) {
//   age--;
// }
//
// console.log(`Твій вік: ${age}`);

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  if (myButton.textContent === 'Натисни мене') {
    myButton.textContent = 'Натиснуто!';
  } else {
    myButton.textContent = 'Натисни мене';
  }
});

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', () => {
  const newElement = document.createElement('div');
  newElement.textContent = 'New Element';
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  newElement.appendChild(removeBtn);

  const container = document.getElementById('container');
  container.appendChild(newElement);

  removeBtn.addEventListener('click', () => {
    newElement.remove();
  });
});
