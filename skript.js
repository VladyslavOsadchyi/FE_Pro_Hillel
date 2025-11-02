// let numOrStr = prompt("input number or string");
// console.log(numOrStr);

// if (numOrStr === null) {
//   console.log("ви скасували");
// } else if (numOrStr.trim() === "") {
//   console.log("Empty String");
// } else if (isNaN(+numOrStr)) {
//   console.log(" number is Ba_NaN");
// } else {
//   console.log("OK!");
// }

// let numOrStr = prompt("input number or string");
// console.log(numOrStr);
// switch (true) {
//   case (numOrStr = null):
//     console.log("ви скасували");
//     break;
//   case numOrStr.trim() === "":
//     console.log("Empty String");
//     break;
//   case isNaN(+numOrStr):
//     console.log(" number is Ba_NaN");
//     break;
//   default:
//     console.log("OK!");
// }

// DZ - 4.2
// Спосіб 1:
let num = prompt(`Введіть тризначне число`);
let a = num[0];
let b = num[1];
let c = num[2];
if (a === b && b === c) {
  console.log(`Всі цифри однакові`);
} else if (a === b || a === c || b === c) {
  console.log(`Є однакові цифри`);
} else {
  console.log(`Всі цифри різні`);
}

// Спосіб 2:
let secondNum = prompt(`Введіть тризначне число`);
let d = secondNum[0];
let e = secondNum[1];
let f = secondNum[2];
switch (true) {
  case d === e && e === f:
    console.log(`Всі цифри однакові`);
    break;
  case d === e || d === f || e === f:
    console.log(`Є однакові цифри`);
    break;
  default:
    console.log(`Всі цифри різні`);
}
