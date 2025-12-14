// ДЗ 12.1. - На сторінці є дві кнопки. При натисканні на першу кнопку користувач повинен ввести в prompt посилання, при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).
const container = document.querySelector(".DZ_12_1");
let savedLink = "";
container.addEventListener("click", function (event) {
  if (event.target.id === "setLink") {
    savedLink = prompt("Ввести посилання на сайт");
  }
  if (event.target.id === "goLink") {
    if (savedLink) {
      document.location.href = savedLink;
    } else {
      console.log("Спочатку введіть посилання на сайт");
    }
  }
});
