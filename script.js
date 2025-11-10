// ДЗ_6.1
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.
// const user = {
//   name: `Vlad`,
//   age: 39,
//   city: `Kyiv`,
// };
// for (const key in user) {
//   console.log(`${key} - ${user[key]}`);
// }

// ДЗ_6.2
// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);

// ДЗ_6.3
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

const phoneBook = {
  contacts: [
    { name: `Anna`, tel: `+380665005050`, mail: `anna@gmail.com` },
    { name: `Anton`, tel: `+380662002020`, mail: `anton@gmail.com` },
    { name: `Sveta`, tel: `+380661001010`, mail: `sveta@gmail.com` },
  ],
};
const contactToFind = `Sveta`;
const findContact = phoneBook.contacts.find((contact) => contact.name === contactToFind);
console.log(findContact);

const newContact = { name: "Oleg", tel: "+380669009090", mail: "oleg@gmail.com" };
phoneBook.contacts.push(newContact);
console.log(phoneBook.contacts);
