// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  formEl: document.querySelector(".login-form"),
};

refs.formEl.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.length === 0 ||
    event.target.elements.password.value.length === 0
  ) {
    alert("Please make sure all fields are filled in correctly");
  } else {
    const formData = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };
    console.log(formData);

    event.currentTarget.reset();
  }
}
