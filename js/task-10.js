// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  divBoxEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("[type='number']"),
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
};

refs.buttonCreateEl.addEventListener("click", createBoxesMarkup);
refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

function createBoxesMarkup() {
  const amount = refs.inputEl.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let markup = "";
  let size = 20;
  for (let i = 0; i < amount; i++) {
    size += 10;
    let str = `<div id='boxes' style='background: ${getRandomHexColor()}; width: ${size}px; height: ${size}px; margin: 10px;'></div>`;
    markup += str;
  }
  refs.divBoxEl.innerHTML = markup;
}

function destroyBoxes() {
  let markup = "";
  refs.divBoxEl.innerHTML = markup;
  refs.inputEl.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
