// ДЗ № 7.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
function removeSymbols(str, symbolToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    if (!symbolToRemove.includes(currentSymbol)) {
      result = result + currentSymbol;
    }
  }
  return result;
}
console.log(removeSymbols(" hello world", ["l", "d"]));
