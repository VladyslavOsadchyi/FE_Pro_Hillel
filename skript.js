function userInfo() {
  let birthYear = prompt("Який рік вашого народження?");
  if (!birthYear) {
    alert("Шкода що ви не бажаєте вносити інформацію");
    return;
  }
  birthYear = Number(birthYear);

  let city = prompt("В якому місті ви мешкаєте?");
  if (!city) {
    alert("Шкода що ви не бажаєте вносити інформацію");
    return;
  }

  let sport = prompt("Який ваш улюблений вид спорту?");
  if (!sport) {
    alert("Шкода що ви не бажаєте вносити інформацію");
    return;
  }

  let currentYear = 2025;
  let age = currentYear - birthYear + `. `;

  let cityMassege;
  switch (city) {
    case "Київ":
    case "Kyiv":
    case "Kiev":
      cityMassege = "Ти живеш у столиці України. ";
      break;
    case "Вишингтон":
    case "Vasington":
      cityMassege = "Ти живеш у столиці США. ";
      break;
    case "Лондон":
    case "London":
      cityMassege = "Ти живеш у столиці Великої Британії. ";
      break;
    default:
      cityMassege = `Ти живеш у місті ${city}.`;
  }
  let sportMassege = "";
  const champions = {
    баскетбол: "Майкл Джордан",
    футбол: "Кріштіану Роналду",
    "стрибки у висоту": "Ярослава Магучих",
  };
  if (champions[sport.toLowerCase()]) {
    sportMassege = `Круто! Хочеш стати чемпіоном з ${sport}у? Якщо так, то ти можеш стати як ${
      champions[sport.toLowerCase()]
    }.`;
  }

  alert(`Ваш вік: ${age}` + `${cityMassege}` + `${sportMassege}`);
}
userInfo();
