let one = document.querySelector(".fromCurrency")
let two = document.querySelector(".toCurrency")
let oneNumberText = document.querySelector(".amountInput")

let twoNumberText = document.querySelector(".resultText")
let final = document.querySelector(".finalResult")


function convert() {
    fetch("money.json")
        .then(response => response.json())
        .then(data => {
            let ones = data.find(item => item.name === one.value);
            let twos = data.find(item => item.name === two.value);


            twoNumberText.innerHTML = (ones.value / twos.value * oneNumberText.value).toFixed(2)
            final.innerHTML = 1 + " " + one.value + " = " + (ones.value / twos.value).toFixed(2) + " " + two.value

        });
}

one.addEventListener("change", function (e) {
    convert()
})


two.addEventListener("change", function (e) {
    convert()
})



oneNumberText.addEventListener("input", function () {
    convert()
})