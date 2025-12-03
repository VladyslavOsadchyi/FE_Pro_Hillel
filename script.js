// ДЗ № 11.3
// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, отримане випадковим чином (Math.random)
const myPhoto = document.querySelector(`#photo`);
const myBtn = document.querySelector(`#btn`);
function getRandomPhoto() {
  const RandomNumber = Math.floor(Math.random() * 9) + 1;
  myPhoto.src = `img/${RandomNumber}.jpeg`;
}
myBtn.addEventListener(`click`, getRandomPhoto);
getRandomPhoto();
