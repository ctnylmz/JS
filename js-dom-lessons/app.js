const btn = document.querySelector(".btn");
const cards = document.querySelectorAll(".card");

btn.addEventListener("click", function () {

    const firstHidden = document.querySelector(".card.hidden");

    firstHidden.classList.remove("hidden")
});

cards.forEach(card => {
    card.classList.add("hidden")

    card.addEventListener("click", function (e) {
        e.target.remove();
    })
})