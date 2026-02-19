const form = document.getElementById("math-exam-form");
const examPercentage = document.querySelector(".exam-percentage");
const examResult = document.querySelector(".exam-result");
const examDescription = document.querySelector(".exam-description");
const btn = document.querySelector(".btn");




form.addEventListener("submit", function (e) {
    let answers = [8, 10, 3, 25]

    let result = 0;

    e.preventDefault();

    const selectedRadios = form.querySelectorAll('input[type="radio"]:checked');

    selectedRadios.forEach(function (radio, index) {

        if (answers[index] === Number(radio.value)) {
            result += 100 / selectedRadios.length;
        }

    });

    if (result === 100) {
        examPercentage.textContent = result + "%";
        examResult.classList.remove("hidden")
        examDescription.textContent = "Finish"
        btn.disabled = true;

    } else {
        examPercentage.textContent = result + "%";
        examResult.classList.remove("hidden")
    }


});


