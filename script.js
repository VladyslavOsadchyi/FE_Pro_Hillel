// ДЗ № 13 - Доробити валідацію для надсилання повідомлення з використанням регулярних виразів.

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const massage = document.querySelector("#massage").value.trim();
  const phone = document.querySelector("#tel").value.trim();
  const email = document.querySelector("#email").value.trim();

  const messageError = document.querySelector("#messageError");
  const phoneError = document.querySelector("#phoneError");
  const emailError = document.querySelector("#emailError");

  messageError.textContent = "";
  phoneError.textContent = "";
  emailError.textContent = "";
  let isValid = true;

  if (massage.length < 5) {
    messageError.textContent = "Повідомлення має бути не менше 5 символів";
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Номер телефону має починатися з +380, та містити 9 цифр";
    isValid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Пошта має містити `@` та `.` .";
    isValid = false;
  }

  if (isValid) {
    console.log("Name: ", name);
    console.log("Massage: ", massage);
    console.log("Phone: ", phone);
    console.log("Email: ", email);
  }
});
