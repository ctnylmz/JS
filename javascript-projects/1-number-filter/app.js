const input = document.querySelector("input");
const ul = document.querySelector("ul");

let numbers = [10, 20, 30, 40, 50, 330, 1, 100]

numbers.forEach(number => {
    ul.innerHTML += `<li> ${number} </li>`
})

input.addEventListener("input", function (e) {
    const results = numbers.filter(number => number.toString().startsWith(e.target.value))
    console.log(results);
    
    ul.innerHTML = ""

    results.forEach(result => {
        ul.innerHTML += `<li> ${result} </li>`
    })

})