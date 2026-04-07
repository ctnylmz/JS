const images = document.querySelectorAll(".slider img")
const track = document.querySelector(".slider .slider-track");

const prev = document.querySelector(".slider .prev")
const next = document.querySelector(".slider .next")

let SliderNumber = 0;


next.addEventListener("click", function () {

    SliderNumber = SliderNumber + 1;

    if (SliderNumber > images.length - 1) {
        SliderNumber = 0;
    }

    track.style.transform = `translateX(-${SliderNumber * 100}%)`;
})

prev.addEventListener("click", function (e) {


    SliderNumber = SliderNumber - 1;

    if (SliderNumber < 0) {
        SliderNumber = images.length - 1;
    }

    track.style.transform = `translateX(-${SliderNumber * 100}%)`;

});

setInterval(() => {

    SliderNumber = SliderNumber + 1;

    // sona gelince başa dön
    if (SliderNumber > images.length - 1) {
        SliderNumber = 0;
    }

    track.style.transform = `translateX(-${SliderNumber * 100}%)`;

}, 7000);