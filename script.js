// ДЗ № 8.1
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
function counter() {
  let startValue = 0;
  return function (number) {
    startValue += number;
    return startValue;
  };
}
const count = counter();
console.log(count(4));
console.log(count(6));
console.log(count(10));
console.log(count(7));
