
const userInput = document.querySelector('input[name="user"]');
const userForm = document.querySelector('.card');
const list = document.querySelector('.list');


const regexPatern = /^.{5,10}$/;

userForm.addEventListener("submit", function(e){
  e.preventDefault();

  let succes = regexPatern.test(userForm.user.value);

  if(succes === true){
    list.innerHTML = list.innerHTML + `<li>${userForm.user.value}</li>`
   userForm.user.value = ""
  }else{
   alert("Must be at least 5 and at most 10 characters.");
  }
  
  
})