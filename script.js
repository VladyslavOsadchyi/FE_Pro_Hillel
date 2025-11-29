// ДЗ № 10.1
// Дізнатись суму всіх зарплат користувачів:
let company = {
  sales: [
    { name: `Vlad`, salery: 5000 },
    { name: `Vova`, salery: 3000 },
  ],
  development: {
    web: [
      { name: `Vita`, salery: 4000 },
      { name: `Sveta`, salery: 3500 },
    ],
    internals: [{ name: `Vasya`, salery: 1000 }],
  },
};

function getTotalSalery(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((sum, company) => sum + company.salery, 0);
  }
  let total = 0;
  for (let key in obj) {
    total += getTotalSalery(obj[key]);
  }
  return total;
}
console.log(getTotalSalery(company));
