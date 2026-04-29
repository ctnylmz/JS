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

            if (ones.value === twos.value) {
                twoNumberText.innerHTML = 1;
                state = twoNumberText.innerHTML;
                final.innerHTML = 1 + " " + one.value + " = " + 1 + " " + two.value
            } else if (ones.value > twos.value) {
                twoNumberText.innerHTML = (twos.value / ones.value).toFixed(4)
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + (twos.value / ones.value).toFixed(4) + " " + two.value
            } else if (ones.value < twos.value) {
                twoNumberText.innerHTML = (twos.value / ones.value).toFixed(4)
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + (twos.value / ones.value).toFixed(4) + " " + two.value
            }

            console.log(ones.value + " - " + twos.value);
        });     
})


two.addEventListener("click", function (e) {
  fetch("money.json")
        .then(response => response.json())
        .then(data => {
            let ones = data.find(item => item.name === one.value);
            let twos = data.find(item => item.name === two.value);

            if (ones.value === twos.value) {
                twoNumberText.innerHTML = 1;
                state = twoNumberText.innerHTML;
                final.innerHTML = 1 + " " + one.value + " = " + 1 + " " + two.value
            } else if (ones.value > twos.value) {
                twoNumberText.innerHTML = (twos.value / ones.value).toFixed(4)
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + (twos.value / ones.value).toFixed(4) + " " + two.value
            } else if (ones.value < twos.value) {
                twoNumberText.innerHTML = (twos.value / ones.value).toFixed(4)
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + (twos.value / ones.value).toFixed(4) + " " + two.value
            }

            console.log(ones.value + " - " + twos.value);
        });    

})



oneNumberText.addEventListener("input", function () {

    twoNumberText.innerHTML = state * oneNumberText.value

})