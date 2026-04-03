const images = document.querySelectorAll(".slider img")
const prev = document.querySelector(".slider .prev")
const next = document.querySelector(".slider .next")

let SliderNumber = 0;

images[SliderNumber].classList.add("active")

next.addEventListener("click", function () {
    images.forEach(image => {
        image.classList.remove("active")
    });

    SliderNumber = SliderNumber + 1;

    images[SliderNumber].classList.add("active")
})

prev.addEventListener("click",function (e){

 images.forEach(image => {
    image.classList.remove("active")
 }) 

 SliderNumber = SliderNumber - 1;

 images[SliderNumber].classList.add("active")
});