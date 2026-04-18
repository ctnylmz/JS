const menuBtn = document.querySelector(".navbar .menu-btn");
const menu = document.querySelector(".menu");


menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active")
})