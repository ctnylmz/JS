let one = document.querySelector(".fromCurrency")
let two = document.querySelector(".toCurrency")
let oneNumberText = document.querySelector(".amountInput")

let twoNumberText = document.querySelector(".resultText")
let final = document.querySelector(".finalResult")


let state = 0;

one.addEventListener("click", function (e) {

    fetch("money.json")
        .then(response => response.json())
        .then(data => {
            let ones = data.find(item => item.name === one.value);
            let twos = data.find(item => item.name === two.value);

            twoNumberText.innerHTML = (ones.value / twos.value).toFixed(4)
            state = twoNumberText.innerHTML
            final.innerHTML = 1 + " " + one.value + " = " + (ones.value / twos.value).toFixed(4) + " " + two.value

        });
})


two.addEventListener("click", function (e) {
     fetch("money.json")
        .then(response => response.json())
        .then(data => {
            let ones = data.find(item => item.name === one.value);
            let twos = data.find(item => item.name === two.value);

            twoNumberText.innerHTML = (ones.value / twos.value).toFixed(4)
            state = twoNumberText.innerHTML
            final.innerHTML = 1 + " " + one.value + " = " + (ones.value / twos.value).toFixed(4) + " " + two.value

        });

})



oneNumberText.addEventListener("input", function () {

    twoNumberText.innerHTML = state * oneNumberText.value

})