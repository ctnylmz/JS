const userInput = document.querySelector('input[name="user"]');
const userForm = document.querySelector('.card');
const list = document.querySelector('.list');


userForm.addEventListener("submit", function(e){
  e.preventDefault();
  console.log(userForm.user.value);
  list.innerHTML = list.innerHTML + `<li>${userForm.user.value}</li>`
  userForm.user.value = ""


  
})