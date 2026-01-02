const slider = document.querySelector(`.slider`);
const slides = document.querySelectorAll(`.slide`);
let current = 0;
let cycling = false;

const prevBtn = document.querySelector(`.btn_prev`);
const nextBtn = document.querySelector(`.btn_next`);
const dots = document.querySelectorAll(`.dot`);

function updateCurrent(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
  current = index;
}

function nextSlide() {
  current++;
  if (current === slides.length) {
    current = 0;
  }
  updateCurrent(current);
}

function prevSlide() {
  current--;
  if (current < 0) {
    current = slides.length - 1;
  }
  updateCurrent(current);
}

function init() {
  updateCurrent(0);
  if (cycling) {
    startCycling();
  }
}
init();

nextBtn.addEventListener(`click`, () => {
  nextSlide();
});

prevBtn.addEventListener(`click`, () => {
  prevSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    updateCurrent(index);
  });
});
