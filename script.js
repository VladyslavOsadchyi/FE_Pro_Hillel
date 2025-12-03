// ДЗ № 11.1
// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
const find_result = document.querySelector(".find_result");
const table = document.createElement("table");
for (let row = 1; row <= 10; row++) {
  const tr = document.createElement("tr");

  for (let col = 1; col <= 10; col++) {
    const td = document.createElement("td");
    td.textContent = row * col;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
find_result.appendChild(table);
table.querySelectorAll("td").forEach((td) => {
  td.style.border = "1px solid black";
  td.style.padding = "1px";
});
