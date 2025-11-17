// ДЗ № 7.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
// function removeSymbols(str, symbolToRemove) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let currentSymbol = str[i];
//     if (!symbolToRemove.includes(currentSymbol)) {
//       result = result + currentSymbol;
//     }
//   }
//   return result;
// }
// console.log(removeSymbols(" hello world", ["l", "d"]));

// ДЗ № 7.2
// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
function getAverage(array) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let currentElement = array[i];
    if (typeof currentElement === "number") {
      sum = sum + currentElement;
      count = count + 1;
    }
  }
  return sum / count;
}
const symbols = [10, true, 20, "Help", 30, "40"];
console.log(getAverage(symbols));
