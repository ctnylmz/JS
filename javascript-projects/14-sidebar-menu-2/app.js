const navbarButton = document.querySelector(".navbar .navbar-button");
const navbarCloseButton = document.querySelector(".navbar .close-button");

const navbarMenu = document.querySelector(".navbar .navbar-menu");



navbarButton.addEventListener("click",function(){
    navbarMenu.classList.toggle("active")
})

navbarCloseButton.addEventListener("click",function(){
    navbarMenu.classList.toggle("active")
})