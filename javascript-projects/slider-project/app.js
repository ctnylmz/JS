const images = document.querySelectorAll(".slider img")
const prev = document.querySelector(".slider .prev")
const next = document.querySelector(".slider .next")

let SliderNumber = 0;

images.forEach(image => {
    image.classList.add("hidden")
});

images[SliderNumber].classList.remove("hidden")

next.addEventListener("click", function () {
    images.forEach(image => {
        image.classList.add("hidden")
    });

    SliderNumber = SliderNumber + 1;

    images[SliderNumber].classList.remove("hidden")
})

prev.addEventListener("click", function (e) {
    images.forEach(image => {
        image.classList.add("hidden")

    })

    SliderNumber = SliderNumber - 1;

    images[SliderNumber].classList.remove("hidden")

})