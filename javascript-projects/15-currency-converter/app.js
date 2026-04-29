let one = document.querySelector(".one")
let two = document.querySelector(".two")
let oneNumberText = document.querySelector(".oneNumberText")

let twoNumberText = document.querySelector(".twoNumberText")
let final = document.querySelector(".final")


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
                twoNumberText.innerHTML = ones.value / twos.value
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + ones.value / twos.value + " " + two.value
            } else if (ones.value < twos.value) {
                twoNumberText.innerHTML = twos.value / ones.value
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + twos.value / ones.value + " " + two.value
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
                twoNumberText.innerHTML = ones.value / twos.value
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + ones.value / twos.value + " " + two.value
            } else if (ones.value < twos.value) {
                twoNumberText.innerHTML = twos.value / ones.value
                state = twoNumberText.innerHTML
                final.innerHTML = 1 + " " + one.value + " = " + twos.value / ones.value + " " + two.value
            }

        }); 

})



oneNumberText.addEventListener("input", function () {

    twoNumberText.innerHTML = state * oneNumberText.value

})