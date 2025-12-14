// ДЗ 12.1. - На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
// const container = document.querySelector(".DZ_12_1");
// let savedLink = "";
// container.addEventListener("click", function (event) {
//   if (event.target.id === "setLink") {
//     savedLink = prompt("Ввести посилання на сайт");
//   }
//   if (event.target.id === "goLink") {
//     if (savedLink) {
//       document.location.href = savedLink;
//     } else {
//       console.log("Спочатку введіть посилання на сайт");
//     }
//   }
// });

// ДЗ 12.2. - Створіть HTML-сторінку з декількома кнопками. Ваше завдання - створити обробник подій для батьківського елементу, який відслідковуватиме кліки на всіх кнопках.
// const container = document.querySelector(".DZ_12_2");
// container.addEventListener("click", function (event) {
//   if (event.target.tagName === "BUTTON") {
//     alert("Натиснуто кнопку з id: " + event.target.id);
//   }
// });

// ДЗ № 12.3 - Створіть HTML-сторінку, яка містить список завдань (to-do list) з можливістю додавання нових завдань. Ваше ціль - використовуючи делегування подій, створити обробник подій для списку завдань, який дозволить видаляти завдання при кліку на них.
const input = document.querySelector("#newTaskInput");
const btn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
btn.addEventListener("click", () => {
  const text = input.value;
  const li = document.createElement("li");
  li.textContent = text;
  taskList.append(li);
});
taskList.addEventListener("click", () => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
