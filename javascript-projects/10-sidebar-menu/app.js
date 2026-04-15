const menuBtn = document.querySelector(".menuBtn")

const navbar = document.querySelector(".navbar")
const overlay = document.querySelector(".overlay")


menuBtn.addEventListener("click",function (){
        navbar.classList.toggle("hidden")
        overlay.classList.toggle("active")
})