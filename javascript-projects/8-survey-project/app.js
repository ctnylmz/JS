const form = document.getElementById("surveyForm");
const value = document.querySelector(".value");
const reply = document.querySelector(".reply");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    let replyValue = 0;

    const selectedRadios = form.querySelectorAll('input[type="radio"]:checked');
    selectedRadios.forEach(function (radio) {
        if (radio.value === "Yes") {
            replyValue = replyValue + 25;
        }
    });

    reply.classList.remove("hidden")

    let number = 0;

    const intervalId = setInterval(() => {

        number += 1;
        value.textContent = number + "%";

        if (number === replyValue) {
            clearInterval(intervalId);
        }

    }, 9);

});
