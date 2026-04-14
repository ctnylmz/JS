
const userInput = document.querySelector('input[name="user"]');
const userForm = document.querySelector('.card');
const list = document.querySelector('.list');
const message = document.querySelector('.message');


const regexPatern = /^.{5,10}$/;



userForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let succes = regexPatern.test(userForm.user.value);

  if (succes === true) {

    list.innerHTML = list.innerHTML + `<li>${userForm.user.value}</li>`
    userForm.user.value = ""

    message.textContent = "User added successfully."

    setInterval(() => {
      message.textContent = "";
    }, 7000);

  } else {

    message.textContent = "Username must be between 5 and 10 characters."

    setInterval(() => {
      message.textContent = "";
    }, 7000);
  }

})

userInput.addEventListener("keyup", e => {

  let succes = regexPatern.test(e.target.value);

  if (succes) {
    userInput.classList.add("active");
  } else {
    userInput.classList.remove("active");
  }

});
