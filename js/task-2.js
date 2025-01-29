// 1. Динамічне створення елементів та додавання їх на сторінку
// Уявімо, що ти хочеш динамічно створювати список елементів (наприклад, список завдань) і додавати їх на сторінку.
//
//     javascript
// Копіювати
// Редагувати
// // Створимо новий список (ul)
// let list = document.createElement('ul');
//
// // Створимо кілька елементів списку (li) та додамо їх до списку
// for (let i = 1; i <= 5; i++) {
//   let listItem = document.createElement('li');
//   listItem.innerText = `Завдання ${i}`; // Текст для кожного елемента
//   list.appendChild(listItem); // Додаємо li до ul
// }
//
// // Додаємо створений список на сторінку
// document.body.appendChild(list);
// 2. Маніпуляція з аттрибутами елементів
// Уявімо, що на сторінці є картинка, і ти хочеш змінити її атрибути, такі як src або alt.
//
//     javascript
// Копіювати
// Редагувати
// // Вибираємо зображення за id
// let image = document.getElementById('my-image');
//
// // Змінюємо атрибути зображення
// image.setAttribute('src', 'new-image.jpg');  // Новий шлях до зображення
// image.setAttribute('alt', 'Опис нової картинки');  // Змінюємо alt текст
// 3. Вставка елементів перед іншими елементами
// Можна вставити новий елемент перед існуючим на сторінці. Це корисно, коли потрібно вставити, наприклад, нове повідомлення або елемент у певне місце.
//
//     javascript
// Копіювати
// Редагувати
// let newItem = document.createElement('div');
// newItem.innerText = 'Це новий елемент, вставлений на початок!';
//
// // Вибираємо елемент, перед яким хочемо вставити новий елемент
// let referenceElement = document.getElementById('reference');
//
// // Вставляємо новий елемент перед вибраним
// referenceElement.parentNode.insertBefore(newItem, referenceElement);
// 4. Зміна вмісту через шаблонні рядки та обробка подій
// Розглянемо приклад, коли ми хочемо додавати елементи за допомогою шаблонних рядків і обробляти події на цих елементах.
//
//     javascript
// Копіювати
// Редагувати
// // Створюємо кнопку для додавання нових завдань
// let button = document.createElement('button');
// button.innerText = 'Додати завдання';
// document.body.appendChild(button);
//
// // Створимо контейнер для списку завдань
// let taskList = document.createElement('ul');
// document.body.appendChild(taskList);
//
// // Функція для додавання нового завдання
// function addTask(taskText) {
//   let task = document.createElement('li');
//   task.innerHTML = `${taskText} <button class="delete">Видалити</button>`;
//   taskList.appendChild(task);
//
//   // Додаємо подію для кнопки видалення
//   task.querySelector('.delete').addEventListener('click', function() {
//     task.remove(); // Видаляємо завдання зі списку
//   });
// }
//
// // Подія для кнопки "Додати завдання"
// button.addEventListener('click', function() {
//   let taskText = prompt('Введіть текст завдання');
//   if (taskText) {
//     addTask(taskText);
//   }
// });
// У цьому прикладі ми динамічно додаємо завдання, кожне з яких має кнопку для видалення. При натисканні на кнопку завдання видаляється.
//
// 5. Маніпуляція з класами та зміна стилів за допомогою класів
// Коли потрібно маніпулювати класами та стилями, ось як це можна зробити.
//
//     javascript
// Копіювати
// Редагувати
// // Вибираємо елемент
// let box = document.getElementById('box');
//
// // Зміна класу для додавання стилів
// box.classList.add('active'); // Додаємо клас 'active'
// box.classList.remove('inactive'); // Видаляємо клас 'inactive'
//
// // Перевіряємо, чи є клас
// if (box.classList.contains('active')) {
//   console.log('Елемент активний');
// }
//
// // Перемикаємо клас
// box.classList.toggle('highlight'); // Якщо клас є, то видаляється, якщо ні - додається
// 6. Зміна атрибутів та обробка форм
// Тепер давай розглянемо маніпуляцію з формами, де ми будемо отримувати дані з полів і змінювати їх.
//
//     javascript
// Копіювати
// Редагувати
// // Вибираємо форму та поля вводу
// let form = document.getElementById('myForm');
// let input = document.getElementById('myInput');
//
// // Додаємо обробник події на відправку форми
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); // Блокуємо стандартну поведінку форми
//
//   let inputValue = input.value; // Отримуємо значення з поля вводу
//   console.log(inputValue);
//
//   input.value = ''; // Очищаємо поле вводу після надсилання
// });
// Цей приклад показує, як можна обробляти форму та працювати з її полями.
//
// 7. Динамічне створення модальних вікон
// Один із складніших прикладів — створення модальних вікон, які з'являються та зникають при натисканні кнопки.
//
// javascript
// Копіювати
// Редагувати
// // Створимо модальне вікно
// let modal = document.createElement('div');
// modal.classList.add('modal');
// modal.innerHTML = `
//   <div class="modal-content">
//     <span class="close-button">&times;</span>
//     <h2>Модальне вікно</h2>
//     <p>Це динамічно створене модальне вікно.</p>
//   </div>
// `;
//
// // Додаємо модальне вікно на сторінку
// document.body.appendChild(modal);
//
// // Вибираємо кнопку закриття
// let closeButton = modal.querySelector('.close-button');
//
// // Додаємо подію для закриття модального вікна
// closeButton.addEventListener('click', function() {
//   modal.style.display = 'none'; // Сховати модальне вікно
// });
//
// // Відкриємо модальне вікно після 2 секунд
// setTimeout(function() {
//   modal.style.display = 'block';
// }, 2000);
// Тут ми створюємо модальне вікно, яке з'являється через 2 секунди і можна закрити натисканням на кнопку.
//
const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `<li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img
        class="gallery-image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');
galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const largeImageUrl = event.target.dataset.source;

  const instance =
    basicLightbox.create(`<img src="${largeImageUrl}" alt="Large Image" />
`);
  instance.show();
}
