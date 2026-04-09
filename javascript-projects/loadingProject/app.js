const number = document.querySelector(".loading .number");

const loadingRod = document.querySelector(".loading .loading-rod-including .loading-rod");

let stateNumber = 0;


let interval = setInterval(() => {
    stateNumber = stateNumber + 1;

    loadingRod.style.width = `${stateNumber}%`;
    number.innerHTML = `${stateNumber}%`;

    if (stateNumber === 100) {
        clearInterval(interval)
        document.body.innerHTML = "Hello World"
    }

}, 50)


