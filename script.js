// ДЗ № 11.2
// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір
const myText = document.querySelector("#text");
const myButton = document.querySelector("#btn");
function handleclick(event) {
  if (myText.style.color === "red") {
    myText.style.color = "";
  } else {
    myText.style.color = "red";
  }
}
myButton.addEventListener("click", handleclick);
