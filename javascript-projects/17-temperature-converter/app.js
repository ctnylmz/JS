let celsius = document.querySelector(".celsius")
let fahrenheit = document.querySelector(".fahrenheit")
let kelvin = document.querySelector(".kelvin")

celsius.addEventListener("change",function(){
    fahrenheit.value = (parseFloat(celsius.value) * 9/5 + 32).toFixed(2);
    kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2);
})


fahrenheit.addEventListener("change",function(){
    celsius.value = ((parseFloat(fahrenheit.value) - 32) * 5/9).toFixed(2);
    kelvin.value = ((parseFloat(fahrenheit.value) - 32) * 5/9 + 273.15).toFixed(2);
})


kelvin.addEventListener("change",function(){
    celsius.value = (parseFloat(kelvin.value) - 273.15).toFixed(2);;
    fahrenheit.value = ((parseFloat(kelvin.value) - 273.15) * 9/5 + 32).toFixed(2);
})


