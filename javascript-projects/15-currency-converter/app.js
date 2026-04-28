let one = document.querySelector(".one")
let two = document.querySelector(".two")

let oneNumberText = document.querySelector(".oneNumberText")
let twoNumberText = document.querySelector(".twoNumberText")




one.value = "TL"
let oneNumber = 1;

two.value = "USD"
let twoNumber = 0;

fetch("money.json")
    .then(response => response.json())
    .then(data => {
        twoNumber = data.find(item => item.name === "USD").value;
    });

oneNumberText.innerHTML = oneNumber


fetch("money.json")
    .then(response => response.json())
    .then(data => {
        twoNumberText.innerHTML = data.find(item => item.name === "USD").value;
    });



one.addEventListener("click", function (e) {
    console.log(e.target.value)
})

two.addEventListener("click", function (e) {

fetch("money.json")
    .then(response => response.json())
    .then(data => {
        twoNumberText.innerHTML = data.find(item => item.name === e.target.value).value;
    });

})

oneNumberText.addEventListener("input",function(){
    console.log(oneNumberText.value);
    
   

    fetch("money.json")
    .then(response => response.json())
    .then(data => {
        twoNumberText.innerHTML = data.find(item => item.name === two.value).value;

         twoNumberText.innerHTML = twoNumberText.innerHTML * oneNumberText.value
    });
    
})