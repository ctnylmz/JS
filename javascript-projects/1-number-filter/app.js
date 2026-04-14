const list = document.querySelector(".number-filter .list")

const input = document.querySelector(".number-filter .input")

let numbers = [10, 80, 40, 1, 50, 100, 30, 4]

numbers.forEach(number => {
  list.innerHTML = list.innerHTML + "<li>" + number + "</li>"
})


input.addEventListener("input", function () {
  const numbersFilter = numbers.filter(number => number.toString().startsWith(input.value))

  list.innerHTML = ""

  numbersFilter.forEach(number => {
    list.innerHTML = list.innerHTML + "<li>" + number + "</li>" 
  })


})

