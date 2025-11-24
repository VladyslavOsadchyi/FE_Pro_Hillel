// ДЗ № 8.1
// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27
// function counter() {
//   let startValue = 0;
//   return function (number) {
//     startValue += number;
//     return startValue;
//   };
// }
// const count = counter();
// console.log(count(4));
// console.log(count(6));
// console.log(count(10));
// console.log(count(7));

// ДЗ № 8.2
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). Функція повинна повертати результат (у середині функції не має бути консоль лога!)
// function curryGetSum(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// console.log(curryGetSum(5)(2));

// ДЗ № 8.3
// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) . Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.
function getNumber() {
  let lastNumber;
  for (let i = 0; i < 10; i++) {
    let ask = prompt(`Введіть число більше 100`);
    ask = Number(ask);
    lastNumber = ask;
    if (ask > 100) {
      console.log(`Ви ввели число ${ask}`);
      break;
    } else {
      alert(`Ви ввели ${ask}, це менше 100! Спробуйте ще раз.`);
    }
  }
  console.log("Останнє введене число:", lastNumber);
}
getNumber();
